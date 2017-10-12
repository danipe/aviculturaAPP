import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { SearchPage } from '../search/search';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { Http } from '@angular/http';
import { TbarService } from '../../providers/tbar-service';
import { SowService } from '../../providers/sow-service';
import { AppConfig } from '../../app/app-config'
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  counties: any;
  page: number;
  per_page: number;
  has_more: boolean;
  loadingModal: any;
  errorModal: any;
  slides: Array<any>;
  load_slide_end: boolean;
  load_products_end: boolean;
  showSlide = false;
  products: Array<any> = new Array<any>();
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public wooService: WoocommerceService,
    http: Http, public tb: TbarService, public alertCtrl: AlertController, public sowService: SowService, public appConfig: AppConfig, public translateService: TranslateService) {
    this.page = 1;
    this.per_page = 10;
    this.has_more = true;

    this.load_products_end = false;
    this.load_slide_end = false;
    this.getProductsAndSlider();
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

  getProductsAndSlider() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(
      value => {
        this.loadingModal = this.loadingCtrl.create({
          content: value['Loading']
        });
        this.loadingModal.present();
        this.wooService.getProducts({ page: this.page, per_page: this.per_page, fields: 'id,title' }).then((products: Array<any>) => {
          
          this.checkVisibleProducts(products);
          //console.log(products);
          if (products.length < this.per_page) {
            this.has_more = false;
          }
          else {
            this.page++;
          }
          this.load_products_end = true;
          this.loadingModal.dismiss();
        }, (reson) => {
          this.loadingModal.dismiss();
          this.alertCtrl.create({
            title: value['Notice'],
            subTitle: value['NetWork_Error'],
            buttons: [value['OK']]
          });
        });
      }
    )


    if (this.appConfig.Show_Home_Slide) {
      this.sowService.getHomeSlider().then((data: Array<any>) => {
        this.slides = data;
        if (this.slides.length > 0) {
          this.showSlide = true;
        }
        this.load_slide_end = true;
        if (this.load_products_end && this.load_products_end) {
          this.loadingModal.dismiss();
        }
      });
    }

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



  goToSearch(products) {
    this.navCtrl.push(SearchPage, { products: products });
  }

  ionViewWillEnter() {
    this.tb.hideBar = false;
  }
}
