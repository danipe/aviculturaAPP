import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, App, AlertController } from 'ionic-angular';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { UserService } from '../../providers/user-service';
import { TbarService } from '../../providers/tbar-service';
import { Storage } from '@ionic/storage';
import { AppConfig } from '../../app/app-config';
import { TabsPage } from '../tabs/tabs';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the Thanks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html'
})
export class ThanksPage {
  id: string;
  total: string;
  pay_id: string;
  ship_method: number;
  errorModal: any;
  pay_type: string;
  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams,
    public loadingCtrl: LoadingController, public wooService: WoocommerceService, public userService: UserService, public appConfig: AppConfig,
    public viewCtrl: ViewController, public appCtrl: App, public tbarService: TbarService, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.pay_type = this.navParams.get('type');
    if (this.pay_type == 'paypal') {
      this.pay_id = this.navParams.get('paypal_id');
    } else if (this.pay_type == 'stripe') {
      this.pay_id = this.navParams.get('stripe_id');
    }
    this.ship_method = this.navParams.get('ship_method');
    this.id = "";
    this.total = "";
  }

  ionViewDidEnter() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      if (this.pay_type == 'paypal' || this.pay_type == "stripe") {
        var shippingAddress;
        var billingAddress;
        var loadingModal = this.loadingCtrl.create({
          content:  value['Loading']
        });
        loadingModal.present();
        var shipping_lines = new Array();
        shipping_lines = [{
          'method_id': this.appConfig.Shop_Shipping[this.ship_method].id,
          'method_title': this.appConfig.Shop_Shipping[this.ship_method].title,
          'total': this.appConfig.Shop_Shipping[this.ship_method].cost
        }];

        var line_items = new Array();

        this.storage.get('oddwolves-user-billing-address').then((data) => {
          if (data) {
            billingAddress = JSON.parse(data);
          }
        }).then(() => {
          this.storage.get('oddwolves-user-shipping-address').then((data) => {
            if (data) {
              shippingAddress = JSON.parse(data);
            }
          }).then(() => {
            this.storage.get('oddwolves-cart').then((data) => {
              var cartProductArray = JSON.parse(data);
              cartProductArray.forEach(element => {
                
                if(this.wooService.products.find(p => p.id == element.product_id).bundled_items.length > 0) {
                  this.wooService.products.find(p => p.id == element.product_id).bundled_items.forEach(p => {
                    console.log(p);
                      line_items.push({
                          'product_id': p.product_id,
                          'quantity': 1,
                          'variation_id': p.product_id,
                          'variations': [],
                          "total": "0",
                          "price": "0"
                        });
                  });
                }
                
                line_items.push({
                    'product_id': element.product_id,
                    'quantity': element.quantity,
                    'variation_id': element.variation_id,
                    'variations': element.variations
                  });
                
              });

              var payment_details = {
                'method_id': this.pay_type,
                'method_title': this.pay_type,
                'paid': true,
                'transaction_id': this.pay_id
              };

              var billing_address = billingAddress;
              var shipping_address = shippingAddress;
              let order = {
                billing_address,
                'customer_id': this.userService.id, shipping_address, line_items, shipping_lines, payment_details
              };

              this.wooService.createOrder('', { order }).then((data: any) => {
                if (data) {
                  this.storage.remove('oddwolves-cart');
                  this.tbarService.cartBage = 0;
                  this.id = data.order.id;
                  this.total = data.order.total;
                  loadingModal.dismiss();
                }
              }, (reson) => {
                loadingModal.dismiss();
                this.alertCtrl.create({
                   title: value['Notice'],
                  message: value['NetWork_Error'],
                  buttons: [value['OK']]
                }).present();
              });
            });
          });
        });
      } else {
        this.id = this.navParams.get('order_id');
        this.total = this.navParams.get('total');
      }
    });

  }

  goHome() {
    this.appCtrl.getRootNav().setRoot(TabsPage, 0);
    this.viewCtrl.dismiss();
  }

}
