import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CategoryPage } from '../category/category';
import { WishlistPage } from '../wishlist/wishlist';
import { CartTabPage } from '../cart-tab/cart-tab';
import { ProfilePage } from '../profile/profile';
import { TbarService } from '../../providers/tbar-service';
import { Storage } from '@ionic/storage';
/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = HomePage;
  tab2Root: any = CategoryPage;
  tab3Root: any = WishlistPage;
  tab4Root: any = CartTabPage;
  tab5Root: any = ProfilePage;
  cartTabBage: number = 0;
  mySelectedIndex: any;
  constructor(public navCtrl: NavController, navParams: NavParams, public tb: TbarService, public storage: Storage) {
    console.log(navParams.data);
    this.mySelectedIndex = navParams.data != null ? navParams.data : 0;
    console.log(this.mySelectedIndex);
  }

  ionViewDidEnter() {
    this.storage.get('oddwolves-cart').then((data) => {
      if (data) {
        this.cartTabBage = JSON.parse(data).length;
      }
    });
  }
}