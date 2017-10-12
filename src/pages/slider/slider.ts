import { Component } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the SliderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  goToLogin(){
    this.navCtrl.push(TabsPage,4);    
  }

  skip() {
    this.navCtrl.push(TabsPage,0);
  }
}
