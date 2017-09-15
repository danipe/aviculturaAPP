import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController,App } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { Storage } from '@ionic/storage';
import { AppConfig } from '../../app/app-config';
import { TbarService } from '../../providers/tbar-service';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TranslateService } from '@ngx-translate/core';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Wishlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  products: any;
  wishlistProduct: any;
  loadingModal: any;
  isEmpty: boolean;
  errorModal: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public wooService: WoocommerceService,
    public storage: Storage,public appCtrl: App, public appConfig: AppConfig, public tbarService: TbarService, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.isEmpty = false;
  }

  ionViewDidEnter() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.tbarService.hideBar = false;
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.storage.get('oddwolves-wishlist').then((data) => {
        if (data) {
          this.wishlistProduct = JSON.parse(data);
          if (this.wishlistProduct.length > 0) {
            var includeID = '';
            this.wishlistProduct.forEach(element => {
              includeID += element.product_id + ',';
            });
            if (includeID.length > 0) {
              includeID = includeID.substr(0, includeID.length - 1);
            }

            this.wooService.getProducts({ include: includeID }).then((products: Array<any>) => {
              this.products = products;
              this.isEmpty = false;
              this.loadingModal.dismiss();
            }, (reson) => {
              this.loadingModal.dismiss();
              this.alertCtrl.create({
                title: value['Notice'],
                message: value['NetWork_Error'],
                buttons: [value['OK']]
              }).present();
            });
          }
          else {
            this.isEmpty = true;
            this.loadingModal.dismiss();
          }
        } else {
          this.isEmpty = true;
          this.loadingModal.dismiss();
        }
      });
    });

  }

  viewProduct(product) {
    let modal = this.modalCtrl.create(ProductDetailsPage, { product: product, org: 'carttab' }, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

  goHome() {
    this.appCtrl.getRootNav().setRoot(TabsPage, 0);
  }

  deleteProduct(product) {
    event.stopPropagation();
    var findIndex = this.products.findIndex((element) => {
      return element.id == product.id;
    });
    if (findIndex != -1) {

      this.products.splice(findIndex, 1);
      if (this.products.length == 0) {
        this.isEmpty = true;
      }
    }
    findIndex = this.wishlistProduct.findIndex((element) => {
      return element.product_id == product.id;
    });
    this.wishlistProduct.splice(findIndex, 1);
    this.storage.set('oddwolves-wishlist', JSON.stringify(this.wishlistProduct));
  }

}
