import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, Platform } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { TranslateService } from '@ngx-translate/core';
import { WoocommerceService } from '../../providers/woocommerce-service';
import { InAppBrowser } from 'ionic-native';


/*
  Generated class for the Downloads page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-download',
  templateUrl: 'download.html'
})
export class DownloadPage {
  downloadList: Array<any>;
  loadingModal: any;
  findProduct: any;
  products: any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    public translateService: TranslateService,
    public wooService: WoocommerceService,
    public platform: Platform) {

  }
  ionViewDidLoad() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();
      this.wooService.getAllDownloads(this.userService.id).then((
        downloadList: Array<any>) => {
          this.downloadList = downloadList;
          var products = this.wooService.products;
          this.downloadList.forEach(element => {
            this.findProduct = products.find((product) => {
              return product.id == element.product_id;
            });
            element["src"] = this.findProduct.images[0].src;
          });
          this.loadingModal.dismiss();
      }, (reson) => {
        this.loadingModal.dismiss();
      });
    });
  }
  openUrl(url){
    this.platform.ready().then(() => {
        let browser = new InAppBrowser(url,'_blank','location=no');
    });
  }
}
