import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { HomePage } from '../pages/home/home';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { CartTabPage } from '../pages/cart-tab/cart-tab';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { AddressPage } from '../pages/address/address';
import { CategoryPage } from '../pages/category/category';
import { ListingsPage } from '../pages/listings/listings';
import { LoginPage } from '../pages/login/login';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { RegisterPage } from '../pages/register/register';
import { CountryPage } from '../pages/country/country';
import { SearchPage } from '../pages/search/search';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderListPage } from '../pages/order-list/order-list';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FaqPage } from '../pages/faq/faq';
import { ThanksPage } from '../pages/thanks/thanks';
import { StripePayPage } from '../pages/stripe-pay/stripe-pay';
import { AttributePage } from '../pages/attribute/attribute';
import { DownloadPage } from '../pages/download/download';
import { SliderPage } from '../pages/slider/slider';

import { AppConfig } from './app-config';
import { WoocommerceService } from '../providers/woocommerce-service';
import { CountryService } from '../providers/country-service';
import { TbarService } from '../providers/tbar-service';
import { UserService } from '../providers/user-service';
import { SowService } from '../providers/sow-service';
import { ProductCardComponent } from '../components/product-card/product-card';

import { CardIO } from 'ionic-native';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    WishlistPage,
    CartPage,
    ProfilePage,
    CountryPage,
    AddressPage,
    CategoryPage,
    ListingsPage,
    LoginPage,
    ProductDetailsPage,
    RegisterPage,
    SearchPage,
    CheckoutPage,
    OrderListPage,
    OrderDetailsPage,
    AboutPage,
    ContactPage,
    FaqPage,
    SliderPage,
    DownloadPage,
    ThanksPage,
    CartTabPage,
    StripePayPage,
    AttributePage,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { 
        tabsHideOnSubPages: true,
        backButtonText: 'Volver'
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountryPage,
    TabsPage,
    HomePage,
    WishlistPage,
    CartPage,
    ProfilePage,
    AddressPage,
    CategoryPage,
    ListingsPage,
    LoginPage,
    SliderPage,
    DownloadPage,
    ProductDetailsPage,
    RegisterPage,
    SearchPage,
    CheckoutPage,
    OrderListPage,
    OrderDetailsPage,
    AboutPage,
    ContactPage,
    FaqPage,
    ThanksPage,
    CartTabPage, StripePayPage, AttributePage
  ],
  providers: [WoocommerceService, AppConfig, CountryService, TbarService, UserService, SowService,CardIO]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
