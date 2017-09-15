import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, AlertController,NavParams } from 'ionic-angular';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { ProductDetailsPage } from '../product-details/product-details';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../app/app-config';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  myInput: string = '';
  products: Array<any>;
  products2: Array<any>;
  loadingModal: any;
  noResult: boolean;
  errorModal: any;
  searchTerm: string = '';
  value: any;
  constructor(
    public navCtrl: NavController, public viewCtrl: ViewController, public wooService: WoocommerceService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public translateService: TranslateService,
    public navParams: NavParams, public appConfig: AppConfig
    ) {
    this.noResult = false;
    this.getProducts();
  }

 onSearchChange(){
    if(this.searchTerm != ""){
      this.noResult = false;
      this.products2 = this.filterItems(this.searchTerm);
    }else{
      //this.noResult = true;
    }
  }

  filterItems(x){
      let results = [];
      //console.log(x);
      for (var i = 0; i < this.products.length; ++i) {
        if(this.products[i].name.trim().toLowerCase().search(x) >= 0){
          //console.log(this.products[i].name);
          results.push(this.products[i]);
          this.noResult = false;
        }else if(results.length == 0){
          this.noResult = true;
        }
      }
      return results; 
  }

  getProducts() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.value = value;
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
        this.products = this.navParams.get('products');
        this.products2 = this.products;
        if(this.products.length == 0){
          this.noResult = true;
        }else{

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
    }
  onClose() {
    this.viewCtrl.dismiss();
  }

  viewProduct(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }
}
