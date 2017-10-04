import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController,App, AlertController } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { ProductDetailsPage } from '../product-details/product-details';
import { CheckoutPage } from '../checkout/checkout';
import { Storage } from '@ionic/storage';
import { WoocommerceService, CartProduct } from '../../providers/woocommerce-service';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
import { AppConfig } from '../../app/app-config';
import { TbarService } from '../../providers/tbar-service';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',

})
export class CartPage {
    cart: Array<CartProduct>;
    total: number;
    subTotal: number;
    shipTotal: number;
    loadingModal: any;
    isEmpty: boolean;
    errorModal: any;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public tbarService: TbarService,
        public wooService: WoocommerceService,public appCtrl: App, public loadingCtrl: LoadingController, public userService: UserService, public appConfig: AppConfig, public alertCtrl: AlertController,
        public translateService: TranslateService) {
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.isEmpty = false;
    }

    ionViewDidEnter() {
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        
        this.translateService.get(['Loading']).subscribe(value => {
          this.storage.get('oddwolves-cart').then((data) => {
            if (data) {
              this.cart = JSON.parse(data);
              if (this.cart.length > 0) {
                var includeID = '';
                this.cart.forEach(element => {
                  includeID += element.product_id + ',';
                });
                if (includeID.length > 0) {
                  includeID = includeID.substr(0, includeID.length - 1);
                }
                this.loadingModal = this.loadingCtrl.create({
                  content: value['Loading']
                });
                this.loadingModal.present();
                  var products = this.wooService.products;
                  this.cart.forEach(element => {
                  var findProduct = products.find((product) => {
                    return product.id == element.product_id;
                  });

                  element.name = findProduct.name;
                  element.price_html = findProduct.price_html;

                  if (findProduct.variations.length > 0) {
                    var findVariation = findProduct.variations.find(variation => {
                      return variation.id == element.variation_id;
                    });
                    element.thumb = findVariation.image[0].src;
                    element.price_iva = parseFloat(this.htmlToPlainText(findVariation.price_html));
                  } else {
                    element.thumb = findProduct.images[0].src;
                    element.price_iva = parseFloat(this.htmlToPlainText(findProduct.price_html));
                  }
                  this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
                  this.isEmpty = false;
                  this.loadingModal.dismiss();
                }, (reson) => {
                  this.loadingModal.dismiss();
                  this.errorModal.present();

                });
                this.cart.forEach(product => {
                  this.subTotal += product.price_iva * product.quantity;
                });
                this.total = this.subTotal;
              } else {
                this.isEmpty = true;
              }

            } else {
              this.isEmpty = true;
            }
          });
        });
    }

    htmlToPlainText(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '').replace("&euro;","").replace(',', '.') : '';
    }
    order() {
        this.navCtrl.push(AddressPage);
    }

    openDetails() {
        var detailsModal = this.modalCtrl.create(ProductDetailsPage);
        detailsModal.present();
    }

    goHome() {
        this.appCtrl.getRootNav().setRoot(TabsPage, 0);
    }

    remove(pid) {
        this.wooService.cart.splice(this.wooService.cart.findIndex(product => product.id == pid), 1);
        event.stopPropagation();
        var findIndex = this.cart.findIndex((element) => {
            return element.product_id == pid;
        });
        if (findIndex != -1) {
            this.cart.splice(findIndex, 1);
            if (this.cart.length == 0) {
                this.isEmpty = true;
            }
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += this.accMul(product.price_iva, product.quantity);
        });
        this.total = this.subTotal;
        this.tbarService.cartBage = this.cart.length;
    }

    subQuantity(item) {
        event.stopPropagation();
        if (item.quantity == 1) {
            item.quantity = 1;
        }
        else {
            item.quantity--;
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += this.accMul(product.price_iva, product.quantity);
        });
        this.total = this.subTotal;
    }

    addQuantity(item) {
        event.stopPropagation();
        item.quantity++;
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += this.accMul(product.price_iva, product.quantity);
        });
        this.total = this.subTotal;
    }

    accMul(arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    }

    ionViewWillLeave() {
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
    }

    ionViewWillEnter() {
        this.isEmpty = false;
    }

    inputNum() {
        event.stopPropagation();
    }

    inputChanged(item) {
        event.stopPropagation();

        if (isNaN(item.quantity) == true || item.quantity <= 1) {
            item.quantity = 1;
        }
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.subTotal = 0;
        this.cart.forEach(product => {
            this.subTotal += this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    }

    checkout() {
        var desc = '';
        let countOnline = 0;
        let countNormal = 0;
        this.cart.forEach(element => {
          if(element.variation_name == "Online "){
            countOnline += 1;
          }else{
            countNormal += 1;
          }
          desc += element.name + ',';
        });
        if (desc.length > 0) {
          desc = desc.substr(0, desc.length - 1);
        }
        if (this.userService.isAuthenticated == true) {
          desc = desc.substr(0, desc.length - 1);
            if(countOnline > 0 && countNormal == 0){
              this.navCtrl.push(CheckoutPage, { "total": this.total, "description": desc , "envio_gratis": true });
            }else{
              this.navCtrl.push(CheckoutPage, { "total": this.total, "description": desc , "envio_gratis": false });
            }
        } else {
          let modal = this.modalCtrl.create(LoginPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
          modal.present();
          modal.onDidDismiss(() => {
            if (this.userService.isAuthenticated == true) {
              this.navCtrl.push(CheckoutPage, { "total": this.total, "description": desc });
            }

          });
        }
    }

    viewProduct(product) {
        this.navCtrl.push(ProductDetailsPage, {  product: this.wooService.products.find(p => p.id = product.id), org: 'cart' });
    }
}
