import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { OrderListPage } from '../order-list/order-list';
import { LoginPage } from '../login/login';
import { UserService } from '../../providers/user-service';
import { TbarService } from '../../providers/tbar-service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { DownloadPage } from '../download/download';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
     public modalCtrl: ModalController,
     public userService: UserService
    , public alertCtrl: AlertController,
    public tbarService: TbarService,
    public storage: Storage,
    public translateService: TranslateService) {
  }

  openOrderList() {
    if (this.userService.isAuthenticated) {
      this.navCtrl.push(OrderListPage, { direction: 'forward' });
    } else {
      this.translateService.get(['Notice', 'No_Sign_In', 'OK']).subscribe(value => {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['No_Sign_In'],
          buttons: [value['OK']]
        }).present();
      });

    }
  }

  ionViewWillEnter() {
    this.tbarService.hideBar = false;
  }

  loginOut() {
    this.userService.destroyUserCredentials();
    this.storage.remove('oddwolves-user-info');
  }

  login() {
    let modal = this.modalCtrl.create(LoginPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }
  openDownloadsPage(){
    if (this.userService.isAuthenticated) {
      this.navCtrl.push(DownloadPage,{ direction: 'forward'});
    } else {
      this.translateService.get(['Notice', 'No_Sign_In', 'OK']).subscribe(value => {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['No_Sign_In'],
          buttons: [value['OK']]
        }).present();
      });
    }
  }
  openEditAddress() {
    if (this.userService.isAuthenticated) {
      this.navCtrl.push(AddressPage, { direction: 'forward' });
    } else {
      this.translateService.get(['Notice', 'No_Sign_In', 'OK']).subscribe(value => {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['No_Sign_In'],
          buttons: [value['OK']]
        }).present();
      });

    }
  }
}
