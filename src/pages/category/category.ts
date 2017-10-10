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
  page: number;
  per_page: number;
  has_more: boolean;
  slides: Array<any>;
  load_slide_end: boolean;
  load_products_end: boolean;
  showSlide = false;
  products: Array<any> = new Array<any>();
  constructor(public navCtrl: NavController, public wooService: WoocommerceService, public loadingCtrl: LoadingController,
    public tbarService: TbarService, public alertCtrl: AlertController, public translateService: TranslateService) {
    this.categories = new Array<any>();
    this.page = 1;
    this.per_page = 10;
    this.has_more = true;
    this.load_products_end = false;
    this.load_slide_end = false;
    this.getSuscriptions();    
  }

  ionViewWillEnter() {
    this.tbarService.hideBar = false;
  }

  doRefresh(refresher) {
    this.page=1;
    this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(
      value => {
        this.wooService.getProducts({ page: this.page, per_page: this.per_page, fields: 'id,title' }).then((products: Array<any>) => {
          // this.products = products;
          this.checkVisibleProducts(products);
          if (products.length < this.per_page) {
            this.has_more = false;
          }
          else {
            this.page++;
          }
          refresher.complete();
        }, (reson) => {
          refresher.complete();
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['NetWork_Error'],
            buttons: [value['OK']]
          });

        });
      });
  }

  checkVisibleProducts(products: any){
    this.products = new Array<any>();
    for(let product of products) {
      if(product.catalog_visibility!="hidden") {
        this.products.push(product);
      }
    }
  }

  getSuscriptions() {
    this.products = this.wooService.products.filter((key: any) => key.categories[0] != null);
  }

  doInfinite(infiniteScroll) {
    this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(
      value => {
        if (this.has_more) {
          this.wooService.getProducts({ page: this.page, per_page: this.per_page }).then((products: Array<any>) => {
            products.forEach(p => {
              this.products.push(p);
            });

            if (products.length < this.per_page) {
              this.has_more = false;
            }
            else {
              this.page++;
            }
            infiniteScroll.complete();
          }, (reson) => {
            infiniteScroll.complete();
            this.alertCtrl.create({
              title: value['Notice'],
              subTitle: value['NetWork_Error'],
              buttons: [value['OK']]
            }).present();
          });
        }
        else {
          infiniteScroll.enable(false);
        }
      });
  }

  openDetails(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }

}
