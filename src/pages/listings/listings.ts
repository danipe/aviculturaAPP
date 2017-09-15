import { Component } from '@angular/core';
import { NavController, ActionSheetController, ModalController, LoadingController, NavParams, AlertController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { TbarService } from '../../providers/tbar-service';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the Listings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-listings',
    templateUrl: 'listings.html'
})
export class ListingsPage {
    page: number;
    per_page: number;
    has_more: boolean;
    loadingModal: any;
    errorModal: any;
    products: any;
    value: any;
    categoryID: string;
    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController,
        public loadingCtrl: LoadingController, public wooService: WoocommerceService, public navParams: NavParams, public tbarService: TbarService, public alertCtrl: AlertController
        , public translateService: TranslateService) {
        this.page = 1;
        this.per_page = 10;
        this.has_more = true;
        this.categoryID = this.navParams.data.catID;
        this.getProducts();
    }

    ionViewWillEnter() {
        this.tbarService.hideBar = false;
    }

    getProducts() {
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
            this.loadingModal = this.loadingCtrl.create({
                content: value['Loading']
            });
            this.loadingModal.present();
            //this.wooService.getProducts({ page: this.page, per_page: this.per_page, category: this.categoryID }).then((products: Array<any>) => {
                this.products = this.wooService.products.filter((product: any) => {
                    if(product.categories.length > 0){
                        return product.categories[0].id == this.categoryID; 
                    }else{
                        console.log("not iense gsnghsrterogias");
                    }
                });
                if (this.products.length < this.per_page) {
                    this.has_more = false;
                }
                else {
                    this.page++;
                }
                this.loadingModal.dismiss();
            }, (reson) => {
                this.loadingModal.dismiss();
                this.alertCtrl.create({
                    title: this.value['Notice'],
                    message: this.value['NetWork_Error'],
                    buttons: [this.value['OK']]
                }).present();
            });
        //});

    }

    doInfinite(infiniteScroll) {
        if (this.has_more) {
            this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(value => {
                this.wooService.getProducts({ page: this.page, per_page: this.per_page, category: this.categoryID }).then((products: Array<any>) => {
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
                        message: value['NetWork_Error'],
                        buttons: [value['OK']]
                    }).present();
                });
            });

        }
        else {

            infiniteScroll.enable(false);
        }
    }

    viewProduct(product) {
        this.navCtrl.push(ProductDetailsPage, { product: product });
    }

    openDetails() {
        var detailsModal = this.modalCtrl.create(ProductDetailsPage);
        detailsModal.present(detailsModal);
    }

    doRefresh(refresher) {
        this.page=1;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(value => {
            this.wooService.getProducts({ page: this.page, per_page: this.per_page, category: this.categoryID }).then((products: Array<any>) => {
                this.products = products;
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
                }).present();
            });
        });

    }

}
