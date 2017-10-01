import { Component} from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import { Http, Headers } from '@angular/http';
import { AppConfig } from '../../app/app-config';
import { TranslateService } from '@ngx-translate/core';
import { CardIO } from 'ionic-native';
import moment from 'moment';
declare var Stripe;


/*
  Generated class for the StripePay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stripe-pay',
  templateUrl: 'stripe-pay.html'
})
export class StripePayPage {
  card_number = '';
  card_cvc = '';
  card_exp_month = '';
  card_exp_year = '';
  total = 0;
  desc = '';
  max_year = 0;
  count = 0;
  loadingModal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public appConfig: AppConfig, public alertCtrl: AlertController,
    public viewCtrl: ViewController, public loadingCtrl: LoadingController, public translateService: TranslateService,public cardIO: CardIO) {
    
    var now = moment();
    this.card_exp_month = moment(now.format(), moment.ISO_8601).format();
    this.card_exp_year = moment(now.format(), moment.ISO_8601).format();
    this.max_year = new Date().getFullYear() + 100;

    this.total = this.navParams.get('total');
    this.desc = this.navParams.get('desc');

  }

  onSearchChange(event) {  
   this.count++;
    if(this.count == 3){
        var reformat = event.target.value.replace(/(\d{4}\s*)/g, function(match){
            if(match.match(/\s/)){
              return match;
            }
            return match + " ";
    });
    this.card_number = reformat; 
    this.count = 0;
    }
  }

  avoidSpace(event: any) {
    var k = event ? event.which : event.keyCode; if (k == 32) return false;
  } 
  pay() {
    this.translateService.get(['Notice', 'OK', 'Require_Card_Number', 'Require_Expire_Month', 'Require_Expire_Year', 'Require_Card_Cvc', 'Loading']).subscribe(value => {
      if (this.card_number.trim().length == 0) {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Require_Card_Number'],
          buttons: [value['OK']]
        }).present();
        return;
      }
      if (this.card_exp_month.trim().length == 0) {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Require_Expire_Month'],
          buttons: [value['OK']]
        }).present();
        return;
      }
      if (this.card_exp_year.trim().length == 0) {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Require_Expire_Year'],
          buttons: [value['OK']]
        }).present();
        return;
      }
      if (this.card_cvc.trim().length == 0) {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Require_Card_Cvc'],
          buttons: [value['OK']]
        }).present();
        return;
      }
      var key = '';
      var secret = '';
      if (this.appConfig.Enable_Stripe_Test_Mode) {
        key = this.appConfig.Stripe_Test_Publishable_Key;
        secret = this.appConfig.Stripe_Test_Secret_Key;
      } else {
        key = this.appConfig.Stripe_Live_Publishable_Key;
        secret = this.appConfig.Stripe_Live_Secret_Key;
      }
      Stripe.setPublishableKey(key);
      try {
        this.loadingModal = this.loadingCtrl.create({
          content: value['Loading']
        });
        this.loadingModal.present();
        Stripe.card.createToken({
          number: this.card_number,
          cvc: this.card_cvc,
          exp_month: moment(this.card_exp_month).format('M'),
          exp_year: moment(this.card_exp_year).format('YY'),

        }, (status, response) => {
          this.stripeResponseHandler(status, response)
        });
      }
      catch (e) {

        this.handleError("submitPayment - inner", e);
      }
    });

  }

  stripeResponseHandler(status, response) {
    var headers = new Headers();
    if (this.appConfig.Enable_Stripe_Test_Mode == true) {
      headers.append('Authorization', 'Bearer ' + this.appConfig.Stripe_Test_Secret_Key);
    } else {
      headers.append('Authorization', 'Bearer ' + this.appConfig.Stripe_Live_Secret_Key);
    }
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.translateService.get(['Notice', 'OK', 'Stripe_Pay_Fail']).subscribe(value => {
      this.http.post('https://api.stripe.com/v1/charges',
        'amount=' + (this.total * 100) +
        '&currency=' + this.appConfig.Shop_Currency +
        '&source=' + response.id +
        '&description=' + this.desc,
        { headers: headers }).map(res => res.json())
        .subscribe(data => {
          if (data.paid == true && data.status == 'succeeded') {
            this.loadingModal.dismiss();
            var id = data.id;
            this.viewCtrl.dismiss({ stripe_id: id, result: true });
          } else {
            this.loadingModal.dismiss();
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['Stripe_Pay_Fail'] + '<br/>' + data.failure_message,
              buttons: [value['OK']]
            }).present();
          }
        }, (reason) => {
          this.loadingModal.dismiss();
          var result = JSON.parse(reason._body);
          this.alertCtrl.create({
            title: value['Notice'],
            message: result.error.message,
            buttons: [value['OK']]
          }).present();
        });
    });
  }

  cardScan() {
    CardIO.canScan()
      .then(
        (res: boolean) => {
          if(res){
            let options = {
              requireExpiry: true,
              requireCVV: true,
              useCardIOLogo: true,
              requirePostalCode: false
            };
            CardIO.scan(options)
            .then(
              (res: any) => {
                this.card_number = res["cardNumber"];
                //Workaround como la copa de un pino blanco
                //Arreglar el formato que recibo por parte de CardIO, y pasarle toISOString con el date cambiado.
                if(res["expiryMonth"] == 10 || res["expiryMonth"] == 11 || res["expiryMonth"] == 12){
                  console.log("Es mayor que uno");
                  this.card_exp_month = "2017-"+res["expiryMonth"]+"-30T00:45:12+02:00";
                  this.card_exp_year = res["expiryYear"]+"-"+res["expiryMonth"]+"-30T00:45:12+02:00";
                  console.log(this.card_exp_year);
                }else{
                  console.log("Es menor que uno");
                  this.card_exp_month = "2017-0"+res["expiryMonth"]+"-30T00:45:12+02:00";
                  this.card_exp_year = res["expiryYear"]+"-0"+res["expiryMonth"]+"-30T00:45:12+02:00";
                  console.log(this.card_exp_year);
                }
                this.card_cvc = res["cvv"];
              });
          }
        }
      );
  }

  handleError(error, e) {
    this.loadingModal.dismiss();
    this.translateService.get(['Notice', 'OK', 'Connect_Stripe_Error']).subscribe(value => {
      this.alertCtrl.create({
        title: value['Notice'],
        message: value['Connect_Stripe_Error'],
        buttons: [value['OK']]
      }).present();
    });

  }

  close() {
    this.viewCtrl.dismiss();
  }

}
