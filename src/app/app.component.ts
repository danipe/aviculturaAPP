import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController, App } from 'ionic-angular';
import { AppConfig } from './app-config';
import { StatusBar, OneSignal, Keyboard } from 'ionic-native';
import { WoocommerceService } from '../providers/woocommerce-service';
import { SowService } from '../providers/sow-service';
import { Storage } from '@ionic/storage';
import { UserService } from '../providers/user-service';
import { TabsPage } from '../pages/tabs/tabs';
import { SliderPage } from '../pages/slider/slider';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FaqPage } from '../pages/faq/faq';
import { TranslateService } from '@ngx-translate/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public modalCtrl: ModalController,
    public appConfig: AppConfig,
    public wooService: WoocommerceService,
    public sowService: SowService,
    public appCtrl: App, public storage: Storage, public userService: UserService,
    translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang(this.appConfig.Shop_Language);
    translate.use(this.appConfig.Shop_Language);
    this.pages = [
      { title: 'LoginPage', component: LoginPage },
      { title: 'RegisterPage', component: RegisterPage }
    ];
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleLightContent();
      Keyboard.hideKeyboardAccessoryBar(false);

      // if (this.appConfig.Onesignal_Enable == true) {
      //   OneSignal.startInit(this.appConfig.OneSignal_AppID, this.appConfig.GCM_SenderID);
      //   OneSignal.handleNotificationReceived().subscribe(() => {
      //     // do something when notification is received
      //   });
      //   OneSignal.handleNotificationOpened().subscribe(() => {
      //     // do something when a notification is opened
      //   });
      //   OneSignal.endInit();
      // }
      this.storage.get('introShown').then((result) => {
        if(result){
          //this.rootPage = TabsPage;
          this.rootPage = SliderPage;
        } else {
          this.rootPage = SliderPage;
          this.storage.set('introShown', true);
        }
       });
    });

    this.wooService.getStoreInfo().then((storeInfo: any) => {
      this.appConfig.Shop_Name = storeInfo.store.name;
      this.appConfig.Shop_Currency = storeInfo.store.meta.currency;
      this.appConfig.Shop_Currency_format = storeInfo.store.meta.currency_format;
    });

    this.sowService.getShippingMethod().then((data: Array<any>) => {
      if (data && data.length > 0) {
        this.appConfig.Shop_Shipping = data;
      }
    });

    this.storage.get('oddwolves-user-info').then((data) => {
      if (data) {
        var userInfo = JSON.parse(data);
        this.userService.id = userInfo.id;
        this.userService.email = userInfo.email;
        this.userService.first_name = userInfo.first_name;
        this.userService.last_name = userInfo.last_name;
        this.userService.name = userInfo.first_name + userInfo.last_name;
        this.userService.username = userInfo.username;
        this.userService.isAuthenticated = true;
      }
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  modalContact() {
    this.menu.close();
    let modal = this.modalCtrl.create(ContactPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

  modalFaq() {
    this.menu.close();
    let modal = this.modalCtrl.create(FaqPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

  modalAbout() {
    this.menu.close();
    let modal = this.modalCtrl.create(AboutPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }


  dologin() {
    this.menu.close();
    let modal = this.modalCtrl.create(LoginPage, {}, { showBackdrop: true, enableBackdropDismiss: true });
    modal.present();
  }

  doRegister() {
    this.menu.close();
    this.modalCtrl.create(RegisterPage).present();
  }

  goHome() {
    this.nav.setRoot(TabsPage, 0);
  }

}
