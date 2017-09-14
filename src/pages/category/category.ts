import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { ListingsPage } from '../listings/listings';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TbarService } from '../../providers/tbar-service';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  items: any;
  loadingModal: any;
  categories: Array<any>;
  errorModal: any;
  constructor(public navCtrl: NavController, public wooService: WoocommerceService, public loadingCtrl: LoadingController,
    public tbarService: TbarService, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.categories = new Array<any>();

  }

  ionViewWillEnter() {
    this.tbarService.hideBar = false;
  }

  ionViewDidLoad() {
    this.translateService.get(['Loading', 'Notice', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.wooService.getStoreCategories({ page: 1, per_page: 100 }).then((categories: Array<any>) => {

        var sortCategories = new Array<any>();
        var noParentCat = categories.filter((value: any) => {
          return value.parent == 0;
        });

        noParentCat.forEach(elementZero => {
          elementZero.sort = 0;
          sortCategories.push(elementZero);
          var firstChildCat = categories.filter((value: any) => {
            return value.parent == elementZero.id;
          });
          firstChildCat.forEach(elementFirst => {
            elementFirst.sort = 1;
            sortCategories.push(elementFirst);
            var secondChildCat = categories.filter((value: any) => {
              return value.parent == elementFirst.id;
            });
            secondChildCat.forEach(elementSecond => {
              elementSecond.sort = 2;
              sortCategories.push(elementSecond);
            });
          });
        });
        this.categories = sortCategories;
        console.log(categories);
        this.loadingModal.dismiss();
      }, (error) => {
        this.loadingModal.dismiss();
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['NetWork_Error'],
          buttons: [value['OK']]
        }).present();
      });
    });

  }

  doRefresh(refresher) {
    this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(value => {
      this.wooService.getStoreCategories({ page: 1, per_page: 100 }).then((categories: Array<any>) => {
        categories.forEach(element => {

        });
        this.categories = categories;

        refresher.complete();
      }, (reson) => {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['NetWork_Error'],
          buttons: [value['OK']]
        }).present();
        refresher.complete();
      });
    });

  }

  openDetails(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }

  openListings(catID) {
    this.navCtrl.push(ListingsPage, { 'catID': catID });
  }

}
