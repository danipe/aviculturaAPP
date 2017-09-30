import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, LoadingController, AlertController, App, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppConfig } from '../../app/app-config';
import { PayPal, PayPalPayment, PayPalConfiguration, InAppBrowser } from "ionic-native";

import { ThanksPage } from '../thanks/thanks';
import { StripePayPage } from '../stripe-pay/stripe-pay';
import { CountryPage } from '../country/country';
import { UserService } from '../../providers/user-service';
import { Storage } from '@ionic/storage';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TabsPage } from '../tabs/tabs';
import { TbarService } from '../../providers/tbar-service';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {
  shippingAddress = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
  };
  billingAddress = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    country: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip: ''
  };
  selShipMethod = 0;
  total: any;
  totalWithShipping = 0;
  desc = '';
  sameAddress = true;

  set_paid: boolean;
  errorModal: any;
  orderID = '';
  loadingModal: any;

  constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, public storage: Storage, public appConfig: AppConfig,
    public navParams: NavParams, public userService: UserService, public wooService: WoocommerceService, public loadingCtrl: LoadingController, public alertCtrl: AlertController
    , public appCtrl: App, public tbarService: TbarService, public viewCtrl: ViewController, public translateService: TranslateService) {
    this.total = this.navParams.get('total');
    this.totalWithShipping = parseFloat(this.navParams.get('total')) + parseFloat(this.appConfig.Shop_Shipping[this.selShipMethod].cost);
    this.desc = this.navParams.get('description');
  }

  ionViewDidEnter() {
    this.translateService.get(['Loading']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();

      this.storage.get('oddwolves-user-shipping-address').then((data) => {
        if (data) {
          this.shippingAddress = JSON.parse(data);
        } else {
          if (this.userService.isAuthenticated == true) {
            this.shippingAddress.first_name = this.userService.first_name;
            this.shippingAddress.last_name = this.userService.last_name;
            this.shippingAddress.email = this.userService.email;
          }
        }
      }).then(() => {
        this.storage.get('oddwolves-user-billing-address').then((data) => {
          if (data) {
            this.billingAddress = JSON.parse(data);
          } else {
            if (this.userService.isAuthenticated == true) {
              this.billingAddress.first_name = this.userService.first_name;
              this.billingAddress.last_name = this.userService.last_name;
              this.billingAddress.email = this.userService.email;
            }
          }
          this.loadingModal.dismiss();
        });
      });
    });

  }

  selectCountry(type) {
    let countryModal = this.modalCtrl.create(CountryPage, {
      'country': type == 'shipping' ? this.shippingAddress.country : this.billingAddress.country,
      'forwhich': type
    });
    countryModal.onDidDismiss((data) => {
      if (data.forwhich == 'shipping') {
        this.shippingAddress.country = data.country;
      }
      else {
        this.billingAddress.country = data.country;
      }
    });
    countryModal.present();
  }

  payViaSite() {
    this.translateService.get(['Loading', 'Notice', 'NetWork_Error', 'OK']).subscribe(value => {
      if (this.orderID == '') {
        var shipping_lines = new Array();
        shipping_lines = [{
          'method_id': this.appConfig.Shop_Shipping[this.selShipMethod].id,
          'method_title': this.appConfig.Shop_Shipping[this.selShipMethod].title,
          'total': this.appConfig.Shop_Shipping[this.selShipMethod].cost
        }];
        this.loadingModal = this.loadingCtrl.create({
          content: value['Loading']
        });
        this.loadingModal.present();

        var line_items = new Array();
        this.storage.get('oddwolves-cart').then((data) => {
          var cartProductArray = JSON.parse(data);
          cartProductArray.forEach(element => {
            line_items.push({
              'product_id': element.product_id,
              'quantity': element.quantity,
              'variation_id': element.variation_id,
              'variations': element.variations
            })
          });

          var billing_address = this.billingAddress;
          var shipping_address = this.shippingAddress;
          let order = {
            billing_address,
            'customer_id': this.userService.id, shipping_address, line_items, shipping_lines
          };

          this.wooService.createOrder('', { order }).then((data: any) => {
            if (data) {
              this.loadingModal.dismiss();
              this.orderID = data.order.id;
              this.hanlderPayViaSite();
            }
          }, (reson) => {
            this.loadingModal.dismiss();
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['NetWork_Error'],
              buttons: [value['OK']]
            }).present();
          });
        });
      } else {
        this.hanlderPayViaSite();
      }
    });
  }

  hanlderPayViaSite() {
    this.translateService.get(['Loading', 'Notice', 'Cancel_Order_Note', 'Pay_Order', 'Cancel_Order']).subscribe(value => {
      let browser = new InAppBrowser(this.appConfig.Shop_URL + '/my-account/orders', '_blank', '');
      browser.show();
      browser.on('exit').subscribe(
        () => {
          this.loadingModal = this.loadingCtrl.create({
            content: value['Loading']
          });
          this.loadingModal.present();
          this.wooService.getOrder(this.orderID).then((order: any) => {
            this.loadingModal.dismiss();
            if (order.status == 'pending') {
              let confirm = this.alertCtrl.create({
                title: value['Notice'],
                message: value['Cancel_Order_Note'],
                enableBackdropDismiss: false,
                buttons: [
                  {
                    text: value['Pay_Order'],
                    handler: () => {
                      confirm.dismiss();
                    }
                  },
                  {
                    text: value['Cancel_Order'],
                    handler: () => {
                      this.loadingModal = this.loadingCtrl.create({
                        content: value['Loading']
                      });
                      this.loadingModal.present();
                      this.wooService.updateOrderStatus(this.orderID, 'cancelled').then(() => {
                        this.appCtrl.getRootNav().setRoot(TabsPage, 0);
                        this.navCtrl.popToRoot();
                        this.loadingModal.dismiss();
                        this.orderID = '';
                      });
                    }
                  }
                ]
              });
              confirm.present();
            } else if (order.status == 'processing') {
              let modal = this.modalCtrl.create(ThanksPage, { "order_id": order.id, "total": order.total, "type": "site" }, { showBackdrop: true, enableBackdropDismiss: true });
              modal.present();
              this.navCtrl.popToRoot();
              this.storage.remove('oddwolves-cart');
              this.tbarService.cartBage = 0;
            }
          });
        },
        err => {
        });
    });

  }

  payPayPal() {
    this.translateService.get(['Loading', 'Notice', 'Paypal_Pay_Error', 'Paypal_Configuration_Error', 'Paypal_Initialization_Error']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      PayPal.init({
        "PayPalEnvironmentProduction": this.appConfig.PayPal_EnvironmentProduction,
        "PayPalEnvironmentSandbox": this.appConfig.PayPal_EnvironmentSandbox
      }).then(() => {
        PayPal.prepareToRender(this.appConfig.Paypal_Environments, new PayPalConfiguration({})).then(() => {

          let payment = new PayPalPayment((String)(Number.parseFloat(this.total) + Number.parseFloat(this.appConfig.Shop_Shipping[this.selShipMethod].cost)), this.appConfig.Shop_Currency, this.desc, 'sale');
          PayPal.renderSinglePaymentUI(payment).then((resp) => {
            // Successfully paid
            this.loadingModal.dismiss();
            let modal = this.modalCtrl.create(ThanksPage, { "paypal_id": resp.response.id, "ship_method": this.selShipMethod, "type": "paypal" }, { showBackdrop: true, enableBackdropDismiss: true });
            modal.present();
            this.navCtrl.popToRoot();
          }, () => {
            // Error or render dialog closed without being successful
            this.loadingModal.dismiss();
            this.alertCtrl.create({
              title: value['Notice'],
              message: value['Paypal_Pay_Error'],
              buttons: [value['OK']]
            }).present();
          });
        }, () => {
          // Error in configuration
          this.loadingModal.dismiss();
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Paypal_Configuration_Error'],
            buttons: [value['OK']]
          }).present();
        });
      }, () => {
        this.loadingModal.dismiss();
        // Error in initialization, maybe PayPal isn't supported or something else
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Paypal_Initialization_Error'],
          buttons: [value['OK']]
        }).present();
      });
    });

  }

  payStripe() {
    //console.log("CHECKOUT2"+Number.parseFloat(this.appConfig.Shop_Shipping[this.selShipMethod].cost));
    let modal = this.modalCtrl.create(StripePayPage, {
      // TODO: Hay que sumarle el precio del envio falta revisar todo esto
      "total": this.total,
      "desc": this.desc
    }, { showBackdrop: true, enableBackdropDismiss: true });

    modal.onDidDismiss((data) => {
      if (data && data.result == true) {
        let modalThanks = this.modalCtrl.create(ThanksPage, {
          "stripe_id": data.stripe_id,
          "ship_method": this.selShipMethod,
          "type": "stripe"
        }, { showBackdrop: true, enableBackdropDismiss: true });
        modalThanks.present();
        this.navCtrl.popToRoot();
      }
    });
    modal.present();
  }
}
