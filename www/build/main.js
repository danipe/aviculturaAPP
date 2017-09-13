webpackJsonp([0],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_service__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Country page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CountryPage = (function () {
    function CountryPage(navCtrl, navparams, countryService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.countryService = countryService;
        this.viewCtrl = viewCtrl;
        this.selectedCountry = '';
        this.countries = this.countryService.getAll();
    }
    CountryPage.prototype.selCountry = function (fn) {
        this.selectedCountry = fn;
        this.viewCtrl.dismiss({ 'country': this.selectedCountry, 'forwhich': this.navparams.get('forwhich') });
    };
    CountryPage.prototype.ionViewDidEnter = function () {
        this.selectedCountry = this.navparams.get('country');
    };
    return CountryPage;
}());
CountryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-country',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\country\country.html"*/'<!--\n  Generated template for the Country page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Select_Country\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item-group *ngFor="let gCountry of countries">\n    <ion-item-divider>\n      {{gCountry.group}}\n    </ion-item-divider>\n    <ion-item *ngFor="let country of gCountry.Countries" (click)="selCountry(country.fn)">{{country.fn}}\n      <ion-icon *ngIf="selectedCountry==country.fn" name="checkmark" item-right></ion-icon>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\country\country.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], CountryPage);

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_native__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thanks_thanks__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stripe_pay_stripe_pay__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__country_country__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, http, modalCtrl, storage, appConfig, navParams, userService, wooService, loadingCtrl, alertCtrl, appCtrl, tbarService, viewCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.appConfig = appConfig;
        this.navParams = navParams;
        this.userService = userService;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.tbarService = tbarService;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.shippingAddress = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            country: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: ''
        };
        this.billingAddress = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            country: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: ''
        };
        this.selShipMethod = 0;
        this.desc = '';
        this.sameAddress = true;
        this.orderID = '';
        this.total = this.navParams.get('total');
        this.desc = this.navParams.get('description');
    }
    CheckoutPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translateService.get(['Loading']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.storage.get('oddwolves-user-shipping-address').then(function (data) {
                if (data) {
                    _this.shippingAddress = JSON.parse(data);
                }
                else {
                    if (_this.userService.isAuthenticated == true) {
                        _this.shippingAddress.first_name = _this.userService.first_name;
                        _this.shippingAddress.last_name = _this.userService.last_name;
                        _this.shippingAddress.email = _this.userService.email;
                    }
                }
            }).then(function () {
                _this.storage.get('oddwolves-user-billing-address').then(function (data) {
                    if (data) {
                        _this.billingAddress = JSON.parse(data);
                    }
                    else {
                        if (_this.userService.isAuthenticated == true) {
                            _this.billingAddress.first_name = _this.userService.first_name;
                            _this.billingAddress.last_name = _this.userService.last_name;
                            _this.billingAddress.email = _this.userService.email;
                        }
                    }
                    _this.loadingModal.dismiss();
                });
            });
        });
    };
    CheckoutPage.prototype.selectCountry = function (type) {
        var _this = this;
        var countryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__country_country__["a" /* CountryPage */], {
            'country': type == 'shipping' ? this.shippingAddress.country : this.billingAddress.country,
            'forwhich': type
        });
        countryModal.onDidDismiss(function (data) {
            if (data.forwhich == 'shipping') {
                _this.shippingAddress.country = data.country;
            }
            else {
                _this.billingAddress.country = data.country;
            }
        });
        countryModal.present();
    };
    CheckoutPage.prototype.payViaSite = function () {
        var _this = this;
        this.translateService.get(['Loading', 'Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            if (_this.orderID == '') {
                var shipping_lines = new Array();
                shipping_lines = [{
                        'method_id': _this.appConfig.Shop_Shipping[_this.selShipMethod].id,
                        'method_title': _this.appConfig.Shop_Shipping[_this.selShipMethod].title,
                        'total': _this.appConfig.Shop_Shipping[_this.selShipMethod].cost
                    }];
                _this.loadingModal = _this.loadingCtrl.create({
                    content: value['Loading']
                });
                _this.loadingModal.present();
                var line_items = new Array();
                _this.storage.get('oddwolves-cart').then(function (data) {
                    var cartProductArray = JSON.parse(data);
                    cartProductArray.forEach(function (element) {
                        line_items.push({
                            'product_id': element.product_id,
                            'quantity': element.quantity,
                            'variation_id': element.variation_id,
                            'variations': element.variations
                        });
                    });
                    var billing_address = _this.billingAddress;
                    var shipping_address = _this.shippingAddress;
                    var order = {
                        billing_address: billing_address,
                        'customer_id': _this.userService.id, shipping_address: shipping_address, line_items: line_items, shipping_lines: shipping_lines
                    };
                    _this.wooService.createOrder('', { order: order }).then(function (data) {
                        if (data) {
                            _this.loadingModal.dismiss();
                            _this.orderID = data.order.id;
                            _this.hanlderPayViaSite();
                        }
                    }, function (reson) {
                        _this.loadingModal.dismiss();
                        _this.alertCtrl.create({
                            title: value['Notice'],
                            message: value['NetWork_Error'],
                            buttons: [value['OK']]
                        }).present();
                    });
                });
            }
            else {
                _this.hanlderPayViaSite();
            }
        });
    };
    CheckoutPage.prototype.hanlderPayViaSite = function () {
        var _this = this;
        this.translateService.get(['Loading', 'Notice', 'Cancel_Order_Note', 'Pay_Order', 'Cancel_Order']).subscribe(function (value) {
            var browser = new __WEBPACK_IMPORTED_MODULE_4_ionic_native__["a" /* InAppBrowser */](_this.appConfig.Shop_URL + '/my-account/orders', '_blank', '');
            browser.show();
            browser.on('exit').subscribe(function () {
                _this.loadingModal = _this.loadingCtrl.create({
                    content: value['Loading']
                });
                _this.loadingModal.present();
                _this.wooService.getOrder(_this.orderID).then(function (order) {
                    _this.loadingModal.dismiss();
                    if (order.status == 'pending') {
                        var confirm_1 = _this.alertCtrl.create({
                            title: value['Notice'],
                            message: value['Cancel_Order_Note'],
                            enableBackdropDismiss: false,
                            buttons: [
                                {
                                    text: value['Pay_Order'],
                                    handler: function () {
                                        confirm_1.dismiss();
                                    }
                                },
                                {
                                    text: value['Cancel_Order'],
                                    handler: function () {
                                        _this.loadingModal = _this.loadingCtrl.create({
                                            content: value['Loading']
                                        });
                                        _this.loadingModal.present();
                                        _this.wooService.updateOrderStatus(_this.orderID, 'cancelled').then(function () {
                                            _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_11__tabs_tabs__["a" /* TabsPage */], 0);
                                            _this.navCtrl.popToRoot();
                                            _this.loadingModal.dismiss();
                                            _this.orderID = '';
                                        });
                                    }
                                }
                            ]
                        });
                        confirm_1.present();
                    }
                    else if (order.status == 'processing') {
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__thanks_thanks__["a" /* ThanksPage */], { "order_id": order.id, "total": order.total, "type": "site" }, { showBackdrop: true, enableBackdropDismiss: true });
                        modal.present();
                        _this.navCtrl.popToRoot();
                        _this.storage.remove('oddwolves-cart');
                        _this.tbarService.cartBage = 0;
                    }
                });
            }, function (err) {
            });
        });
    };
    CheckoutPage.prototype.payPayPal = function () {
        var _this = this;
        this.translateService.get(['Loading', 'Notice', 'Paypal_Pay_Error', 'Paypal_Configuration_Error', 'Paypal_Initialization_Error']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            __WEBPACK_IMPORTED_MODULE_4_ionic_native__["d" /* PayPal */].init({
                "PayPalEnvironmentProduction": _this.appConfig.PayPal_EnvironmentProduction,
                "PayPalEnvironmentSandbox": _this.appConfig.PayPal_EnvironmentSandbox
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_ionic_native__["d" /* PayPal */].prepareToRender(_this.appConfig.Paypal_Environments, new __WEBPACK_IMPORTED_MODULE_4_ionic_native__["e" /* PayPalConfiguration */]({})).then(function () {
                    var payment = new __WEBPACK_IMPORTED_MODULE_4_ionic_native__["f" /* PayPalPayment */]((String)(Number.parseFloat(_this.total) + Number.parseFloat(_this.appConfig.Shop_Shipping[_this.selShipMethod].cost)), _this.appConfig.Shop_Currency, _this.desc, 'sale');
                    __WEBPACK_IMPORTED_MODULE_4_ionic_native__["d" /* PayPal */].renderSinglePaymentUI(payment).then(function (resp) {
                        // Successfully paid
                        _this.loadingModal.dismiss();
                        var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__thanks_thanks__["a" /* ThanksPage */], { "paypal_id": resp.response.id, "ship_method": _this.selShipMethod, "type": "paypal" }, { showBackdrop: true, enableBackdropDismiss: true });
                        modal.present();
                        _this.navCtrl.popToRoot();
                    }, function () {
                        // Error or render dialog closed without being successful
                        _this.loadingModal.dismiss();
                        _this.alertCtrl.create({
                            title: value['Notice'],
                            message: value['Paypal_Pay_Error'],
                            buttons: [value['OK']]
                        }).present();
                    });
                }, function () {
                    // Error in configuration
                    _this.loadingModal.dismiss();
                    _this.alertCtrl.create({
                        title: value['Notice'],
                        message: value['Paypal_Configuration_Error'],
                        buttons: [value['OK']]
                    }).present();
                });
            }, function () {
                _this.loadingModal.dismiss();
                // Error in initialization, maybe PayPal isn't supported or something else
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Paypal_Initialization_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    CheckoutPage.prototype.payStripe = function () {
        var _this = this;
        //console.log("CHECKOUT2"+Number.parseFloat(this.appConfig.Shop_Shipping[this.selShipMethod].cost));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__stripe_pay_stripe_pay__["a" /* StripePayPage */], {
            // TODO: Hay que sumarle el precio del envio falta revisar todo esto
            "total": this.total,
            "desc": this.desc
        }, { showBackdrop: true, enableBackdropDismiss: true });
        modal.onDidDismiss(function (data) {
            if (data && data.result == true) {
                var modalThanks = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__thanks_thanks__["a" /* ThanksPage */], {
                    "stripe_id": data.stripe_id,
                    "ship_method": _this.selShipMethod,
                    "type": "stripe"
                }, { showBackdrop: true, enableBackdropDismiss: true });
                modalThanks.present();
                _this.navCtrl.popToRoot();
            }
        });
        modal.present();
    };
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\checkout\checkout.html"*/'<!--\n  Generated template for the Checkout page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color="light">{{ \'Shipping_Address\' | translate }}</ion-item-divider>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'First_Name\' | translate }}" [(ngModel)]="shippingAddress.first_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Last_Name\' | translate }}" [(ngModel)]="shippingAddress.last_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="email" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="shippingAddress.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="number" placeholder="{{ \'Phone\' | translate }}" [(ngModel)]="shippingAddress.phone"></ion-input>\n      </ion-item>\n      <ion-item (click)="selectCountry(\'shipping\')">\n        <ion-label>{{shippingAddress.country==\'\'?(\'Select_Country\'| translate):shippingAddress.country}}</ion-label>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address1\' | translate }}" [(ngModel)]="shippingAddress.address_1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address2\' | translate }}" [(ngModel)]="shippingAddress.address_2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Town_City\' | translate }}" [(ngModel)]="shippingAddress.city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" [(ngModel)]="shippingAddress.state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="number" placeholder="{{ \'Zip_Code\' | translate }}" [(ngModel)]="shippingAddress.zip"></ion-input>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-divider color="light">\n      <ion-label>Billing Address(Same as Shipping)</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]="sameAddress" item-right></ion-checkbox>\n    </ion-item-divider>\n   <ion-item-group *ngIf="!sameAddress">\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'First_Name\' | translate }}" [(ngModel)]="billingAddress.first_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Last_Name\' | translate }}" [(ngModel)]="billingAddress.last_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="email" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="billingAddress.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="number" placeholder="{{ \'Phone\' | translate }}" [(ngModel)]="billingAddress.phone"></ion-input>\n      </ion-item>\n      <ion-item (click)="selectCountry(\'billing\')">\n        <ion-label>{{billingAddress.country==\'\'?(\'Select_Country\'| translate):billingAddress.country}}</ion-label>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address1\' | translate }}" [(ngModel)]="billingAddress.address_1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address2\' | translate }}" [(ngModel)]="billingAddress.address_2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Town_City\' | translate }}" [(ngModel)]="billingAddress.city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" [(ngModel)]="billingAddress.state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="number" placeholder="{{ \'Zip_Code\' | translate }}" [(ngModel)]="billingAddress.zip"></ion-input>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group radio-group [(ngModel)]="selShipMethod">\n      <ion-item-divider color="primary">{{ \'Shiping_Method\' | translate }}</ion-item-divider>\n      <ion-item *ngFor="let shipmethod of appConfig.Shop_Shipping;let i = index">\n        <ion-label>{{shipmethod.title}}({{shipmethod.cost}}<span [innerHTML]="appConfig.Shop_Currency_format"></span>)</ion-label>\n        <ion-radio checked="true" value="{{i}}"></ion-radio>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <button ion-button full color="primary" (click)="payPayPal()">{{ \'Pay_Via_Paypal\' | translate }}</button>\n  <button ion-button full color="third" (click)="payStripe()" *ngIf="appConfig.Enable_Stripe" >{{ \'Pay_Via_Stripe\' | translate }}</button>\n <!-- <button ion-button full color="twitter" (click)="payViaSite()">{{ \'Pay_Via_Site\' | translate }}</button>-->\n</ion-content>\n<ion-footer>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\checkout\checkout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_12__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["c" /* TranslateService */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var RegisterPage = (function () {
    function RegisterPage(navCtrl, viewCtrl, userService, alertCtrl, wooService, loadingCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.registInfo = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: ''
        };
    }
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.btnRegisterUser = function () {
        var _this = this;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK', 'Loading', 'Require_Email', 'Require_Name',
            'Require_Username', 'Require_Password', 'Password_Check', 'Sing_up_Successed', 'Sign_up_failed', 'Contact_Admin']).subscribe(function (value) {
            if (_this.registInfo.email == null || _this.registInfo.email.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Email'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.registInfo.first_name == null || _this.registInfo.first_name.trim().length == 0 || _this.registInfo.last_name == null || _this.registInfo.last_name.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Name'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.registInfo.username == null || _this.registInfo.email.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Username'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.registInfo.password == null || _this.registInfo.password.trim().length < 6) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Password'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.registInfo.password != _this.confirmPassword) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Password_Check'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            var loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            loadingModal.present();
            _this.wooService.createCustomer('', {
                customer: {
                    first_name: _this.registInfo.first_name,
                    last_name: _this.registInfo.last_name,
                    username: _this.registInfo.username,
                    password: _this.registInfo.password,
                    email: _this.registInfo.email
                }
            }).then(function (data) {
                loadingModal.dismiss();
                if (data && data.customer && data.customer.id > 0) {
                    var successModal = _this.loadingCtrl.create({
                        spinner: 'hide',
                        content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Sing_up_Successed'] + '</div>'
                    });
                    successModal.present();
                    setTimeout(function () {
                        successModal.dismiss();
                        _this.viewCtrl.dismiss();
                    }, 2000);
                }
                else {
                    _this.alertCtrl.create({
                        title: value['Notice'],
                        message: value['Sign_up_failed'],
                        buttons: [value['OK']]
                    }).present();
                }
            }, function (reson) {
                loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Contact_Admin'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\register\register.html"*/'<!--\n  Generated template for the Register page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>{{ \'Sign_Up\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="login">\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-contact-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="text" placeholder="{{ \'First_Name\' | translate }}" [(ngModel)]="registInfo.first_name"></ion-input>\n     \n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-browsers-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="text" placeholder="{{ \'Last_Name\' | translate }}" [(ngModel)]="registInfo.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-person-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="text" placeholder="{{ \'User_Name\' | translate }}" [(ngModel)]="registInfo.username" id="username"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="registInfo.username.length<5 && registInfo.username!=\'\'" >\n            <p>* Username must be >= 5 characters!</p>\n        </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-mail-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="email" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="registInfo.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-lock-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="password" placeholder="{{ \'Password\' | translate }}" [(ngModel)]="registInfo.password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-icon name="ios-lock-outline"></ion-icon>\n      </ion-label>\n      <ion-input type="password" placeholder="{{ \'Confirm_Password\' | translate }}" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-row>\n    <ion-col id="login-box">\n      <button ion-button full (click)="btnRegisterUser()" [disabled]="registInfo.username.length<5">{{ \'Sign_Up_Now\' | translate }}</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
        this.Shop_Signature_Method = 'HMAC-SHA1'; //no need change
        this.Shop_Nonce_Length = 32; //no need change
        this.Shop_Parameter_Seperator = ', '; //no need change
        this.Shop_Name = ""; //no need set,will get from your website
        this.Shop_Version = "1.0";
        this.Shop_Language = 'es'; //change to your laguage,please check the document to learn how to translate.
        this.Shop_URL = "https://avicult-kiatoski.c9users.io"; //set your website url,eg:"http://www.yousite.com"
        this.Shop_ConsumerKey = "ck_9a4b429418121817e633ba6d51b0977c2940cacf"; //woocommerce rest api ConsumerKey
        this.Shop_ConsumerSecret = "cs_613d03e1e47dee6dd98c7df36bd132cc624b9940"; //woocommerce rest api ConsumerSecret
        this.Shop_Currency = "EUR"; //no need setting,will get from your Website
        this.Shop_Currency_format = "&euro;"; //no need setting,will get from your Website
        //your shipping method,you need set these method with our plugin
        this.Shop_Shipping = [];
        this.App_Secret = "9d7af31324d77590474d3d5838b0784e12500f1b2d28c1253a9c51ccf20e4796"; //install our plugin then Generate Secret key in basic setting
        this.Show_Home_Slide = true; //whether show home slide
        //Paypal setting
        //PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        //if you want to test payment,set Environments to PayPalEnvironmentSandbox,otherwise set to PayPalEnvironmentProduction
        this.Paypal_Environments = "PayPalEnvironmentProduction";
        this.PayPal_EnvironmentProduction = "";
        this.PayPal_EnvironmentSandbox = "";
        //Stripe payment setting
        this.Enable_Stripe = true; //Enable or disable stripe
        this.Stripe_Live_Secret_Key = ""; //Live mode Secret Key
        this.Stripe_Live_Publishable_Key = ""; //Live mode Publishable Key
        this.Enable_Stripe_Test_Mode = true; //Enable or disable test mode
        this.Stripe_Test_Secret_Key = "sk_test_yLkXMlZaeazOJK8AGQLPvepi"; //Test mode Secret Key
        this.Stripe_Test_Publishable_Key = "pk_test_W2IM34bjEBH8AwhETLTFIXtd"; //Test mode Publishable Key
        //Onesignal setting
        //Please check our online document set these
        this.Onesignal_Enable = false; //enable/disable Onesignal
        this.OneSignal_AppID = "";
        this.GCM_SenderID = "";
        //enable login with password,need to add codes to woocommerce,please check readme file
        this.Eanble_Login_With_Password = true;
        //Contact page info
        this.Service_In_Weekdays = "Monday-Friday (9am - 4pm)";
        this.Service_Weekend = "Saturday-Sunday (12pm - 4pm)";
        this.Service_Tel = "081123456";
        //Faq page info
        //Title:question Title
        //content:the answser
        this.Question_Array = [
            {
                'Title': 'Dicit debitis at sed?',
                Content: "Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet\n          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas."
            },
            {
                'Title': 'Dicit debitis at sed?',
                Content: "Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet\n          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas."
            },
            {
                'Title': 'Dicit debitis at sed?',
                Content: "Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet\n          soluta quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas."
            },
        ];
        //About page info
        this.Introduction = "Movet apeirian verterem eu quo, vix elit voluptatum te, has ea solum viris audiam. Mel ex suas fugit altera. Amet soluta\n    quo id, hinc adhuc alterum nam ad. Qui in natum laudem fabulas.";
        this.Address1 = "123 N Harbor Dr. Redondo Beach, CA";
        this.Address2 = "United States 123456";
        this.CopyRight = "@Ionic2WooShop";
        //logo in app not app icon
        this.Logo_Image = "assets/img/logo.png"; //copy your own image to assets/img/yourlogo.png and set logo.png to yourlogo.png.
    }
    return AppConfig;
}());

//# sourceMappingURL=app-config.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WoocommerceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WishlistProduct; });
/* unused harmony export Cart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the WoocommerceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var WoocommerceService = (function () {
    function WoocommerceService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
    }
    WoocommerceService.prototype.getStoreInfo = function () {
        var service = this;
        return new Promise(function (resolve, reject) {
            service.http.get(service.appConfig.Shop_URL + '/wc-api/v1/').map(function (res) { return res.json(); }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            })
                .subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            }, function (error) {
                reject('error');
            });
        });
    };
    WoocommerceService.prototype.getProducts = function (params) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products";
        url = this.initUrl(url, params);
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get'))
                .catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject('error');
                }
            }, function (error) { reject('error'); });
        });
    };
    WoocommerceService.prototype.getSingleProduct = function (id) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products/" + id;
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.getAllDownloads = function (id) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v2/customers/" + id + "/downloads";
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.getStoreCategories = function (params) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products/categories";
        url = this.initUrl(url, params);
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.createOrder = function (params, data) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wc-api/v3/orders";
        url = this.initUrl(url, params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve, reject) {
            service.http.post(service.initRequest(url, 'post'), data, { headers: headers }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.createCustomer = function (params, data) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wc-api/v3/customers";
        url = this.initUrl(url, params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(function (resolve, reject) {
            service.http.post(service.initRequest(url, 'post'), data, { headers: headers }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.getCustomerByEmail = function (params) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/customers/";
        url = this.initUrl(url, params);
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.getOrderList = function (params) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/";
        url = this.initUrl(url, params);
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.getOrder = function (id) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/" + id;
        url = this.initUrl(url, '');
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.updateOrderStatus = function (id, status) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/" + id;
        url = this.initUrl(url, '');
        return new Promise(function (resolve, reject) {
            service.http.post(service.initRequest(url, 'post'), { 'status': status }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.initUrl = function (url, params) {
        if (params) {
            var keys = Object.keys(params);
            for (var i = 0; i < keys.length; i++) {
                if (i == 0) {
                    url += "?" + keys[i] + '=' + params[keys[i]];
                }
                else {
                    url += '&' + keys[i] + '=' + params[keys[i]];
                }
            }
        }
        return url;
    };
    WoocommerceService.prototype.getCustomerDownloads = function (id) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/wc/v2/customers/" + id + "/downloads";
        url = this.initUrl(url, '');
        return new Promise(function (resolve, reject) {
            service.http.get(service.initRequest(url, 'get')).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    WoocommerceService.prototype.initRequest = function (url, method) {
        if (this.isSSL(url)) {
            if (url.indexOf('?') >= 0) {
                url += '&consumer_key=' + this.appConfig.Shop_ConsumerKey + '&consumer_secret=' + this.appConfig.Shop_ConsumerSecret;
            }
            else {
                url += '?consumer_key=' + this.appConfig.Shop_ConsumerKey + '&consumer_secret=' + this.appConfig.Shop_ConsumerSecret;
            }
            return url;
        }
        else {
            var initParams = {};
            var retParams = {};
            initParams.url = url;
            initParams.method = method;
            initParams.data = {
                oauth_consumer_key: this.appConfig.Shop_ConsumerKey,
                oauth_nonce: this.getNonce(),
                oauth_signature_method: this.appConfig.Shop_Signature_Method,
                oauth_timestamp: this.getTimeStamp(),
            };
            retParams.oauth_consumer_key = initParams.data.oauth_consumer_key;
            retParams.oauth_nonce = initParams.data.oauth_nonce;
            retParams.oauth_signature_method = initParams.data.oauth_signature_method;
            retParams.oauth_timestamp = initParams.data.oauth_timestamp;
            retParams.oauth_signature = this.authorize(initParams);
            if (url.indexOf('?') >= 0) {
                url += '&';
            }
            else {
                url += '?';
            }
            return url += 'oauth_consumer_key=' + initParams.data.oauth_consumer_key +
                '&oauth_nonce=' + initParams.data.oauth_nonce +
                '&oauth_signature_method=' + initParams.data.oauth_signature_method +
                '&oauth_timestamp=' + initParams.data.oauth_timestamp +
                '&oauth_signature=' + encodeURIComponent(this.authorize(initParams));
        }
    };
    WoocommerceService.prototype.isSSL = function (str) {
        var tarea = str;
        var tarea_regex = /^(https)/;
        if (tarea_regex.test(String(tarea).toLowerCase()) == true) {
            return true;
        }
        return false;
    };
    WoocommerceService.prototype.getNonce = function () {
        var word_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var result = '';
        for (var i = 0; i < this.appConfig.Shop_Nonce_Length; i++) {
            result += word_characters[parseInt(String(Math.random() * word_characters.length), 10)];
        }
        return result;
    };
    WoocommerceService.prototype.getTimeStamp = function () {
        return parseInt(String(new Date().getTime() / 1000), 10);
    };
    WoocommerceService.prototype.randomJsonpName = function () {
        var str;
        str = new Date().getTime() + Math.round(Math.random() * 1000000);
        return str;
    };
    ;
    WoocommerceService.prototype.authorize = function (request) {
        if (!request.data) {
            request.data = {};
        }
        var oauth_signature = this.getSignature(request);
        return oauth_signature;
    };
    WoocommerceService.prototype.hash = function (base_string, key) {
        switch (this.appConfig.Shop_Signature_Method) {
            case 'HMAC-SHA1':
                return __WEBPACK_IMPORTED_MODULE_9_crypto_js___default.a.HmacSHA1(base_string, key).toString(__WEBPACK_IMPORTED_MODULE_9_crypto_js___default.a.enc.Base64);
            case 'HMAC-SHA256':
                return __WEBPACK_IMPORTED_MODULE_9_crypto_js___default.a.HmacSHA256(base_string, key).toString(__WEBPACK_IMPORTED_MODULE_9_crypto_js___default.a.enc.Base64);
        }
    };
    WoocommerceService.prototype.getSignature = function (request) {
        return this.hash(this.getBaseString(request), this.percentEncode(this.appConfig.Shop_ConsumerSecret) + '&');
    };
    WoocommerceService.prototype.getBaseString = function (request) {
        return request.method.toUpperCase() + '&' + this.percentEncode(this.getBaseUrl(request.url)) + '&' + this.percentEncode(this.getParameterString(request));
    };
    WoocommerceService.prototype.getParameterString = function (request) {
        var base_string_data = this.sortObject(this.percentEncodeData(this.mergeObject(request.data, this.deParamUrl(request.url))));
        var data_str = '';
        for (var key in base_string_data) {
            var value = base_string_data[key];
            if (value && Array.isArray(value)) {
                value.sort();
                var valString = "";
                value.forEach((function (item, i) {
                    valString += key + '=' + item;
                    if (i < value.length) {
                        valString += "&";
                    }
                }).bind(this));
                data_str += valString;
            }
            else {
                data_str += key + '=' + value + '&';
            }
        }
        data_str = data_str.substr(0, data_str.length - 1);
        return data_str;
    };
    WoocommerceService.prototype.mergeObject = function (obj1, obj2) {
        var merged_obj = obj1;
        for (var key in obj2) {
            merged_obj[key] = obj2[key];
        }
        return merged_obj;
    };
    WoocommerceService.prototype.deParam = function (param) {
        var arr = param.split('&');
        var data = {};
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i].split('=');
            data[item[0]] = decodeURIComponent(item[1]);
        }
        return data;
    };
    WoocommerceService.prototype.deParamUrl = function (url) {
        var tmp = url.split('?');
        if (tmp.length === 1)
            return {};
        return this.deParam(tmp[1]);
    };
    WoocommerceService.prototype.percentEncodeData = function (data) {
        var result = {};
        for (var key in data) {
            var value = data[key];
            if (value && Array.isArray(value)) {
                var newValue = [];
                value.forEach((function (val) {
                    newValue.push(this.percentEncode(val));
                }).bind(this));
                value = newValue;
            }
            else {
                value = this.percentEncode(value);
            }
            result[this.percentEncode(key)] = value;
        }
        return result;
    };
    WoocommerceService.prototype.getBaseUrl = function (url) {
        return url.split('?')[0];
    };
    WoocommerceService.prototype.percentEncode = function (str) {
        return encodeURIComponent(str)
            .replace(/\!/g, "%21")
            .replace(/\*/g, "%2A")
            .replace(/\'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29");
    };
    WoocommerceService.prototype.sortObject = function (data) {
        var keys = Object.keys(data);
        var result = {};
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            result[key] = data[key];
        }
        return result;
    };
    return WoocommerceService;
}());
WoocommerceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], WoocommerceService);

var CartProduct = (function () {
    function CartProduct() {
        this.name = '';
        this.price = 0;
        this.product_id = 0;
        this.quantity = 0;
        this.variation_id = 0;
        this.variation_name = '';
        this.thumb = '';
    }
    return CartProduct;
}());

var WishlistProduct = (function () {
    function WishlistProduct() {
    }
    return WishlistProduct;
}());

var Cart = (function () {
    function Cart() {
    }
    return Cart;
}());

//# sourceMappingURL=woocommerce-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var UserService = (function () {
    function UserService(storage, appConfig) {
        this.storage = storage;
        this.appConfig = appConfig;
        this.LOCAL_TOKEN_KEY = 'IonWooShop';
        this.id = '';
        this.username = '';
        this.email = '';
        this.name = '';
        this.first_name = '';
        this.last_name = '';
        this.isAuthenticated = false;
        this.authToken = '';
        this.LOCAL_TOKEN_KEY = appConfig.Shop_Name;
    }
    UserService.prototype.loadUserCredentials = function () {
        var _this = this;
        this.storage.get(this.LOCAL_TOKEN_KEY).then(function (user) {
            if (user) {
                _this.useCredentials(JSON.parse(user));
            }
        });
    };
    UserService.prototype.useCredentials = function (user) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.name = user.firstname + ' ' + user.lastname;
        this.first_name = user.firstname;
        this.last_name = user.lastname;
        this.isAuthenticated = true;
        this.authToken = JSON.stringify(user);
    };
    UserService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.id = '';
        this.username = '';
        this.email = '';
        this.name = '';
        this.first_name = '';
        this.last_name = '';
        this.isAuthenticated = false;
        this.storage.remove(this.LOCAL_TOKEN_KEY);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */]])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbarService; });
/*
  Generated class for the TbarService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TbarService = (function () {
    function TbarService() {
        this.hideBar = false;
        this.cartBage = 0;
    }
    return TbarService;
}());

//# sourceMappingURL=tbar-service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sow_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, wooService, http, tb, alertCtrl, sowService, appConfig, translateService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wooService = wooService;
        this.tb = tb;
        this.alertCtrl = alertCtrl;
        this.sowService = sowService;
        this.appConfig = appConfig;
        this.translateService = translateService;
        this.showSlide = false;
        this.products = new Array();
        this.page = 1;
        this.per_page = 10;
        this.has_more = true;
        this.load_products_end = false;
        this.load_slide_end = false;
        this.getProductsAndSlider();
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.page = 1;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page, fields: 'id,title' }).then(function (products) {
                _this.products = products;
                if (products.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                refresher.complete();
            }, function (reson) {
                refresher.complete();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                });
            });
        });
    };
    HomePage.prototype.getProductsAndSlider = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page, fields: 'id,title' }).then(function (products) {
                _this.products = products;
                if (products.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                _this.load_products_end = true;
                _this.loadingModal.dismiss();
            }, function (reson) {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    subTitle: value['NetWork_Error'],
                    buttons: [value['OK']]
                });
            });
        });
        if (this.appConfig.Show_Home_Slide) {
            this.sowService.getHomeSlider().then(function (data) {
                _this.slides = data;
                if (_this.slides.length > 0) {
                    _this.showSlide = true;
                }
                _this.load_slide_end = true;
                if (_this.load_products_end && _this.load_products_end) {
                    _this.loadingModal.dismiss();
                }
            });
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            if (_this.has_more) {
                _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page }).then(function (products) {
                    products.forEach(function (p) {
                        _this.products.push(p);
                    });
                    if (products.length < _this.per_page) {
                        _this.has_more = false;
                    }
                    else {
                        _this.page++;
                    }
                    infiniteScroll.complete();
                }, function (reson) {
                    infiniteScroll.complete();
                    _this.alertCtrl.create({
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
    };
    HomePage.prototype.viewProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { product: product });
    };
    HomePage.prototype.goToSearch = function (products) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */], { products: products });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.tb.hideBar = false;
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\home\home.html"*/'<!--\n  Generated template for the Home page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>\n      {{ \'Shop\' | translate }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goToSearch(products)">\n        <ion-icon name="search"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class=\'page-home\'>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Desliza para recargar" refreshingSpinner="circles" refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-slides pager autoplay="3000" loop *ngIf="showSlide">\n    <ion-slide *ngFor="let item of slides">\n      <img src={{item}}>\n    </ion-slide>\n\n  </ion-slides>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let product of products">\n        <div class="card round" (click)="viewProduct(product)">\n          <div class="badge" *ngIf="product.on_sale">\n            <span class="sale">{{ \'OnSale\' | translate }}</span>\n          </div>\n          <div class="img" [ngStyle]="{\'background-image\': \'url(\'+product.images[0].src+\')\'}">\n          </div>\n          <div class="padding-xs" text-center>\n            <div class="title">{{ product.name}}</div>\n            <div [innerHTML]="product.price_html"></div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Cargando...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_sow_service__["a" /* SowService */], __WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CartPage = (function () {
    function CartPage(navCtrl, modalCtrl, storage, tbarService, wooService, appCtrl, loadingCtrl, userService, appConfig, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.tbarService = tbarService;
        this.wooService = wooService;
        this.appCtrl = appCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.appConfig = appConfig;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.isEmpty = false;
    }
    CartPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.translateService.get(['Loading']).subscribe(function (value) {
            _this.storage.get('oddwolves-cart').then(function (data) {
                if (data) {
                    _this.cart = JSON.parse(data);
                    if (_this.cart.length > 0) {
                        var includeID = '';
                        _this.cart.forEach(function (element) {
                            includeID += element.product_id + ',';
                        });
                        if (includeID.length > 0) {
                            includeID = includeID.substr(0, includeID.length - 1);
                        }
                        _this.loadingModal = _this.loadingCtrl.create({
                            content: value['Loading']
                        });
                        _this.loadingModal.present();
                        _this.wooService.getProducts({ include: includeID }).then(function (products) {
                            _this.cart.forEach(function (element) {
                                var findProduct = products.find(function (product) {
                                    return product.id == element.product_id;
                                });
                                element.name = findProduct.name;
                                if (findProduct.variations.length > 0) {
                                    var findVariation = findProduct.variations.find(function (variation) {
                                        return variation.id == element.variation_id;
                                    });
                                    element.thumb = findVariation.image[0].src;
                                    element.price = findVariation.price;
                                }
                                else {
                                    element.thumb = findProduct.images[0].src;
                                    element.price = findProduct.price;
                                }
                            });
                            _this.storage.set('oddwolves-cart', JSON.stringify(_this.cart));
                            _this.isEmpty = false;
                            _this.loadingModal.dismiss();
                        }, function (reson) {
                            _this.loadingModal.dismiss();
                            _this.errorModal.present();
                        });
                        _this.cart.forEach(function (product) {
                            _this.subTotal += product.price * product.quantity;
                        });
                        _this.total = _this.subTotal;
                    }
                    else {
                        _this.isEmpty = true;
                    }
                }
                else {
                    _this.isEmpty = true;
                }
            });
        });
    };
    CartPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    CartPage.prototype.openDetails = function () {
        var detailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */]);
        detailsModal.present();
    };
    CartPage.prototype.goHome = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */], 0);
    };
    CartPage.prototype.remove = function (pid) {
        var _this = this;
        event.stopPropagation();
        var findIndex = this.cart.findIndex(function (element) {
            return element.product_id == pid;
        });
        if (findIndex != -1) {
            this.cart.splice(findIndex, 1);
            if (this.cart.length == 0) {
                this.isEmpty = true;
            }
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
        this.tbarService.cartBage = this.cart.length;
    };
    CartPage.prototype.subQuantity = function (item) {
        var _this = this;
        event.stopPropagation();
        if (item.quantity == 1) {
            item.quantity = 1;
        }
        else {
            item.quantity--;
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartPage.prototype.addQuantity = function (item) {
        var _this = this;
        event.stopPropagation();
        item.quantity++;
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartPage.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };
    CartPage.prototype.ionViewWillLeave = function () {
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
    };
    CartPage.prototype.ionViewWillEnter = function () {
        this.isEmpty = false;
    };
    CartPage.prototype.inputNum = function () {
        event.stopPropagation();
    };
    CartPage.prototype.inputChanged = function (item) {
        var _this = this;
        event.stopPropagation();
        if (isNaN(item.quantity) == true || item.quantity <= 1) {
            item.quantity = 1;
        }
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        var desc = '';
        this.cart.forEach(function (element) {
            desc += element.name + ',';
        });
        if (desc.length > 0) {
            desc = desc.substr(0, desc.length - 1);
        }
        if (this.userService.isAuthenticated == true) {
            desc = desc.substr(0, desc.length - 1);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { "total": this.total, "description": desc });
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
            modal.present();
            modal.onDidDismiss(function () {
                if (_this.userService.isAuthenticated) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { "total": _this.total, "description": desc });
                }
            });
        }
    };
    CartPage.prototype.viewProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { id: id, org: 'cart' });
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\cart\cart.html"*/'<!--\n  Generated template for the Cart page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Cart\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="common-bg">\n  <div *ngIf="isEmpty" class="empty">\n    <img src="assets/img/cart.png">\n    <h3>{{ \'Cart_is_empty\' | translate }}</h3>\n    <button ion-button round (click)="goHome()">{{ \'Let_us_shopping\' | translate }}</button>\n  </div>\n    <div *ngFor="let item of cart; let i = index" class="div-cart-item">\n    <ion-row class="div-product" (click)="viewProduct(item.product_id)">\n      <ion-col col-4>\n        <img src="{{ item.thumb }}">\n      </ion-col>\n      <ion-col col-8>\n        <div margin-left>\n          <div text-wrap>{{ item.name }}</div>\n          <div class="text-sm"> <span color="gray">{{ item.variation_name }}</span> </div>\n          <div padding-bottom> <span class="pull-right" [innerHTML]="appConfig.Shop_Currency_format+item.price"></span>\n            <div class="clear"></div>\n          </div>\n          <div>\n            <div class="input-qty"> \n              <span class="btn" (click)="subQuantity(item)">\n                <ion-icon name="ios-remove"></ion-icon>\n              </span> \n              <input type="text" disabled="true" [(ngModel)]="item.quantity" (click)="inputNum()" (blur)=\'inputChanged(item)\'>\n              <span class="btn" (click)="addQuantity(item)">\n                <ion-icon name="ios-add"></ion-icon>\n              </span>\n              <div class="clear"></div>\n            </div>\n            <div class="pull-right bottom-info text-lg trash-btn">\n              <ion-icon name="trash" color="primary" (click)="remove(item.product_id)" class="pull-right"></ion-icon>\n              <div class="clear"></div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="placehold"></div>\n</ion-content>\n<ion-footer class="cart-footer" padding >\n  <ion-title> <span color="gray">{{ \'Total\' | translate }}</span> <br/> <span class="bold" color="danger"><b [innerHTML]="appConfig.Shop_Currency_format"></b>{{ total}}</span> </ion-title>\n  <ion-buttons end> <button ion-button color="danger" [disabled]="!cart || cart.length==0" (click)="checkout()">      {{ \'CHECKOUT\' | translate }}    </button> </ion-buttons>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__providers_tbar_service__["a" /* TbarService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* unused harmony export GroupCountries */
/* unused harmony export Country */
/* unused harmony export GourpCountry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CountryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getAll = function () {
        return GroupCountries;
    };
    return CountryService;
}());
CountryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CountryService);

var GroupCountries = [
    {
        group: 'A', Countries: [
            { sn: 'AF', fn: 'Afghanistan' },
            { sn: 'AX', fn: 'land Islands' },
            { sn: 'AL', fn: 'Albania' },
            { sn: 'DZ', fn: 'Algeria' },
            { sn: 'AS', fn: 'American Samoa' },
            { sn: 'AD', fn: 'Andorra' },
            { sn: 'AO', fn: 'Angola' },
            { sn: 'AI', fn: 'Anguilla' },
            { sn: 'AQ', fn: 'Antarctica' },
            { sn: 'AG', fn: 'Antigua and Barbuda' },
            { sn: 'AR', fn: 'Argentina' },
            { sn: 'AM', fn: 'Armenia' },
            { sn: 'AW', fn: 'Aruba' },
            { sn: 'AU', fn: 'Australia' },
            { sn: 'AT', fn: 'Austria' },
            { sn: 'AZ', fn: 'Azerbaijan' }
        ]
    },
    {
        group: 'B', Countries: [
            { sn: 'BS', fn: 'Bahamas' },
            { sn: 'BH', fn: 'Bahrain' },
            { sn: 'BD', fn: 'Bangladesh' },
            { sn: 'BB', fn: 'Barbados' },
            { sn: 'BY', fn: 'Belarus' },
            { sn: 'BE', fn: 'Belgium' },
            { sn: 'PW', fn: 'Belau' },
            { sn: 'BZ', fn: 'Belize' },
            { sn: 'BJ', fn: 'Benin' },
            { sn: 'BM', fn: 'Bermuda' },
            { sn: 'BT', fn: 'Bhutan' },
            { sn: 'BO', fn: 'Bolivia' },
            { sn: 'BQ', fn: 'Bonaire, Saint Eustatius and Saba' },
            { sn: 'BA', fn: 'Bosnia and Herzegovina' },
            { sn: 'BW', fn: 'Botswana' },
            { sn: 'BV', fn: 'Bouvet Island' },
            { sn: 'BR', fn: 'Brazil' },
            { sn: 'IO', fn: 'British Indian Ocean Territory' },
            { sn: 'VG', fn: 'British Virgin Islands' },
            { sn: 'BN', fn: 'Brunei' },
            { sn: 'BG', fn: 'Bulgaria' },
            { sn: 'BF', fn: 'Burkina Faso' },
            { sn: 'BI', fn: 'Burundi' }
        ]
    },
    {
        group: 'C', Countries: [
            { sn: 'KH', fn: 'Cambodia' },
            { sn: 'CM', fn: 'Cameroon' },
            { sn: 'CA', fn: 'Canada' },
            { sn: 'CV', fn: 'Cape Verde' },
            { sn: 'KY', fn: 'Cayman Islands' },
            { sn: 'CF', fn: 'Central African Republic' },
            { sn: 'TD', fn: 'Chad' },
            { sn: 'CL', fn: 'Chile' },
            { sn: 'CN', fn: 'China' },
            { sn: 'CX', fn: 'Christmas Island' },
            { sn: 'CC', fn: 'Cocos (Keeling) Islands' },
            { sn: 'CO', fn: 'Colombia' },
            { sn: 'KM', fn: 'Comoros' },
            { sn: 'CG', fn: 'Congo (Brazzaville)' },
            { sn: 'CD', fn: 'Congo (Kinshasa)' },
            { sn: 'CK', fn: 'Cook Islands' },
            { sn: 'CR', fn: 'Costa Rica' },
            { sn: 'HR', fn: 'Croatia' },
            { sn: 'CU', fn: 'Cuba' },
            { sn: 'CW', fn: 'Cura&ccedil;ao' },
            { sn: 'CY', fn: 'Cyprus' },
            { sn: 'CZ', fn: 'Czech Republic' }
        ]
    },
    {
        group: 'D', Countries: [
            { sn: 'DK', fn: 'Denmark' },
            { sn: 'DJ', fn: 'Djibouti' },
            { sn: 'DM', fn: 'Dominica' },
            { sn: 'DO', fn: 'Dominican Republic' }
        ]
    },
    {
        group: 'E', Countries: [
            { sn: 'EC', fn: 'Ecuador' },
            { sn: 'EG', fn: 'Egypt' },
            { sn: 'SV', fn: 'El Salvador' },
            { sn: 'GQ', fn: 'Equatorial Guinea' },
            { sn: 'ER', fn: 'Eritrea' },
            { sn: 'EE', fn: 'Estonia' },
            { sn: 'ET', fn: 'Ethiopia' }
        ]
    },
    {
        group: 'F', Countries: [
            { sn: 'FK', fn: 'Falkland Islands' },
            { sn: 'FO', fn: 'Faroe Islands' },
            { sn: 'FJ', fn: 'Fiji' },
            { sn: 'FI', fn: 'Finland' },
            { sn: 'FR', fn: 'France' },
            { sn: 'GF', fn: 'French Guiana' },
            { sn: 'PF', fn: 'French Polynesia' },
            { sn: 'TF', fn: 'French Southern Territories' }
        ]
    },
    {
        group: 'G', Countries: [
            { sn: 'GA', fn: 'Gabon' },
            { sn: 'GM', fn: 'Gambia' },
            { sn: 'GE', fn: 'Georgia' },
            { sn: 'DE', fn: 'Germany' },
            { sn: 'GH', fn: 'Ghana' },
            { sn: 'GI', fn: 'Gibraltar' },
            { sn: 'GR', fn: 'Greece' },
            { sn: 'GL', fn: 'Greenland' },
            { sn: 'GD', fn: 'Grenada' },
            { sn: 'GP', fn: 'Guadeloupe' },
            { sn: 'GU', fn: 'Guam' },
            { sn: 'GT', fn: 'Guatemala' },
            { sn: 'GG', fn: 'Guernsey' },
            { sn: 'GN', fn: 'Guinea' },
            { sn: 'GW', fn: 'Guinea-Bissau' },
            { sn: 'GY', fn: 'Guyana' }
        ]
    },
    {
        group: 'H', Countries: [
            { sn: 'HT', fn: 'Haiti' },
            { sn: 'HM', fn: 'Heard Island and McDonald Islands' },
            { sn: 'HN', fn: 'Honduras' },
            { sn: 'HK', fn: 'Hong Kong' },
            { sn: 'HU', fn: 'Hungary' }
        ]
    },
    {
        group: 'I', Countries: [
            { sn: 'IS', fn: 'Iceland' },
            { sn: 'IN', fn: 'India' },
            { sn: 'ID', fn: 'Indonesia' },
            { sn: 'IR', fn: 'Iran' },
            { sn: 'IQ', fn: 'Iraq' },
            { sn: 'IE', fn: 'Republic of Ireland' },
            { sn: 'IM', fn: 'Isle of Man' },
            { sn: 'IL', fn: 'Israel' },
            { sn: 'IT', fn: 'Italy' },
            { sn: 'CI', fn: 'Ivory Coast' }
        ]
    },
    {
        group: 'J', Countries: [
            { sn: 'JM', fn: 'Jamaica' },
            { sn: 'JP', fn: 'Japan' },
            { sn: 'JE', fn: 'Jersey' },
            { sn: 'JO', fn: 'Jordan' }
        ]
    },
    {
        group: 'K', Countries: [
            { sn: 'KZ', fn: 'Kazakhstan' },
            { sn: 'KE', fn: 'Kenya' },
            { sn: 'KI', fn: 'Kiribati' },
            { sn: 'KW', fn: 'Kuwait' },
            { sn: 'KG', fn: 'Kyrgyzstan' }
        ]
    },
    {
        group: 'L', Countries: [
            { sn: 'LA', fn: 'Laos' },
            { sn: 'LV', fn: 'Latvia' },
            { sn: 'LB', fn: 'Lebanon' },
            { sn: 'LS', fn: 'Lesotho' },
            { sn: 'LR', fn: 'Liberia' },
            { sn: 'LY', fn: 'Libya' },
            { sn: 'LI', fn: 'Liechtenstein' },
            { sn: 'LT', fn: 'Lithuania' },
            { sn: 'LU', fn: 'Luxembourg' }
        ]
    },
    {
        group: 'M', Countries: [
            { sn: 'MO', fn: 'Macao S.A.R., China' },
            { sn: 'MK', fn: 'Macedonia' },
            { sn: 'MG', fn: 'Madagascar' },
            { sn: 'MW', fn: 'Malawi' },
            { sn: 'MY', fn: 'Malaysia' },
            { sn: 'MV', fn: 'Maldives' },
            { sn: 'ML', fn: 'Mali' },
            { sn: 'MT', fn: 'Malta' },
            { sn: 'MH', fn: 'Marshall Islands' },
            { sn: 'MQ', fn: 'Martinique' },
            { sn: 'MR', fn: 'Mauritania' },
            { sn: 'MU', fn: 'Mauritius' },
            { sn: 'YT', fn: 'Mayotte' },
            { sn: 'MX', fn: 'Mexico' },
            { sn: 'FM', fn: 'Micronesia' },
            { sn: 'MD', fn: 'Moldova' },
            { sn: 'MC', fn: 'Monaco' },
            { sn: 'MN', fn: 'Mongolia' },
            { sn: 'ME', fn: 'Montenegro' },
            { sn: 'MS', fn: 'Montserrat' },
            { sn: 'MA', fn: 'Morocco' },
            { sn: 'MZ', fn: 'Mozambique' },
            { sn: 'MM', fn: 'Myanmar' }
        ]
    },
    {
        group: 'N', Countries: [
            { sn: 'NA', fn: 'Namibia' },
            { sn: 'NR', fn: 'Nauru' },
            { sn: 'NP', fn: 'Nepal' },
            { sn: 'NL', fn: 'Netherlands' },
            { sn: 'NC', fn: 'New Caledonia' },
            { sn: 'NZ', fn: 'New Zealand' },
            { sn: 'NI', fn: 'Nicaragua' },
            { sn: 'NE', fn: 'Niger' },
            { sn: 'NG', fn: 'Nigeria' },
            { sn: 'NU', fn: 'Niue' },
            { sn: 'NF', fn: 'Norfolk Island' },
            { sn: 'MP', fn: 'Northern Mariana Islands' },
            { sn: 'KP', fn: 'North Korea' },
            { sn: 'NO', fn: 'Norway' }
        ]
    },
    {
        group: 'O', Countries: [
            { sn: 'OM', fn: 'Oman' }
        ]
    },
    {
        group: 'P', Countries: [
            { sn: 'PK', fn: 'Pakistan' },
            { sn: 'PS', fn: 'Palestinian Territory' },
            { sn: 'PA', fn: 'Panama' },
            { sn: 'PG', fn: 'Papua New Guinea' },
            { sn: 'PY', fn: 'Paraguay' },
            { sn: 'PE', fn: 'Peru' },
            { sn: 'PH', fn: 'Philippines' },
            { sn: 'PN', fn: 'Pitcairn' },
            { sn: 'PL', fn: 'Poland' },
            { sn: 'PT', fn: 'Portugal' },
            { sn: 'PR', fn: 'Puerto Rico' }
        ]
    },
    {
        group: 'Q', Countries: [
            { sn: 'QA', fn: 'Qatar' }
        ]
    },
    {
        group: 'R', Countries: [
            { sn: 'RE', fn: 'Reunion' },
            { sn: 'RO', fn: 'Romania' },
            { sn: 'RU', fn: 'Russia' },
            { sn: 'RW', fn: 'Rwanda' }
        ]
    },
    {
        group: 'S', Countries: [
            { sn: 'BL', fn: 'Saint Barth&eacute;lemy' },
            { sn: 'SH', fn: 'Saint Helena' },
            { sn: 'KN', fn: 'Saint Kitts and Nevis' },
            { sn: 'LC', fn: 'Saint Lucia' },
            { sn: 'MF', fn: 'Saint Martin (French part)' },
            { sn: 'SX', fn: 'Saint Martin (Dutch part)' },
            { sn: 'PM', fn: 'Saint Pierre and Miquelon' },
            { sn: 'VC', fn: 'Saint Vincent and the Grenadines' },
            { sn: 'SM', fn: 'San Marino' },
            { sn: 'ST', fn: 'S&atilde;o Tom&eacute; and Pr&iacute;ncipe' },
            { sn: 'SA', fn: 'Saudi Arabia' },
            { sn: 'SN', fn: 'Senegal' },
            { sn: 'RS', fn: 'Serbia' },
            { sn: 'SC', fn: 'Seychelles' },
            { sn: 'SL', fn: 'Sierra Leone' },
            { sn: 'SG', fn: 'Singapore' },
            { sn: 'SK', fn: 'Slovakia' },
            { sn: 'SI', fn: 'Slovenia' },
            { sn: 'SB', fn: 'Solomon Islands' },
            { sn: 'SO', fn: 'Somalia' },
            { sn: 'ZA', fn: 'South Africa' },
            { sn: 'GS', fn: 'South Georgia/Sandwich Islands' },
            { sn: 'KR', fn: 'South Korea' },
            { sn: 'SS', fn: 'South Sudan' },
            { sn: 'ES', fn: 'Spain' },
            { sn: 'LK', fn: 'Sri Lanka' },
            { sn: 'SD', fn: 'Sudan' },
            { sn: 'SR', fn: 'Suriname' },
            { sn: 'SJ', fn: 'Svalbard and Jan Mayen' },
            { sn: 'SZ', fn: 'Swaziland' },
            { sn: 'SE', fn: 'Sweden' },
            { sn: 'CH', fn: 'Switzerland' },
            { sn: 'SY', fn: 'Syria' },
            { sn: 'WS', fn: 'Samoa' }
        ]
    },
    {
        group: 'T', Countries: [
            { sn: 'TW', fn: 'Taiwan' },
            { sn: 'TJ', fn: 'Tajikistan' },
            { sn: 'TZ', fn: 'Tanzania' },
            { sn: 'TH', fn: 'Thailand' },
            { sn: 'TL', fn: 'Timor-Leste' },
            { sn: 'TG', fn: 'Togo' },
            { sn: 'TK', fn: 'Tokelau' },
            { sn: 'TO', fn: 'Tonga' },
            { sn: 'TT', fn: 'Trinidad and Tobago' },
            { sn: 'TN', fn: 'Tunisia' },
            { sn: 'TR', fn: 'Turkey' },
            { sn: 'TM', fn: 'Turkmenistan' },
            { sn: 'TC', fn: 'Turks and Caicos Islands' },
            { sn: 'TV', fn: 'Tuvalu' },
        ]
    },
    {
        group: 'U', Countries: [
            { sn: 'UG', fn: 'Uganda' },
            { sn: 'UA', fn: 'Ukraine' },
            { sn: 'AE', fn: 'United Arab Emirates' },
            { sn: 'GB', fn: 'United Kingdom (UK)' },
            { sn: 'US', fn: 'United States (US)' },
            { sn: 'UM', fn: 'United States (US) Minor Outlying Islands' },
            { sn: 'VI', fn: 'United States (US) Virgin Islands' },
            { sn: 'UY', fn: 'Uruguay' },
            { sn: 'UZ', fn: 'Uzbekistan' }
        ]
    },
    {
        group: 'V', Countries: [
            { sn: 'VU', fn: 'Vanuatu' },
            { sn: 'VA', fn: 'Vatican' },
            { sn: 'VE', fn: 'Venezuela' },
            { sn: 'VN', fn: 'Vietnam' }
        ]
    },
    {
        group: 'W', Countries: [
            { sn: 'WF', fn: 'Wallis and Futuna' },
            { sn: 'EH', fn: 'Western Sahara' }
        ]
    },
    {
        group: 'Y', Countries: [
            { sn: 'YE', fn: 'Yemen' }
        ]
    },
    {
        group: 'Z', Countries: [
            { sn: 'ZM', fn: 'Zambia' },
            { sn: 'ZW', fn: 'Zimbabwe' }
        ]
    }
];
var Country = (function () {
    function Country(sn, fn) {
        this.sn = sn;
        this.fn = fn;
    }
    return Country;
}());

var GourpCountry = (function () {
    function GourpCountry(group, Countries) {
        this.group = group;
        this.Countries = Countries;
    }
    return GourpCountry;
}());

//# sourceMappingURL=country-service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the Thanks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ThanksPage = (function () {
    function ThanksPage(navCtrl, storage, navParams, loadingCtrl, wooService, userService, appConfig, viewCtrl, appCtrl, tbarService, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.wooService = wooService;
        this.userService = userService;
        this.appConfig = appConfig;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.tbarService = tbarService;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.pay_type = this.navParams.get('type');
        if (this.pay_type == 'paypal') {
            this.pay_id = this.navParams.get('paypal_id');
        }
        else if (this.pay_type == 'stripe') {
            this.pay_id = this.navParams.get('stripe_id');
        }
        this.ship_method = this.navParams.get('ship_method');
        this.id = "";
        this.total = "";
    }
    ThanksPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            if (_this.pay_type == 'paypal' || _this.pay_type == "stripe") {
                var shippingAddress;
                var billingAddress;
                var loadingModal = _this.loadingCtrl.create({
                    content: value['Loading']
                });
                loadingModal.present();
                var shipping_lines = new Array();
                shipping_lines = [{
                        'method_id': _this.appConfig.Shop_Shipping[_this.ship_method].id,
                        'method_title': _this.appConfig.Shop_Shipping[_this.ship_method].title,
                        'total': _this.appConfig.Shop_Shipping[_this.ship_method].cost
                    }];
                var line_items = new Array();
                _this.storage.get('oddwolves-user-billing-address').then(function (data) {
                    if (data) {
                        billingAddress = JSON.parse(data);
                    }
                }).then(function () {
                    _this.storage.get('oddwolves-user-shipping-address').then(function (data) {
                        if (data) {
                            shippingAddress = JSON.parse(data);
                        }
                    }).then(function () {
                        _this.storage.get('oddwolves-cart').then(function (data) {
                            var cartProductArray = JSON.parse(data);
                            cartProductArray.forEach(function (element) {
                                line_items.push({
                                    'product_id': element.product_id,
                                    'quantity': element.quantity,
                                    'variation_id': element.variation_id,
                                    'variations': element.variations
                                });
                            });
                            var payment_details = {
                                'method_id': _this.pay_type,
                                'method_title': _this.pay_type,
                                'paid': true,
                                'transaction_id': _this.pay_id
                            };
                            var billing_address = billingAddress;
                            var shipping_address = shippingAddress;
                            var order = {
                                billing_address: billing_address,
                                'customer_id': _this.userService.id, shipping_address: shipping_address, line_items: line_items, shipping_lines: shipping_lines, payment_details: payment_details
                            };
                            _this.wooService.createOrder('', { order: order }).then(function (data) {
                                if (data) {
                                    _this.storage.remove('oddwolves-cart');
                                    _this.tbarService.cartBage = 0;
                                    _this.id = data.order.id;
                                    _this.total = data.order.total;
                                    loadingModal.dismiss();
                                }
                            }, function (reson) {
                                loadingModal.dismiss();
                                _this.alertCtrl.create({
                                    title: value['Notice'],
                                    message: value['NetWork_Error'],
                                    buttons: [value['OK']]
                                }).present();
                            });
                        });
                    });
                });
            }
            else {
                _this.id = _this.navParams.get('order_id');
                _this.total = _this.navParams.get('total');
            }
        });
    };
    ThanksPage.prototype.goHome = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */], 0);
        this.viewCtrl.dismiss();
    };
    return ThanksPage;
}());
ThanksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-thanks',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\thanks\thanks.html"*/'<!--\n  Generated template for the Thanks page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Thanks\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n  <span class="fa fa-thumbs-up fa-6"></span>\n    <h4>{{ \'Thanks\' | translate }}<br>{{ \'Order_Success_Note\' | translate }}</h4>\n  <p align="center">{{ \'Order_ID_Note\' | translate }}Your id order is <b>#{{id}}.</b>\n    <br>{{ \'Order_Total_Note\' | translate }}<b [innerHTML]="appConfig.Shop_Currency_format"></b><b>{{total}}</b>.</p>\n  <p align="center">{{ \'Order_Paymethod_Note\' | translate }}{{pay_type}}.</p>\n\n  \n  <p><br><button ion-button full color="primary" (click)="goHome()">{{ \'Go_Home\' | translate }}</button></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\thanks\thanks.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppConfig */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
], ThanksPage);

//# sourceMappingURL=thanks.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripePayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Generated class for the StripePay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var StripePayPage = (function () {
    function StripePayPage(navCtrl, navParams, http, appConfig, alertCtrl, viewCtrl, loadingCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appConfig = appConfig;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.card_number = '';
        this.card_cvc = '';
        this.card_exp_month = '';
        this.card_exp_year = '';
        this.total = 0;
        this.desc = '';
        this.max_year = 0;
        var now = __WEBPACK_IMPORTED_MODULE_10_moment___default()();
        this.card_exp_month = __WEBPACK_IMPORTED_MODULE_10_moment___default()(now.format(), __WEBPACK_IMPORTED_MODULE_10_moment___default.a.ISO_8601).format();
        this.card_exp_year = __WEBPACK_IMPORTED_MODULE_10_moment___default()(now.format(), __WEBPACK_IMPORTED_MODULE_10_moment___default.a.ISO_8601).format();
        this.max_year = new Date().getFullYear() + 100;
        this.total = this.navParams.get('total');
        this.desc = this.navParams.get('desc');
    }
    StripePayPage.prototype.pay = function () {
        var _this = this;
        this.translateService.get(['Notice', 'OK', 'Require_Card_Number', 'Require_Expire_Month', 'Require_Expire_Year', 'Require_Card_Cvc', 'Loading']).subscribe(function (value) {
            if (_this.card_number.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Card_Number'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.card_exp_month.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Expire_Month'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.card_exp_year.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Expire_Year'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            if (_this.card_cvc.trim().length == 0) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Require_Card_Cvc'],
                    buttons: [value['OK']]
                }).present();
                return;
            }
            var key = '';
            var secret = '';
            if (_this.appConfig.Enable_Stripe_Test_Mode) {
                key = _this.appConfig.Stripe_Test_Publishable_Key;
                secret = _this.appConfig.Stripe_Test_Secret_Key;
            }
            else {
                key = _this.appConfig.Stripe_Live_Publishable_Key;
                secret = _this.appConfig.Stripe_Live_Secret_Key;
            }
            Stripe.setPublishableKey(key);
            try {
                _this.loadingModal = _this.loadingCtrl.create({
                    content: value['Loading']
                });
                _this.loadingModal.present();
                Stripe.card.createToken({
                    number: _this.card_number,
                    cvc: _this.card_cvc,
                    exp_month: __WEBPACK_IMPORTED_MODULE_10_moment___default()(_this.card_exp_month).format('M'),
                    exp_year: __WEBPACK_IMPORTED_MODULE_10_moment___default()(_this.card_exp_year).format('YY'),
                }, function (status, response) {
                    _this.stripeResponseHandler(status, response);
                });
            }
            catch (e) {
                _this.handleError("submitPayment - inner", e);
            }
        });
    };
    StripePayPage.prototype.stripeResponseHandler = function (status, response) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        if (this.appConfig.Enable_Stripe_Test_Mode == true) {
            headers.append('Authorization', 'Bearer ' + this.appConfig.Stripe_Test_Secret_Key);
        }
        else {
            headers.append('Authorization', 'Bearer ' + this.appConfig.Stripe_Live_Secret_Key);
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.translateService.get(['Notice', 'OK', 'Stripe_Pay_Fail']).subscribe(function (value) {
            _this.http.post('https://api.stripe.com/v1/charges', 'amount=' + (_this.total * 100) +
                '&currency=' + _this.appConfig.Shop_Currency +
                '&source=' + response.id +
                '&description=' + _this.desc, { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.paid == true && data.status == 'succeeded') {
                    _this.loadingModal.dismiss();
                    var id = data.id;
                    _this.viewCtrl.dismiss({ stripe_id: id, result: true });
                }
                else {
                    _this.loadingModal.dismiss();
                    _this.alertCtrl.create({
                        title: value['Notice'],
                        message: value['Stripe_Pay_Fail'] + '<br/>' + data.failure_message,
                        buttons: [value['OK']]
                    }).present();
                }
            }, function (reason) {
                _this.loadingModal.dismiss();
                var result = JSON.parse(reason._body);
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: result.error.message,
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    StripePayPage.prototype.handleError = function (error, e) {
        var _this = this;
        this.loadingModal.dismiss();
        this.translateService.get(['Notice', 'OK', 'Connect_Stripe_Error']).subscribe(function (value) {
            _this.alertCtrl.create({
                title: value['Notice'],
                message: value['Connect_Stripe_Error'],
                buttons: [value['OK']]
            }).present();
        });
    };
    StripePayPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return StripePayPage;
}());
StripePayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-stripe-pay',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\stripe-pay\stripe-pay.html"*/'<!--\n  Generated template for the StripePay page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'Stripe_Pay\' | translate }}</ion-title>\n     <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>{{ \'Card_Number\' | translate }}</ion-label>\n      <ion-input min="16" max="19" type="number" [(ngModel)]="card_number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>{{ \'Expiry_Month\' | translate }}</ion-label>\n      <ion-datetime displayFormat="MM" [(ngModel)]="card_exp_month"></ion-datetime>\n\n    </ion-item>\n    <ion-item>\n      <ion-label floating>{{ \'Expiry_Year\' | translate }}</ion-label>\n      <ion-datetime displayFormat="YYYY" [(ngModel)]="card_exp_year" max="{{max_year}}" min="2017"></ion-datetime>\n    </ion-item>\n    <ion-item>\n       <ion-label floating>{{ \'CVC\' | translate }}</ion-label>\n      <ion-input min="3" max="3" type="number" [(ngModel)]="card_cvc"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button full color="primary" (click)="pay()">{{ \'Pay\' | translate }}</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\stripe-pay\stripe-pay.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], StripePayPage);

//# sourceMappingURL=stripe-pay.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_native__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__attribute_attribute__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the ProductDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams, wooService, loadingCtrl, tbarService, storage, alertCtrl, appConfig, viewCtrl, popoverCtrl, modalCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.tbarService = tbarService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.appConfig = appConfig;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.hasVariation = false;
        this.show = true;
        this.cartProductNumber = 0;
        this.isFav = false;
        if (this.navParams.get('org') == 'carttab') {
            this.tbarService.hideBar = false;
        }
        else {
            this.tbarService.hideBar = true;
        }
        this.selVariation = null;
        this.slideImages = new Array();
        this.mySlideOptions = {
            pager: true,
            loop: true,
            autoplay: 2000
        };
    }
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.org = this.navParams.get('org');
        this.storage.get('oddwolves-cart').then(function (data) {
            if (data) {
                _this.cartProductNumber = JSON.parse(data).length;
            }
        });
    };
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.value = value;
            _this.loadingModal.present();
            // this.wooService.getSingleProduct(this.navParams.get('product')).then((product: any) => {
            //   this.product = product;
            //   this.attrArray = product.attributes;
            //   this.slideImages = this.product.images;
            //   if (this.product.variations.length > 0) {
            //     this.hasVariation = true;
            //   }
            _this.product = _this.navParams.get('product');
            _this.attrArray = _this.product.attributes;
            _this.slideImages = _this.product.images;
            if (_this.product.variations.length > 0) {
                _this.hasVariation = true;
            }
            _this.storage.get('oddwolves-wishlist').then(function (data) {
                if (data) {
                    var wishlistArray = JSON.parse(data);
                    var findIndex = wishlistArray.findIndex(function (element) {
                        return element.product_id == _this.product.id;
                    });
                    if (findIndex != -1) {
                        _this.isFav = true;
                    }
                }
            });
            _this.loadingModal.dismiss();
        }, function (reson) {
            _this.loadingModal.dismiss();
            _this.alertCtrl.create({
                title: _this.value['Notice'],
                message: _this.value['NetWork_Error'],
                buttons: [_this.value['OK']]
            }).present();
        });
        //});
    };
    ProductDetailsPage.prototype.addCartClip = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Product_added_successfully', 'Please_select_variation', 'OK']).subscribe(function (value) {
            _this.selVariation = _this.getSelectedVariation();
            if (_this.selVariation != null || _this.hasVariation == false) {
                _this.loadingModal = _this.loadingCtrl.create({
                    spinner: 'hide',
                    content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Product_added_successfully'] + '</div>'
                });
                _this.loadingModal.present();
                var cartArray = new Array();
                _this.storage.get('oddwolves-cart').then(function (data) {
                    if (data) {
                        cartArray = JSON.parse(data);
                        if (_this.hasVariation == true) {
                            var findIndex = cartArray.findIndex(function (element) {
                                return element.product_id == _this.product.id && element.variation_id == _this.selVariation.id;
                            });
                            if (findIndex != -1) {
                                cartArray[findIndex].quantity++;
                            }
                            else {
                                cartArray.push(_this.createNewProduct());
                            }
                            _this.storage.set('oddwolves-cart', JSON.stringify(cartArray));
                        }
                        else {
                            var findIndex = cartArray.findIndex(function (element) {
                                return element.product_id == _this.product.id;
                            });
                            if (findIndex != -1) {
                                cartArray[findIndex].quantity++;
                            }
                            else {
                                cartArray.push(_this.createNewProduct());
                            }
                            _this.storage.set('oddwolves-cart', JSON.stringify(cartArray));
                        }
                    }
                    else {
                        cartArray.push(_this.createNewProduct());
                        _this.storage.set('oddwolves-cart', JSON.stringify(cartArray));
                    }
                    _this.tbarService.cartBage = cartArray.length;
                    _this.cartProductNumber = cartArray.length;
                });
                setTimeout(function () {
                    _this.loadingModal.dismiss();
                }, 2000);
            }
            else {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Please_select_variation'],
                    buttons: [value['OK']]
                }).present();
            }
        });
    };
    ProductDetailsPage.prototype.createNewProduct = function () {
        var newProduct = new __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__["a" /* CartProduct */]();
        newProduct.product_id = this.product.id;
        newProduct.name = this.product.name;
        newProduct.quantity = 1;
        if (this.selVariation != null) {
            newProduct.variation_id = this.selVariation.id;
            newProduct.price = this.selVariation.price;
            if (this.selVariation.image && this.selVariation.image[0]) {
                newProduct.thumb = this.selVariation.image[0].src;
            }
            else {
                newProduct.thumb = this.product.images[0].src;
            }
            var temp_variation = '';
            this.selVariation.attributes.forEach(function (attr) {
                newProduct.variation_name += attr.option + ' ';
                temp_variation += '"' + attr.name + '":"' + attr.option + '",';
            });
            if (temp_variation.length > 0) {
                temp_variation = temp_variation.substr(0, temp_variation.length - 1);
            }
            temp_variation = "{" + temp_variation + "}";
            var temp_variation_json = JSON.parse(temp_variation);
            newProduct.variations = temp_variation_json;
        }
        else {
            newProduct.variation_id = 0;
            newProduct.price = this.product.price;
            newProduct.thumb = this.product.images[0].src;
        }
        return newProduct;
    };
    ProductDetailsPage.prototype.goToCart = function () {
        if (this.navParams.get('org') == "carttab") {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        }
    };
    ProductDetailsPage.prototype.addWishlist = function () {
        var _this = this;
        this.translateService.get(['Removed_from_wishlist', 'Added_to_wishlist']).subscribe(function (value) {
            if (_this.isFav == true) {
                _this.storage.get('oddwolves-wishlist').then(function (data) {
                    if (data) {
                        var wishlistArray = JSON.parse(data);
                        var findIndex = wishlistArray.findIndex(function (element) {
                            return element.product_id == _this.product.id;
                        });
                        if (findIndex != -1) {
                            wishlistArray.splice(findIndex, 1);
                            _this.storage.set('oddwolves-wishlist', JSON.stringify(wishlistArray));
                            var wishlistModal = _this.loadingCtrl.create({
                                spinner: 'hide',
                                content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Removed_from_wishlist'] + '</div>'
                            });
                            wishlistModal.present();
                            setTimeout(function () {
                                wishlistModal.dismiss();
                            }, 2000);
                        }
                    }
                });
                _this.isFav = false;
            }
            else {
                _this.storage.get('oddwolves-wishlist').then(function (data) {
                    var wishlistArray = new Array();
                    if (data) {
                        wishlistArray = JSON.parse(data);
                    }
                    var wishlistModal = _this.loadingCtrl.create({
                        spinner: 'hide',
                        content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div></div><div>' + value['Added_to_wishlist'] + '</div>'
                    });
                    wishlistModal.present();
                    var wp = new __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__["b" /* WishlistProduct */]();
                    wp.price = _this.product.price;
                    wp.product_id = _this.product.id;
                    wp.product_image = _this.product.images[0].src;
                    wishlistArray.push(wp);
                    _this.storage.set('oddwolves-wishlist', JSON.stringify(wishlistArray));
                    setTimeout(function () {
                        wishlistModal.dismiss();
                    }, 2000);
                });
                _this.isFav = true;
            }
        });
    };
    ProductDetailsPage.prototype.share = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK', 'Share_Success', 'Share_Fail']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            __WEBPACK_IMPORTED_MODULE_7_ionic_native__["g" /* SocialSharing */].share("Sell " + _this.product.name + " for only " + _this.product.price + _this.currencySymbol.nativeElement.innerHTML + ", for more details check this out.", _this.product.name, null, _this.product.permalink).then(function () {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Share_Success'],
                    buttons: [value['OK']]
                }).present();
            }).catch(function () {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['Share_Fail'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    ProductDetailsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ProductDetailsPage.prototype.attributeSelected = function (item) {
        var _this = this;
        var changeAttrOption = this.product.attributes.find(function (value) {
            return value.name == item.name;
        });
        if (changeAttrOption) {
            var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__attribute_attribute__["a" /* AttributePage */], {
                'options': item.options,
                'attr': item.name,
                'option': changeAttrOption ? (changeAttrOption.option ? changeAttrOption.option : '') : ''
            });
            popover.onDidDismiss(function (data) {
                if (data) {
                    _this.product.attributes.forEach(function (element) {
                        if (element.name == data.attr) {
                            element.option = data.option;
                            return;
                        }
                    });
                    _this.getSelectedVariation();
                }
            });
            popover.present();
        }
    };
    ProductDetailsPage.prototype.getSelectedOption = function (attr) {
        var changeAttrOption = this.product.attributes.find(function (value) {
            return value.name == attr;
        });
        return changeAttrOption ? (changeAttrOption.option ? changeAttrOption.option : '') : '';
    };
    ProductDetailsPage.prototype.getSelectedVariation = function () {
        var _this = this;
        var allSelected = true;
        this.product.attributes.forEach(function (element) {
            if (!element.option) {
                allSelected = false;
                return;
            }
        });
        if (!allSelected) {
            this.selVariation = null;
        }
        var selectedVariation = this.product.variations.find(function (value) {
            var variation_attr_array = value.attributes;
            var len = variation_attr_array.length;
            var same = true;
            for (var i = 0; i < len; i++) {
                if (variation_attr_array[i].option != _this.product.attributes[i].option) {
                    same = false;
                    break;
                }
            }
            return same;
        });
        if (selectedVariation) {
            this.selVariation = selectedVariation;
            this.variationImg = selectedVariation.image[0].src;
            return selectedVariation;
        }
        return null;
    };
    return ProductDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('currencyFormat'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
], ProductDetailsPage.prototype, "currencySymbol", void 0);
ProductDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-product-details',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\product-details\product-details.html"*/'<!--\n  Generated template for the ProductDetails page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Product\' | translate }}</ion-title>\n    <ion-buttons *ngIf="org==\'carttab\'" end>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="product">\n    <ion-slides *ngIf="selVariation==null" pager autoplay="3000" loop>\n      <ion-slide *ngFor="let img of slideImages">\n        <img src="{{img.src}}" />\n      </ion-slide>\n    </ion-slides>\n    <ion-row *ngIf="selVariation!=null" class="top-img">\n      <img src="{{variationImg}}" />\n    </ion-row>\n    <div padding>\n      <h3 class="title">{{product.name}}</h3>\n      <div>\n        <b #currencyFormat [innerHTML]="appConfig.Shop_Currency_format"></b><b>{{product.price}} </b>\n        <del ng-show="product.regular_price > 0 && product.on_sale"></del>\n        <span class="pull-right" (click)="share()">\n	        		<ion-icon name="share" color="primary"></ion-icon> <b color="primary">Compartir</b>\n	        	</span>\n      </div>\n    </div>\n    <ion-list *ngIf="product.attributes.length>0">\n      <ion-list-header class="item-header">\n        {{ \'PRODUCT_Attributes\' | translate }}\n      </ion-list-header>\n      <button ion-item *ngFor="let attribute of product.attributes;" (click)="attributeSelected(attribute)">\n        {{attribute.name}}<span item-right>{{getSelectedOption(attribute.name)}}</span>\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header class="item-header">\n         {{ \'PRODUCT_DESCRIPTION\' | translate }}\n      </ion-list-header>\n      <ion-item [innerHTML]="product.description" class="desc"></ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n<ion-footer border-top>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-chip (click)="addWishlist()">\n          <ion-icon name="heart" [color]="isFav?\'primary\':\'dark\'"></ion-icon>\n        </ion-chip>\n        <ion-chip margin-left (click)="goToCart()">\n          <ion-icon name="cart" color="primary"></ion-icon>\n          <ion-label>{{cartProductNumber}}</ion-label>\n        </ion-chip>\n      </ion-col>\n      <ion-col col-6 class="chip-button">\n        <ion-chip [class.chip-enable]="selVariation!=null || hasVariation==false" (click)="addCartClip()">\n          <ion-label>{{ \'Add_to_cart\' | translate }}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\product-details\product-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], ProductDetailsPage);

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttributePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Attribute page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AttributePage = (function () {
    function AttributePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    AttributePage.prototype.ionViewDidEnter = function () {
        this.options = this.navParams.get('options');
        this.attr_name = this.navParams.get('attr');
        this.selectedItem = this.navParams.get('option');
    };
    AttributePage.prototype.chooseOption = function (option) {
        this.viewCtrl.dismiss({
            'attr': this.attr_name,
            'option': option
        });
    };
    return AttributePage;
}());
AttributePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-attribute',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\attribute\attribute.html"*/'<!--\n  Generated template for the Attribute page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-list>\n  <ion-list-header class="item-header">\n    {{attr_name}}\n  </ion-list-header>\n  <ion-item *ngFor="let option of options" (click)="chooseOption(option)">\n    {{option}}\n    <ion-icon *ngIf="selectedItem==option" name="checkmark" item-right></ion-icon>\n  </ion-item>\n  \n</ion-list>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\attribute\attribute.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], AttributePage);

//# sourceMappingURL=attribute.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchPage = (function () {
    function SearchPage(navCtrl, viewCtrl, wooService, loadingCtrl, alertCtrl, translateService, navParams, appConfig) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.appConfig = appConfig;
        this.myInput = '';
        this.searchTerm = '';
        this.noResult = false;
        this.getProducts();
    }
    SearchPage.prototype.onSearchChange = function () {
        if (this.searchTerm != "") {
            this.noResult = false;
            this.products2 = this.filterItems(this.searchTerm);
        }
        else {
            //this.noResult = true;
        }
    };
    SearchPage.prototype.filterItems = function (x) {
        var results = [];
        //console.log(x);
        for (var i = 0; i < this.products.length; ++i) {
            if (this.products[i].name.trim().toLowerCase().search(x) >= 0) {
                //console.log(this.products[i].name);
                results.push(this.products[i]);
            }
        }
        return results;
    };
    SearchPage.prototype.getProducts = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.value = value;
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.products = _this.navParams.get('products');
            if (_this.products.length == 0) {
                _this.noResult = true;
            }
            else {
            }
            _this.loadingModal.dismiss();
        }, function (reson) {
            _this.loadingModal.dismiss();
            _this.alertCtrl.create({
                title: _this.value['Notice'],
                message: _this.value['NetWork_Error'],
                buttons: [_this.value['OK']]
            }).present();
        });
    };
    SearchPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.viewProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { product: product });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\search\search.html"*/'<!--\n  Generated template for the Search page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onSearchChange()" placeholder="Busca una revista">\n    </ion-searchbar>\n<!--     <ion-searchbar [(ngModel)]="myInput" placeholder="Busca una revista">\n    </ion-searchbar> -->\n    <ion-buttons end>\n      <button ion-button color="white" (click)="onSearch()">{{ \'Search\' | translate }}</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div *ngIf="noResult" class="empty">\n    <h3>{{ \'No_Results\' | translate }}</h3>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let product of products2">\n        <div class="card round" (click)="viewProduct(product)">\n          <div class="badge" *ngIf="product.on_sale">\n            <span class="sale">OnSale</span>\n          </div>\n          <div class="img" [ngStyle]="{\'background-image\': \'url(\'+product.images[0].src+\')\'}">\n          </div>\n          <div class="padding-xs" text-center>\n            <div class="title">{{ product.name}}</div>\n            <span class="pull-right" [innerHTML]="appConfig.Shop_Currency_format+product.price"></span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\search\search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listings_listings__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CategoryPage = (function () {
    function CategoryPage(navCtrl, wooService, loadingCtrl, tbarService, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.tbarService = tbarService;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.categories = new Array();
    }
    CategoryPage.prototype.ionViewWillEnter = function () {
        this.tbarService.hideBar = false;
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get(['Loading', 'Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.wooService.getStoreCategories({ page: 1, per_page: 100 }).then(function (categories) {
                var sortCategories = new Array();
                var noParentCat = categories.filter(function (value) {
                    return value.parent == 0;
                });
                noParentCat.forEach(function (elementZero) {
                    elementZero.sort = 0;
                    sortCategories.push(elementZero);
                    var firstChildCat = categories.filter(function (value) {
                        return value.parent == elementZero.id;
                    });
                    firstChildCat.forEach(function (elementFirst) {
                        elementFirst.sort = 1;
                        sortCategories.push(elementFirst);
                        var secondChildCat = categories.filter(function (value) {
                            return value.parent == elementFirst.id;
                        });
                        secondChildCat.forEach(function (elementSecond) {
                            elementSecond.sort = 2;
                            sortCategories.push(elementSecond);
                        });
                    });
                });
                _this.categories = sortCategories;
                console.log(categories);
                _this.loadingModal.dismiss();
            }, function (error) {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    CategoryPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.wooService.getStoreCategories({ page: 1, per_page: 100 }).then(function (categories) {
                categories.forEach(function (element) {
                });
                _this.categories = categories;
                refresher.complete();
            }, function (reson) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
                refresher.complete();
            });
        });
    };
    CategoryPage.prototype.openDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { id: id });
    };
    CategoryPage.prototype.openListings = function (catID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listings_listings__["a" /* ListingsPage */], { 'catID': catID });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\category\category.html"*/'<!--\n  Generated template for the Category page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Category\' | translate }}</ion-title>\n   \n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n   <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Desliza para recargar" refreshingSpinner="circles" refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngFor="let category of categories" (click)="openListings(category.id)">\n      <ion-thumbnail item-left *ngIf="category.image!=\'\'"  [ngClass]="{first_child: category.sort==1,second_child: category.sort==2}">\n        <img src="{{category.image.src}}">\n      </ion-thumbnail>\n      <span [ngClass]="{first_child: category.sort==1&&category.image==\'\',second_child: category.sort==2&&category.image==\'\'}">{{category.name}}</span>\n      <ion-icon name="arrow-forward" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\category\category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Listings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ListingsPage = (function () {
    function ListingsPage(navCtrl, actionSheetCtrl, modalCtrl, loadingCtrl, wooService, navParams, tbarService, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wooService = wooService;
        this.navParams = navParams;
        this.tbarService = tbarService;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.products = new Array();
        this.page = 1;
        this.per_page = 10;
        this.has_more = true;
        this.categoryID = this.navParams.data.catID;
        this.getProducts();
    }
    ListingsPage.prototype.ionViewWillEnter = function () {
        this.tbarService.hideBar = false;
    };
    ListingsPage.prototype.getProducts = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page, category: _this.categoryID }).then(function (products) {
                _this.products = products;
                if (products.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                _this.loadingModal.dismiss();
            }, function (reson) {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    ListingsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.has_more) {
            this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
                _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page, category: _this.categoryID }).then(function (products) {
                    products.forEach(function (p) {
                        _this.products.push(p);
                    });
                    if (products.length < _this.per_page) {
                        _this.has_more = false;
                    }
                    else {
                        _this.page++;
                    }
                    infiniteScroll.complete();
                }, function (reson) {
                    infiniteScroll.complete();
                    _this.alertCtrl.create({
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
    };
    ListingsPage.prototype.viewProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { product: product });
    };
    ListingsPage.prototype.openDetails = function () {
        var detailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */]);
        detailsModal.present(detailsModal);
    };
    ListingsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.page = 1;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.wooService.getProducts({ page: _this.page, per_page: _this.per_page, category: _this.categoryID }).then(function (products) {
                _this.products = products;
                if (products.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                refresher.complete();
            }, function (reson) {
                refresher.complete();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    return ListingsPage;
}());
ListingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-listings',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\listings\listings.html"*/'<!--\n  Generated template for the Listings page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Listings\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n	 <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Desliza para recargar" refreshingSpinner="circles" refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let product of products">\n        <div class="card round" (click)="viewProduct(product)">\n          <div class="badge" *ngIf="product.on_sale">\n            <span class="sale">OnSale</span>\n          </div>\n          <div class="img" [ngStyle]="{\'background-image\': \'url(\'+product.images[0].src+\')\'}">\n          </div>\n          <div class="padding-xs" text-center>\n            <div class="title">{{ product.name}}</div>\n            <div [innerHTML]="product.price_html"></div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n      </ion-infinite-scroll-content>\n </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\listings\listings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], ListingsPage);

//# sourceMappingURL=listings.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the Wishlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var WishlistPage = (function () {
    function WishlistPage(navCtrl, loadingCtrl, modalCtrl, wooService, storage, appCtrl, appConfig, tbarService, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.wooService = wooService;
        this.storage = storage;
        this.appCtrl = appCtrl;
        this.appConfig = appConfig;
        this.tbarService = tbarService;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.isEmpty = false;
    }
    WishlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.tbarService.hideBar = false;
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.storage.get('oddwolves-wishlist').then(function (data) {
                if (data) {
                    _this.wishlistProduct = JSON.parse(data);
                    if (_this.wishlistProduct.length > 0) {
                        var includeID = '';
                        _this.wishlistProduct.forEach(function (element) {
                            includeID += element.product_id + ',';
                        });
                        if (includeID.length > 0) {
                            includeID = includeID.substr(0, includeID.length - 1);
                        }
                        _this.wooService.getProducts({ include: includeID }).then(function (products) {
                            _this.products = products;
                            _this.isEmpty = false;
                            _this.loadingModal.dismiss();
                        }, function (reson) {
                            _this.loadingModal.dismiss();
                            _this.alertCtrl.create({
                                title: value['Notice'],
                                message: value['NetWork_Error'],
                                buttons: [value['OK']]
                            }).present();
                        });
                    }
                    else {
                        _this.isEmpty = true;
                        _this.loadingModal.dismiss();
                    }
                }
                else {
                    _this.isEmpty = true;
                    _this.loadingModal.dismiss();
                }
            });
        });
    };
    WishlistPage.prototype.viewProduct = function (pid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_details_product_details__["a" /* ProductDetailsPage */], { id: pid });
    };
    WishlistPage.prototype.goHome = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */], 0);
    };
    WishlistPage.prototype.deleteProduct = function (product) {
        event.stopPropagation();
        var findIndex = this.products.findIndex(function (element) {
            return element.id == product.id;
        });
        if (findIndex != -1) {
            this.products.splice(findIndex, 1);
            if (this.products.length == 0) {
                this.isEmpty = true;
            }
        }
        findIndex = this.wishlistProduct.findIndex(function (element) {
            return element.product_id == product.id;
        });
        this.wishlistProduct.splice(findIndex, 1);
        this.storage.set('oddwolves-wishlist', JSON.stringify(this.wishlistProduct));
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-wishlist',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\wishlist\wishlist.html"*/'<!--\n  Generated template for the Wishlist page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Wishlist\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content page-wishlist class="wishlist commonbg">\n  <div *ngIf="isEmpty" class="empty">\n    <img src="assets/img/favorite.png">\n    <h3>{{ \'Empty_Wishlist\' | translate }}</h3>\n    <button ion-button round (click)="goHome()">{{ \'Let_us_shopping\' | translate }}</button>\n  </div>\n  <div *ngIf="!isEmpty">\n    <ion-list>\n      <ion-item *ngFor="let product of products" (click)="viewProduct(product.id)">\n        <ion-thumbnail item-left> <img src="{{product.images[0].src}}"> </ion-thumbnail>\n        <h2>{{product.name}}</h2>\n        <p><span [innerHTML]="appConfig.Shop_Currency_format"></span>{{product.price}}</p>\n\n        <ion-icon name="trash" color="primary" item-right (click)="deleteProduct(product)"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\wishlist\wishlist.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_5__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*
  Generated class for the CartTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CartTabPage = (function () {
    function CartTabPage(navCtrl, modalCtrl, storage, tbarService, wooService, appCtrl, loadingCtrl, appConfig, userService, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.tbarService = tbarService;
        this.wooService = wooService;
        this.appCtrl = appCtrl;
        this.loadingCtrl = loadingCtrl;
        this.appConfig = appConfig;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.isEmpty = false;
        this.tbarService.hideBar = false;
    }
    CartTabPage.prototype.ionViewWillEnter = function () {
        this.tbarService.hideBar = false;
        this.isEmpty = false;
    };
    CartTabPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subTotal = 0;
        this.total = 0;
        this.shipTotal = 0;
        this.translateService.get(['Loading']).subscribe(function (value) {
            _this.storage.get('oddwolves-cart').then(function (data) {
                if (data) {
                    _this.cart = JSON.parse(data);
                    if (_this.cart.length > 0) {
                        var includeID = '';
                        _this.cart.forEach(function (element) {
                            includeID += element.product_id + ',';
                        });
                        if (includeID.length > 0) {
                            includeID = includeID.substr(0, includeID.length - 1);
                        }
                        _this.loadingModal = _this.loadingCtrl.create({
                            content: value['Loading']
                        });
                        _this.loadingModal.present();
                        _this.wooService.getProducts({ include: includeID }).then(function (products) {
                            _this.cart.forEach(function (element) {
                                var findProduct = products.find(function (product) {
                                    return product.id == element.product_id;
                                });
                                element.name = findProduct.name;
                                if (findProduct.variations.length > 0) {
                                    var findVariation = findProduct.variations.find(function (variation) {
                                        return variation.id == element.variation_id;
                                    });
                                    element.thumb = findVariation.image[0].src;
                                    element.price = findVariation.price;
                                }
                                else {
                                    element.thumb = findProduct.images[0].src;
                                    element.price = findProduct.price;
                                }
                            });
                            _this.storage.set('oddwolves-cart', JSON.stringify(_this.cart));
                            _this.isEmpty = false;
                            _this.loadingModal.dismiss();
                        }, function (reson) {
                            _this.loadingModal.dismiss();
                            _this.errorModal.present();
                        });
                        _this.cart.forEach(function (product) {
                            _this.subTotal += product.price * product.quantity;
                        });
                        _this.total = _this.subTotal;
                    }
                    else {
                        _this.isEmpty = true;
                    }
                }
                else {
                    _this.isEmpty = true;
                }
            });
        });
    };
    CartTabPage.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        }
        catch (e) { }
        try {
            m += s2.split(".")[1].length;
        }
        catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    };
    CartTabPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    CartTabPage.prototype.openDetails = function () {
        var detailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */]);
        detailsModal.present();
    };
    CartTabPage.prototype.goHome = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */], 0);
    };
    CartTabPage.prototype.remove = function (pid) {
        var _this = this;
        event.stopPropagation();
        var findIndex = this.cart.findIndex(function (element) {
            return element.product_id == pid;
        });
        if (findIndex != -1) {
            this.cart.splice(findIndex, 1);
            if (this.cart.length == 0) {
                this.isEmpty = true;
            }
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
        this.tbarService.cartBage = this.cart.length;
    };
    CartTabPage.prototype.inputNum = function () {
        event.stopPropagation();
    };
    CartTabPage.prototype.inputChanged = function (item) {
        var _this = this;
        event.stopPropagation();
        if (isNaN(item.quantity) == true || item.quantity <= 1) {
            item.quantity = 1;
        }
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartTabPage.prototype.subQuantity = function (item) {
        var _this = this;
        event.stopPropagation();
        if (item.quantity == 1) {
            item.quantity = 1;
        }
        else {
            item.quantity--;
            this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        }
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartTabPage.prototype.addQuantity = function (item) {
        var _this = this;
        event.stopPropagation();
        item.quantity++;
        this.storage.set('oddwolves-cart', JSON.stringify(this.cart));
        this.subTotal = 0;
        this.cart.forEach(function (product) {
            _this.subTotal += _this.accMul(product.price, product.quantity);
        });
        this.total = this.subTotal;
    };
    CartTabPage.prototype.checkout = function () {
        var _this = this;
        var desc = '';
        this.cart.forEach(function (element) {
            desc += element.name + ',';
        });
        if (desc.length > 0) {
            desc = desc.substr(0, desc.length - 1);
        }
        if (this.userService.isAuthenticated == true) {
            desc = desc.substr(0, desc.length - 1);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { "total": this.total, "description": desc });
        }
        else {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
            modal.present();
            modal.onDidDismiss(function () {
                if (_this.userService.isAuthenticated == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { "total": _this.total, "description": desc });
                }
            });
        }
    };
    CartTabPage.prototype.viewProduct = function (id) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { id: id, org: 'carttab' }, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    return CartTabPage;
}());
CartTabPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-cart-tab',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\cart-tab\cart-tab.html"*/'<!--\n  Generated template for the CartTab page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Cart\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="common-bg">\n\n  <div *ngIf="isEmpty" class="empty">\n    <img src="assets/img/cart.png">\n    <h3>{{ \'Cart_is_empty\' | translate }}</h3>\n    <button ion-button round (click)="goHome()">{{ \'Let_us_shopping\' | translate }}</button>\n  </div>\n  <div *ngIf="!isEmpty">\n    <div *ngFor="let item of cart; let i = index" class="div-cart-item">\n      <ion-row class="div-product" (click)="viewProduct(item.product_id)">\n        <ion-col col-4>\n          <img src="{{ item.thumb }}">\n        </ion-col>\n        <ion-col col-8>\n          <div margin-left>\n            <div text-wrap>{{ item.name }}</div>\n            <div class="text-sm"> <span color="gray">{{ item.variation_name }}</span> </div>\n            <div padding-bottom> <span class="pull-right" [innerHTML]="appConfig.Shop_Currency_format+item.price"></span>\n              <div class="clear"></div>\n            </div>\n            <div>\n            <div class="input-qty"> \n              <span class="btn" (click)="subQuantity(item)">\n                <ion-icon name="ios-remove"></ion-icon>\n              </span> \n              <input type="text" disabled="true" [(ngModel)]="item.quantity" (click)="inputNum()" (blur)=\'inputChanged(item)\'>\n              <span class="btn" (click)="addQuantity(item)">\n                <ion-icon name="ios-add"></ion-icon>\n              </span>\n              <div class="clear"></div>\n            </div>\n              <div class="pull-right bottom-info text-lg trash-btn">\n                <ion-icon name="trash" color="primary" (click)="remove(item.product_id)" class="pull-right"></ion-icon>\n                <div class="clear"></div>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div class="placehold"></div>\n</ion-content>\n<ion-footer class="cart-footer" padding>\n  <ion-title> <span color="gray">{{ \'Total\' | translate }}</span> <br/> <span class="bold" color="danger"> <b [innerHTML]="appConfig.Shop_Currency_format"></b>{{ total}}</span>    </ion-title>\n  <ion-buttons end> <button ion-button color="danger" [disabled]="!cart || cart.length==0" (click)="checkout()">       {{ \'CHECKOUT\' | translate }}    </button>    </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\cart-tab\cart-tab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_tbar_service__["a" /* TbarService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
], CartTabPage);

//# sourceMappingURL=cart-tab.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_list_order_list__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__download_download__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProfilePage = (function () {
    function ProfilePage(navCtrl, modalCtrl, userService, alertCtrl, tbarService, storage, translateService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.tbarService = tbarService;
        this.storage = storage;
        this.translateService = translateService;
    }
    ProfilePage.prototype.openOrderList = function () {
        var _this = this;
        if (this.userService.isAuthenticated) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_list_order_list__["a" /* OrderListPage */], { direction: 'forward' });
        }
        else {
            this.translateService.get(['Notice', 'No_Sign_In', 'OK']).subscribe(function (value) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['No_Sign_In'],
                    buttons: [value['OK']]
                }).present();
            });
        }
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.tbarService.hideBar = false;
    };
    ProfilePage.prototype.loginOut = function () {
        this.userService.destroyUserCredentials();
        this.storage.remove('oddwolves-user-info');
    };
    ProfilePage.prototype.login = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    ProfilePage.prototype.openDownloadsPage = function () {
        console.log("OpenDownloadsPage() opening");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__download_download__["a" /* DownloadPage */], { direction: 'forward' });
    };
    ProfilePage.prototype.openEditAddress = function () {
        var _this = this;
        if (this.userService.isAuthenticated) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */], { direction: 'forward' });
        }
        else {
            this.translateService.get(['Notice', 'No_Sign_In', 'OK']).subscribe(function (value) {
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['No_Sign_In'],
                    buttons: [value['OK']]
                }).present();
            });
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the Profile page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n			</button>\n    <ion-title>{{ \'Profile\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <div class="user-info-header" text-center padding-top>\n    <div *ngIf="userService.isAuthenticated">\n      <p>{{ \'Welcome\' | translate }} {{userService.name}}</p>\n      <p>{{userService.email}}</p>\n    </div>\n    <button *ngIf="!userService.isAuthenticated" ion-button color="light" outline (click)="login()">Iniciar sesión</button>\n  </div>\n  <div class="settings">\n    <ion-list inset>\n      <ion-item (click)="openOrderList()">\n        <ion-icon name="ios-basket-outline" item-left></ion-icon>\n        <h2>{{ \'My_Orders\' | translate }}</h2>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item (click)="openEditAddress()">\n        <ion-icon name="ios-settings-outline" item-left></ion-icon>\n        <h2>{{ \'Shipping_Address\' | translate }}</h2>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item (click)="openDownloadsPage()">\n        <ion-icon name="ios-cloud-outline" item-left></ion-icon>\n        <h2>{{ \'MyDownloads\' | translate }}</h2>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item (click)="loginOut()" *ngIf="userService.isAuthenticated">\n        <ion-icon name="ios-log-out-outline" item-left></ion-icon>\n        <h2>{{ \'Login_Out\' | translate }}</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_tbar_service__["a" /* TbarService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_details_order_details__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the OrderList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrderListPage = (function () {
    function OrderListPage(navCtrl, userService, wooService, loadingCtrl, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.orderList = new Array();
        this.page = 1;
        this.per_page = 10;
        this.has_more = true;
    }
    OrderListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.wooService.getOrderList({
                page: _this.page, per_page: _this.per_page,
                customer: _this.userService.id
            }).then(function (orderlist) {
                _this.orderList = orderlist;
                if (orderlist.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                _this.loadingModal.dismiss();
            }, function (reson) {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    OrderListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.page = 1;
        this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.wooService.getOrderList({
                page: _this.page, per_page: _this.per_page,
                customer: _this.userService.id
            }).then(function (orderlist) {
                _this.orderList = orderlist;
                if (orderlist.length < _this.per_page) {
                    _this.has_more = false;
                }
                else {
                    _this.page++;
                }
                refresher.complete();
            }, function (reson) {
                refresher.complete();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    OrderListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.has_more) {
            this.translateService.get(['Notice', 'NetWork_Error', 'OK']).subscribe(function (value) {
                _this.wooService.getOrderList({ page: _this.page, per_page: _this.per_page, customer: _this.userService.id }).then(function (orderlist) {
                    orderlist.forEach(function (p) {
                        _this.orderList.push(p);
                    });
                    if (orderlist.length < _this.per_page) {
                        _this.has_more = false;
                    }
                    else {
                        _this.page++;
                    }
                    infiniteScroll.complete();
                }, function (reson) {
                    infiniteScroll.complete();
                    _this.alertCtrl.create({
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
    };
    OrderListPage.prototype.viewOrder = function (oid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_details_order_details__["a" /* OrderDetailsPage */], { oid: oid });
    };
    return OrderListPage;
}());
OrderListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-order-list',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\order-list\order-list.html"*/'<!--\n  Generated template for the OrderList page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'OrderList\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Desliza para recargar" refreshingSpinner="circles" refreshingText="Recargando...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let order of orderList" (click)="viewOrder(order.id)">\n    <ion-card-header>\n      <ion-row>\n        <ion-col>#{{ \'Order_ID\' | translate }}:{{order.id}}</ion-col>\n        <ion-col text-right>{{ \'Created\' | translate }}:{{order.date_created | date:\'dd/MM/yyyy\'}}</ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-row padding>\n      <ion-col>{{ \'Total\' | translate }}:{{order.total}}</ion-col>\n      <ion-col text-right>({{order.line_items.length}})items</ion-col>\n    </ion-row>\n   \n    <ion-row padding>\n      <ion-col>{{ \'Status\' | translate }}:{{order.status | uppercase}}</ion-col>\n      <ion-col text-right><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\order-list\order-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], OrderListPage);

//# sourceMappingURL=order-list.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the OrderDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, wooService, loadingCtrl, navParams, alertCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.wooService = wooService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
    }
    OrderDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.wooService.getOrder(_this.navParams.get("oid")).then(function (order) {
                _this.order = order;
                _this.loadingModal.dismiss();
            }, function (reson) {
                _this.loadingModal.dismiss();
                _this.alertCtrl.create({
                    title: value['Notice'],
                    message: value['NetWork_Error'],
                    buttons: [value['OK']]
                }).present();
            });
        });
    };
    return OrderDetailsPage;
}());
OrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-order-details',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\order-details\order-details.html"*/'<!--\n  Generated template for the OrderDetails page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'OrderDetails\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-list *ngIf="order">\n    <ion-item-group>\n      <ion-item-divider color="light">{{ \'ORDER_SUMMARY\' | translate }}</ion-item-divider>\n      <ion-item>\n        {{ \'Status\' | translate }}\n        <span item-right>{{order.status}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Payment_Method\' | translate }}\n        <span item-right>{{order.payment_method_title}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Shipping_Method\' | translate }}\n        <span item-right>{{order.shipping_lines[0].method_title}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Shipping\' | translate }}\n        <span item-right>{{order.shipping_lines[0].total}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Total\' | translate }}\n        <span item-right>{{order.total}}</span>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light">{{ \'LINE_ITEMS\' | translate }}</ion-item-divider>\n      <ion-list>\n        <ion-item *ngFor="let item of order.line_items">\n          <ion-row>{{item.name}}</ion-row>\n          <ion-row>\n            <span *ngFor="let meta of item.meta">\n              {{meta.label}}:{{meta.value}}&nbsp;\n            </span>\n          </ion-row>\n          <ion-row>\n            <ion-col>{{ \'Quantity\' | translate }}:{{item.quantity}}</ion-col>\n            <ion-col> {{ \'Total\' | translate }}:{{item.total}}</ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light">{{ \'Shipping_Address\' | translate }}</ion-item-divider>\n      <ion-item>\n        {{ \'First_Name\' | translate }}\n        <span item-right>{{order.shipping.first_name}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Last_Name\' | translate }}\n        <span item-right>{{order.shipping.last_name}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Country\' | translate }}\n        <span item-right>{{order.shipping.country}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Address1\' | translate }}\n        <span item-right>{{order.shipping.address_1}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Address2\' | translate }}\n        <span item-right>{{order.shipping.address_2}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Town_City\' | translate }}\n        <span item-right>{{order.shipping.city}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'State\' | translate }}\n        <span item-right>{{order.shipping.state}}</span>\n      </ion-item>\n      <ion-item>\n        {{ \'Zip_Code\' | translate }}\n        <span item-right>{{order.shipping.postcode}}</span>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\order-details\order-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], OrderDetailsPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Downloads page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var DownloadPage = (function () {
    function DownloadPage(navCtrl, modalCtrl, loadingCtrl, userService, translateService, wooService, platform) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.translateService = translateService;
        this.wooService = wooService;
        this.platform = platform;
    }
    DownloadPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.wooService.getAllDownloads(_this.userService.id).then(function (downloadList) {
                _this.downloadList = downloadList;
                console.log(_this.downloadList);
                _this.loadingModal.dismiss();
            }, function (reson) {
                _this.loadingModal.dismiss();
            });
        });
    };
    DownloadPage.prototype.openUrl = function (url) {
        this.platform.ready().then(function () {
            var browser = new __WEBPACK_IMPORTED_MODULE_5_ionic_native__["a" /* InAppBrowser */](url, '_blank', 'location=yes');
        });
    };
    return DownloadPage;
}());
DownloadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-download',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\download\download.html"*/'<!--\n  Generated template for the Downloads page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'MyDownloads\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-card *ngFor="let download of downloadList">\n    <ion-card-content>\n      <ion-card-title>\n        {{download.product_name}}\n      </ion-card-title>\n      {{download.downloads_remaining}}\n    </ion-card-content>\n    <ion-row>\n    <ion-col>\n      <button ion-button icon-left (click)="openUrl(download.file.file)">\n        Abrir revista\n      </button>\n    </ion-col>\n  </ion-row>\n  </ion-card>\n</ion-content>\n\n\n<!-- downloadList -> download_name download_url downloads_remaining product_id  product_name / file []-> file -->'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\download\download.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], DownloadPage);

//# sourceMappingURL=download.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AboutPage = (function () {
    function AboutPage(navCtrl, viewCtrl, appConfig) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appConfig = appConfig;
    }
    AboutPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\about\about.html"*/'<!--\n  Generated template for the About page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> {{ \'About\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="commonbg" text-center>\n  <div><img src="{{appConfig.Logo_Image}}"></div>\n  <p>{{appConfig.Introduction}}</p>\n  <p><b>{{ \'Address\' | translate }}</b><br>{{appConfig.Address1}}<br>{{appConfig.Address2}}</p>\n  <p>{{appConfig.CopyRight}}\n  </p>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ContactPage = (function () {
    function ContactPage(navCtrl, viewCtrl, appConfig) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appConfig = appConfig;
    }
    ContactPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\contact\contact.html"*/'<!--\n  Generated template for the Contact page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Contact_Us\' | translate }}</ion-title>\n     <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="commonbg" text-center>\n  <div><img src="{{appConfig.Logo_Image}}" class="logo-img"></div>\n  <h3>Hi!</h3>\n  <h4>We are ready to help you.</h4>\n  <p><b>Our service hour is</b><br> {{appConfig.Service_In_Weekdays}}<br>{{appConfig.Service_Weekend}}</p>\n  <p><a href="tel:{{appConfig.Service_Tel}}"><ion-icon name="call"></ion-icon></a></p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Faq page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FaqPage = (function () {
    function FaqPage(navCtrl, viewCtrl, appConfig) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appConfig = appConfig;
    }
    FaqPage.prototype.toggleGroup = function (num) {
        if (this.isGroupShown(num)) {
            this.showGroup = null;
        }
        else {
            this.showGroup = num;
        }
    };
    FaqPage.prototype.isGroupShown = function (num) {
        return this.showGroup == num;
    };
    FaqPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return FaqPage;
}());
FaqPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-faq',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\faq\faq.html"*/'<!--\n  Generated template for the Faq page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Faq\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="close()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-list>\n    <ion-item-group *ngFor="let question of appConfig.Question_Array;let i=index;" >\n      <ion-item-divider color="light" (click)="toggleGroup(i)">\n        <ion-icon [name]="!isGroupShown(i)?\'add\':\'remove\'"></ion-icon><span padding-left>{{question.Title}}</span>\n      </ion-item-divider>\n      <div padding-left padding-right [hidden]="!isGroupShown(i)">\n        <p>{{question.Content}}</p>\n      </div>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\faq\faq.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
], FaqPage);

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(551);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wishlist_wishlist__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_tab_cart_tab__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_address_address__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_category_category__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_listings_listings__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_details_product_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_country_country__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_search_search__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_checkout_checkout__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_order_list_order_list__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_order_details_order_details__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_about_about__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_thanks_thanks__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_stripe_pay_stripe_pay__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_attribute_attribute__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_download_download__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_country_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_sow_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_country_country__["a" /* CountryPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_listings_listings__["a" /* ListingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_details_product_details__["a" /* ProductDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_order_list_order_list__["a" /* OrderListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_download_download__["a" /* DownloadPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_thanks_thanks__["a" /* ThanksPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cart_tab_cart_tab__["a" /* CartTabPage */], __WEBPACK_IMPORTED_MODULE_29__pages_stripe_pay_stripe_pay__["a" /* StripePayPage */], __WEBPACK_IMPORTED_MODULE_30__pages_attribute_attribute__["a" /* AttributePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }),
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_country_country__["a" /* CountryPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_listings_listings__["a" /* ListingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_download_download__["a" /* DownloadPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_details_product_details__["a" /* ProductDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_order_list_order_list__["a" /* OrderListPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_order_details_order_details__["a" /* OrderDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__["a" /* FaqPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_thanks_thanks__["a" /* ThanksPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cart_tab_cart_tab__["a" /* CartTabPage */], __WEBPACK_IMPORTED_MODULE_29__pages_stripe_pay_stripe_pay__["a" /* StripePayPage */], __WEBPACK_IMPORTED_MODULE_30__pages_attribute_attribute__["a" /* AttributePage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_33__providers_woocommerce_service__["c" /* WoocommerceService */], __WEBPACK_IMPORTED_MODULE_32__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_34__providers_country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_35__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_36__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_37__providers_sow_service__["a" /* SowService */]]
    })
], AppModule);

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_tab_cart_tab__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tbar_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, tb, storage) {
        this.navCtrl = navCtrl;
        this.tb = tb;
        this.storage = storage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__cart_tab_cart_tab__["a" /* CartTabPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */];
        this.cartTabBage = 0;
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('oddwolves-cart').then(function (data) {
            if (data) {
                _this.cartTabBage = JSON.parse(data).length;
            }
        });
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" [class.hide_tab]="tb.hideBar" tabsPlacement="bottom" #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle=" {{ \'Tab_Home\' | translate }}" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle=" {{ \'Tab_Category\' | translate }}" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle=" {{ \'Tab_Wishlist\' | translate }}" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle=" {{ \'Tab_Cart\' | translate }}" tabIcon="cart" [tabBadge]="tb.cartBage>0?tb.cartBage:null" tabBadgeStyle="danger"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle=" {{ \'Tab_Profile\' | translate }}" tabIcon="person" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_tbar_service__["a" /* TbarService */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sow_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_faq_faq__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, menu, modalCtrl, appConfig, wooService, sowService, appCtrl, storage, userService, translate) {
        this.platform = platform;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.appConfig = appConfig;
        this.wooService = wooService;
        this.sowService = sowService;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        translate.setDefaultLang(this.appConfig.Shop_Language);
        translate.use(this.appConfig.Shop_Language);
        this.pages = [
            { title: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */] },
            { title: 'RegisterPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["h" /* StatusBar */].styleLightContent();
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["b" /* Keyboard */].hideKeyboardAccessoryBar(false);
            if (_this.appConfig.Onesignal_Enable == true) {
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["c" /* OneSignal */].startInit(_this.appConfig.OneSignal_AppID, _this.appConfig.GCM_SenderID);
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["c" /* OneSignal */].handleNotificationReceived().subscribe(function () {
                    // do something when notification is received
                });
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["c" /* OneSignal */].handleNotificationOpened().subscribe(function () {
                    // do something when a notification is opened
                });
                __WEBPACK_IMPORTED_MODULE_3_ionic_native__["c" /* OneSignal */].endInit();
            }
        });
        this.wooService.getStoreInfo().then(function (storeInfo) {
            _this.appConfig.Shop_Name = storeInfo.store.name;
            _this.appConfig.Shop_Currency = storeInfo.store.meta.currency;
            _this.appConfig.Shop_Currency_format = storeInfo.store.meta.currency_format;
        });
        this.sowService.getShippingMethod().then(function (data) {
            if (data && data.length > 0) {
                _this.appConfig.Shop_Shipping = data;
            }
        });
        this.storage.get('oddwolves-user-info').then(function (data) {
            if (data) {
                var userInfo = JSON.parse(data);
                _this.userService.id = userInfo.id;
                _this.userService.email = userInfo.email;
                _this.userService.first_name = userInfo.first_name;
                _this.userService.last_name = userInfo.last_name;
                _this.userService.name = userInfo.first_name + userInfo.last_name;
                _this.userService.username = userInfo.username;
                _this.userService.isAuthenticated = true;
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.modalContact = function () {
        this.menu.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    MyApp.prototype.modalFaq = function () {
        this.menu.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__pages_faq_faq__["a" /* FaqPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    MyApp.prototype.modalAbout = function () {
        this.menu.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    MyApp.prototype.dologin = function () {
        this.menu.close();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], {}, { showBackdrop: true, enableBackdropDismiss: true });
        modal.present();
    };
    MyApp.prototype.doRegister = function () {
        this.menu.close();
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */]).present();
    };
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */], 0);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\app\app.html"*/'<!-- <ion-menu [content]="content">\n  <ion-content class="outer-content" no-border-top>\n    <ion-list>\n      <ion-list-header>\n        Shop For {{appConfig.Shop_Name}}\n      </ion-list-header>\n      <ion-item menuClose (click)="goHome()">\n        <ion-icon name="ios-home-outline"></ion-icon>\n        Home\n      </ion-item>\n      <ion-item menuClose (click)="modalContact()">\n        <ion-icon name="ios-mail-outline"></ion-icon>\n        Contact Us\n      </ion-item>\n      <ion-item menuClose (click)="modalFaq()">\n        <ion-icon name="ios-information-circle-outline"></ion-icon>\n        FAQ\n      </ion-item>\n      <ion-item menuClose (click)="modalAbout()">\n        <ion-icon name="ios-globe-outline"></ion-icon>\n        About\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu> -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */],
        __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_sow_service__["a" /* SowService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sow_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_crypto_js__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginPage = (function () {
    function LoginPage(navCtrl, viewCtrl, userService, wooService, appConfig, alertCtrl, loadingCtrl, sowService, storage, translateService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.userService = userService;
        this.wooService = wooService;
        this.appConfig = appConfig;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sowService = sowService;
        this.storage = storage;
        this.translateService = translateService;
    }
    LoginPage.prototype.doRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK', 'Sign_In_Failed', 'Sign_In_No_Email', 'Sign_In_Email_Error', 'No_Email_Or_Password']).subscribe(function (value) {
            var loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            if (_this.appConfig.Eanble_Login_With_Password) {
                if (_this.email == null || _this.password == null || _this.email.trim().length == 0) {
                    _this.alertCtrl.create({
                        title: value['Notice'],
                        message: value['No_Email_Or_Password'],
                        buttons: [value['OK']]
                    }).present();
                    return;
                }
                loadingModal.present();
                var password = _this.password;
                if (_this.appConfig.App_Secret != '') {
                    var key = __WEBPACK_IMPORTED_MODULE_8_crypto_js___default.a.enc.Utf8.parse(__WEBPACK_IMPORTED_MODULE_8_crypto_js___default.a.MD5(_this.appConfig.App_Secret).toString());
                    var iv = __WEBPACK_IMPORTED_MODULE_8_crypto_js___default.a.enc.Utf8.parse(__WEBPACK_IMPORTED_MODULE_8_crypto_js___default.a.MD5(_this.appConfig.App_Secret).toString().substr(0, 16));
                    password = __WEBPACK_IMPORTED_MODULE_8_crypto_js___default.a.AES.encrypt(password, key, { iv: iv }).toString();
                }
                _this.sowService.login({ email: _this.email, password: encodeURIComponent(password) }).then(function (data) {
                    if (data && data != 'error') {
                        _this.userService.id = data.id;
                        _this.userService.email = data.email;
                        _this.userService.first_name = data.first_name;
                        _this.userService.last_name = data.last_name;
                        _this.userService.name = data.first_name + data.last_name;
                        _this.userService.username = data.username;
                        _this.userService.isAuthenticated = true;
                        _this.storage.set('oddwolves-user-info', JSON.stringify(data));
                        loadingModal.dismiss();
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        loadingModal.dismiss();
                        _this.alertCtrl.create({
                            title: value['Notice'],
                            message: value['Sign_In_Failed'],
                            buttons: [value['OK']]
                        }).present();
                    }
                }, function (reson) {
                    loadingModal.dismiss();
                    _this.errorModal.present();
                });
            }
            else {
                if (_this.email == null || _this.email.trim().length == 0) {
                    _this.alertCtrl.create({
                        title: value['Notice'],
                        message: value['Sign_In_No_Email'],
                        buttons: [value['OK']]
                    }).present();
                    return;
                }
                loadingModal.present();
                _this.wooService.getCustomerByEmail({ email: _this.email }).then(function (data) {
                    if (data.length > 0 && data[0] && data[0].id > 0) {
                        _this.userService.id = data[0].id;
                        _this.userService.email = data[0].email;
                        _this.userService.first_name = data[0].first_name;
                        _this.userService.last_name = data[0].last_name;
                        _this.userService.name = data[0].first_name + data[0].last_name;
                        _this.userService.username = data[0].username;
                        _this.userService.isAuthenticated = true;
                        loadingModal.dismiss();
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        loadingModal.dismiss();
                        _this.alertCtrl.create({
                            title: value['Notice'],
                            message: value['Sign_In_Email_Error'],
                            buttons: [value['OK']]
                        }).present();
                    }
                }, function (reson) {
                    loadingModal.dismiss();
                    _this.errorModal.present();
                });
            }
        });
    };
    LoginPage.prototype.doClose = function () {
        this.viewCtrl.dismiss();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\login\login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="login">\n  <ion-grid class="header">\n    <ion-row>\n      <ion-col col-10>\n        <p (click)="doClose()">{{ \'Login_Skip\' | translate }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <img src="{{appConfig.Logo_Image}}" class="logo-img">\n    </ion-row>\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-mail-outline"></ion-icon>\n        </ion-label>\n        <ion-input type="text" placeholder="Email o usuario" [(ngModel)]="email" type="text"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="appConfig.Eanble_Login_With_Password">\n        <ion-label>\n          <ion-icon name="ios-lock-outline"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-row>\n      <button ion-button full (click)="doLogin()">{{ \'Sign_In\' | translate }}</button>\n    </ion-row>\n    <ion-row margin-top>\n      <button ion-button full color="twitter" (click)="doRegister()">{{ \'Sign_Up\' | translate }}</button>\n    </ion-row>\n    <ion-row>\n      <ion-col col-10 id="login-box">\n        <form>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_service__["c" /* WoocommerceService */],
        __WEBPACK_IMPORTED_MODULE_6__app_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_sow_service__["a" /* SowService */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 425,
	"./af.js": 425,
	"./ar": 426,
	"./ar-dz": 427,
	"./ar-dz.js": 427,
	"./ar-ly": 428,
	"./ar-ly.js": 428,
	"./ar-ma": 429,
	"./ar-ma.js": 429,
	"./ar-sa": 430,
	"./ar-sa.js": 430,
	"./ar-tn": 431,
	"./ar-tn.js": 431,
	"./ar.js": 426,
	"./az": 432,
	"./az.js": 432,
	"./be": 433,
	"./be.js": 433,
	"./bg": 434,
	"./bg.js": 434,
	"./bn": 435,
	"./bn.js": 435,
	"./bo": 436,
	"./bo.js": 436,
	"./br": 437,
	"./br.js": 437,
	"./bs": 438,
	"./bs.js": 438,
	"./ca": 439,
	"./ca.js": 439,
	"./cs": 440,
	"./cs.js": 440,
	"./cv": 441,
	"./cv.js": 441,
	"./cy": 442,
	"./cy.js": 442,
	"./da": 443,
	"./da.js": 443,
	"./de": 444,
	"./de-at": 445,
	"./de-at.js": 445,
	"./de.js": 444,
	"./dv": 446,
	"./dv.js": 446,
	"./el": 447,
	"./el.js": 447,
	"./en-au": 448,
	"./en-au.js": 448,
	"./en-ca": 449,
	"./en-ca.js": 449,
	"./en-gb": 450,
	"./en-gb.js": 450,
	"./en-ie": 451,
	"./en-ie.js": 451,
	"./en-nz": 452,
	"./en-nz.js": 452,
	"./eo": 453,
	"./eo.js": 453,
	"./es": 454,
	"./es-do": 455,
	"./es-do.js": 455,
	"./es.js": 454,
	"./et": 456,
	"./et.js": 456,
	"./eu": 457,
	"./eu.js": 457,
	"./fa": 458,
	"./fa.js": 458,
	"./fi": 459,
	"./fi.js": 459,
	"./fo": 460,
	"./fo.js": 460,
	"./fr": 461,
	"./fr-ca": 462,
	"./fr-ca.js": 462,
	"./fr-ch": 463,
	"./fr-ch.js": 463,
	"./fr.js": 461,
	"./fy": 464,
	"./fy.js": 464,
	"./gd": 465,
	"./gd.js": 465,
	"./gl": 466,
	"./gl.js": 466,
	"./he": 467,
	"./he.js": 467,
	"./hi": 468,
	"./hi.js": 468,
	"./hr": 469,
	"./hr.js": 469,
	"./hu": 470,
	"./hu.js": 470,
	"./hy-am": 471,
	"./hy-am.js": 471,
	"./id": 472,
	"./id.js": 472,
	"./is": 473,
	"./is.js": 473,
	"./it": 474,
	"./it.js": 474,
	"./ja": 475,
	"./ja.js": 475,
	"./jv": 476,
	"./jv.js": 476,
	"./ka": 477,
	"./ka.js": 477,
	"./kk": 478,
	"./kk.js": 478,
	"./km": 479,
	"./km.js": 479,
	"./ko": 480,
	"./ko.js": 480,
	"./ky": 481,
	"./ky.js": 481,
	"./lb": 482,
	"./lb.js": 482,
	"./lo": 483,
	"./lo.js": 483,
	"./lt": 484,
	"./lt.js": 484,
	"./lv": 485,
	"./lv.js": 485,
	"./me": 486,
	"./me.js": 486,
	"./mi": 487,
	"./mi.js": 487,
	"./mk": 488,
	"./mk.js": 488,
	"./ml": 489,
	"./ml.js": 489,
	"./mr": 490,
	"./mr.js": 490,
	"./ms": 491,
	"./ms-my": 492,
	"./ms-my.js": 492,
	"./ms.js": 491,
	"./my": 493,
	"./my.js": 493,
	"./nb": 494,
	"./nb.js": 494,
	"./ne": 495,
	"./ne.js": 495,
	"./nl": 496,
	"./nl-be": 497,
	"./nl-be.js": 497,
	"./nl.js": 496,
	"./nn": 498,
	"./nn.js": 498,
	"./pa-in": 499,
	"./pa-in.js": 499,
	"./pl": 500,
	"./pl.js": 500,
	"./pt": 501,
	"./pt-br": 502,
	"./pt-br.js": 502,
	"./pt.js": 501,
	"./ro": 503,
	"./ro.js": 503,
	"./ru": 504,
	"./ru.js": 504,
	"./se": 505,
	"./se.js": 505,
	"./si": 506,
	"./si.js": 506,
	"./sk": 507,
	"./sk.js": 507,
	"./sl": 508,
	"./sl.js": 508,
	"./sq": 509,
	"./sq.js": 509,
	"./sr": 510,
	"./sr-cyrl": 511,
	"./sr-cyrl.js": 511,
	"./sr.js": 510,
	"./ss": 512,
	"./ss.js": 512,
	"./sv": 513,
	"./sv.js": 513,
	"./sw": 514,
	"./sw.js": 514,
	"./ta": 515,
	"./ta.js": 515,
	"./te": 516,
	"./te.js": 516,
	"./tet": 517,
	"./tet.js": 517,
	"./th": 518,
	"./th.js": 518,
	"./tl-ph": 519,
	"./tl-ph.js": 519,
	"./tlh": 520,
	"./tlh.js": 520,
	"./tr": 521,
	"./tr.js": 521,
	"./tzl": 522,
	"./tzl.js": 522,
	"./tzm": 523,
	"./tzm-latn": 524,
	"./tzm-latn.js": 524,
	"./tzm.js": 523,
	"./uk": 525,
	"./uk.js": 525,
	"./uz": 526,
	"./uz.js": 526,
	"./vi": 527,
	"./vi.js": 527,
	"./x-pseudo": 528,
	"./x-pseudo.js": 528,
	"./yo": 529,
	"./yo.js": 529,
	"./zh-cn": 530,
	"./zh-cn.js": 530,
	"./zh-hk": 531,
	"./zh-hk.js": 531,
	"./zh-tw": 532,
	"./zh-tw.js": 532
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 876;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the SowService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var SowService = (function () {
    function SowService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
    }
    SowService.prototype.login = function (params) {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/sow/v1/user_login/";
        url = this.initUrl(url, params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        return new Promise(function (resolve, reject) {
            service.http.get(url, { headers: headers }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    SowService.prototype.getShippingMethod = function () {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/sow/v1/shipping_method/";
        url = this.initUrl(url, '');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        return new Promise(function (resolve, reject) {
            service.http.get(url, { headers: headers }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    SowService.prototype.getHomeSlider = function () {
        var service = this;
        var url = service.appConfig.Shop_URL + "/wp-json/sow/v1/home_slider/";
        url = this.initUrl(url, '');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'text/plain');
        return new Promise(function (resolve, reject) {
            service.http.get(url, { headers: headers }).catch(function (err) {
                reject('error');
                return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(err);
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    service.cachedData = data;
                    resolve(service.cachedData);
                }
                else {
                    reject();
                }
            });
        });
    };
    SowService.prototype.initUrl = function (url, params) {
        if (params) {
            var keys = Object.keys(params);
            for (var i = 0; i < keys.length; i++) {
                if (i == 0) {
                    url += "?" + keys[i] + '=' + params[keys[i]];
                }
                else {
                    url += '&' + keys[i] + '=' + params[keys[i]];
                }
            }
        }
        return url;
    };
    return SowService;
}());
SowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* AppConfig */]])
], SowService);

//# sourceMappingURL=sow-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AddressPage = (function () {
    function AddressPage(navCtrl, storage, modalCtrl, loadingCtrl, userService, translateService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.translateService = translateService;
        this.shippingAddress = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            country: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: ''
        };
        this.billingAddress = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            country: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            zip: ''
        };
        this.sameAddress = true;
    }
    AddressPage.prototype.selectCountry = function (type) {
        var _this = this;
        var countryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__country_country__["a" /* CountryPage */], {
            'country': type == 'shipping' ? this.shippingAddress.country : this.billingAddress.country,
            'forwhich': type
        });
        countryModal.onDidDismiss(function (data) {
            if (data.forwhich == 'shipping') {
                _this.shippingAddress.country = data.country;
            }
        });
        countryModal.present();
    };
    AddressPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translateService.get(['Loading']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                content: value['Loading']
            });
            _this.loadingModal.present();
            _this.storage.get('oddwolves-user-shipping-address').then(function (data) {
                if (data) {
                    _this.shippingAddress = JSON.parse(data);
                }
                else {
                    _this.shippingAddress.email = _this.userService.email;
                }
            }).then(function () {
                _this.storage.get('oddwolves-user-billing-address').then(function (data) {
                    if (data) {
                        _this.billingAddress = JSON.parse(data);
                    }
                    else {
                        _this.billingAddress.email = _this.userService.email;
                    }
                    _this.loadingModal.dismiss();
                });
            });
        });
    };
    AddressPage.prototype.saveAddress = function () {
        var _this = this;
        this.translateService.get(['Address_Saved']).subscribe(function (value) {
            _this.loadingModal = _this.loadingCtrl.create({
                spinner: 'hide',
                content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Address_Saved'] + '</div>'
            });
            _this.loadingModal.present();
            _this.storage.set('oddwolves-user-shipping-address', JSON.stringify(_this.shippingAddress));
            if (_this.sameAddress) {
                _this.storage.set('oddwolves-user-billing-address', JSON.stringify(_this.shippingAddress));
            }
            else {
                _this.storage.set('oddwolves-user-billing-address', JSON.stringify(_this.billingAddress));
            }
            setTimeout(function () {
                _this.loadingModal.dismiss();
                _this.navCtrl.pop();
            }, 2000);
        });
    };
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\address\address.html"*/'<!--\n  Generated template for the Address page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Adderss\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="commonbg">\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color="light">{{ \'Shipping_Address\' | translate }}</ion-item-divider>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'First_Name\' | translate }}" [(ngModel)]="shippingAddress.first_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Last_Name\' | translate }}" [(ngModel)]="shippingAddress.last_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="email" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="shippingAddress.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="phone" placeholder="{{ \'Phone\' | translate }}" [(ngModel)]="shippingAddress.phone"></ion-input>\n      </ion-item>\n      <ion-item (click)="selectCountry(\'shipping\')">\n        <ion-label>{{shippingAddress.country==\'\'?(\'Select_Country\'| translate):shippingAddress.country}}</ion-label>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address1\' | translate }}" [(ngModel)]="shippingAddress.address_1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address2\' | translate }}" [(ngModel)]="shippingAddress.address_2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Town_City\' | translate }}" [(ngModel)]="shippingAddress.city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" [(ngModel)]="shippingAddress.state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Zip_Code\' | translate }}" [(ngModel)]="shippingAddress.zip"></ion-input>\n      </ion-item>\n    </ion-item-group>\n     <ion-item-divider color="light">\n       <ion-label>{{ \'Billing_Address_Same_as_Shipping\' | translate }}</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="sameAddress" item-right ></ion-checkbox>\n      </ion-item-divider>\n    <ion-item-group *ngIf="!sameAddress" >\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'First_Name\' | translate }}" [(ngModel)]="billingAddress.first_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Last_Name\' | translate }}" [(ngModel)]="billingAddress.last_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="email" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="billingAddress.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="phone" placeholder="{{ \'Phone\' | translate }}" [(ngModel)]="billingAddress.phone"></ion-input>\n      </ion-item>\n      <ion-item (click)="selectCountry(\'billing\')">\n        <ion-label>{{billingAddress.country==\'\'?(\'Select_Country\'| translate) :billingAddress.country}}</ion-label>\n        <ion-icon name="arrow-forward" item-right></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address1\' | translate }}" [(ngModel)]="billingAddress.address_1"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Address2\' | translate }}" [(ngModel)]="billingAddress.address_2"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Town_City\' | translate }}" [(ngModel)]="billingAddress.city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" [(ngModel)]="billingAddress.state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Zip_Code\' | translate }}" [(ngModel)]="billingAddress.zip"></ion-input>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n<ion-footer text-center><button class="save-button" ion-button color="primary" round (click)="saveAddress()">{{ \'Save\' | translate }}</button></ion-footer>\n'/*ion-inline-end:"C:\Users\yo\Desktop\Gallinas\chickensApp\src\pages\address\address.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ })

},[546]);
//# sourceMappingURL=main.js.map