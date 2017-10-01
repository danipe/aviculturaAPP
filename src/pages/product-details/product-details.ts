import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController, PopoverController, ModalController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { WoocommerceService, CartProduct, WishlistProduct } from '../../providers/woocommerce-service';
import { TbarService } from '../../providers/tbar-service';
import { Storage } from '@ionic/storage';
import { AppConfig } from '../../app/app-config';
import { SocialSharing } from 'ionic-native';
import { AttributePage } from '../attribute/attribute';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the ProductDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})

export class ProductDetailsPage {
  @ViewChild('currencyFormat') currencySymbol: ElementRef;
  product: any;
  loadingModal: any;
  selVariation: any;
  mySlideOptions: any;
  hasVariation: boolean = false;
  inCart: boolean = false;
  slideImages: Array<any>;
  variationImg: string;
  show = true;
  errorModal: any;
  cartProductNumber = 0;
  isFav = false;
  value: any;
  org: string;
  attrArray: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public wooService: WoocommerceService, public loadingCtrl: LoadingController,
    public tbarService: TbarService, public storage: Storage, public alertCtrl: AlertController, public appConfig: AppConfig, public viewCtrl: ViewController,
    public popoverCtrl: PopoverController, public modalCtrl: ModalController, public translateService: TranslateService) {
    if (this.navParams.get('org') == 'carttab') {
      this.tbarService.hideBar = false;
    } else {
      this.tbarService.hideBar = true;
    }

    this.selVariation = null;
    this.slideImages = new Array<any>();
    this.mySlideOptions = {
      pager: true,
      loop: true,
      autoplay: 2000
    };
  }

  checkCart() {
    // console.log(this.wooService.cart);
    // console.log(this.product);
    // console.log(this.wooService.cart);
    if(this.wooService.cart && this.wooService.cart != null){
      this.inCart = this.wooService.cart.find((product) => {
        // console.log(product);
        // console.log(this.product);
        if(product.id == this.product.id) {
          // if(this.product.attributes && this.product.attributes.option && product.attributes.option == this.product.attributes.option) {
          //   return true;
          // } else {
          //   return false;
          // } 
          return false;
        } else {
          return false;
        }
      }) ? false : false;
      // console.log(this.inCart);
    }
  }


  ionViewWillEnter() {
    this.org = this.navParams.get('org');
    this.storage.get('oddwolves-cart').then((data) => {
      if (data) {
        this.cartProductNumber = JSON.parse(data).length;
      }
    });
  }

  ionViewDidLoad() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.value = value;
      this.loadingModal.present();
      // this.wooService.getSingleProduct(this.navParams.get('product')).then((product: any) => {
      //   this.product = product;
      //   this.attrArray = product.attributes;
      //   this.slideImages = this.product.images;
      //   if (this.product.variations.length > 0) {
      //     this.hasVariation = true;
      //   }
      this.product = this.navParams.get('product');
      // console.log(this.product);
      this.checkCart();

      if(this.product.attributes.length > 0){
        this.attrArray = this.product.attributes;
      }
      this.slideImages = this.product.images;
      if (this.product.variations.length > 0) {
        this.hasVariation = true;
      }
      //Check if it is a pack
      if(this.product.bundled_items.length > 0){
        for (var i = 0; i < this.product.bundled_items.length; ++i) {
          if(!this.product.bundled_items[i].name){
            this.product.bundled_items[i] = this.wooService.products.find(p => p.id == this.product.bundled_items[i].product_id);

          }
        }
        // console.log(this.product);
      }
      this.storage.get('oddwolves-wishlist').then((data) => {
        if (data) {
          var wishlistArray = JSON.parse(data);
          var findIndex = wishlistArray.findIndex((element) => {
            return element.product_id == this.product.id;
          });
          if (findIndex != -1) {
            this.isFav = true;
          }
        }
      });

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

  addToCartArray() {
    this.checkCart();
    if(!this.inCart) {
      // console.log('deberia meter un id al array')
      this.addCartClip();
      this.wooService.cart.push(this.product);
      this.storage.set('virtual-cart', JSON.stringify(this.wooService.cart));
      this.inCart=true;
    } else {
      this.alertCtrl.create({
          title: 'Atención',
          message: 'Ya has añadido este producto a la cesta',
          buttons: ['OK']
        }).present();
    } 
    
  }

  addCartClip() {
    // console.log('pedazo de click que le he metido');
    //Comprobamos que el producto no ha sido añadido a la lista
    // this.addToCartArray();
    this.translateService.get(['Notice', 'Product_added_successfully', 'Please_select_variation', 'OK']).subscribe(value => {
      this.selVariation = this.getSelectedVariation();
      if ((this.selVariation != null || this.hasVariation == false) && !this.inCart) {
        this.loadingModal = this.loadingCtrl.create({
          spinner: 'hide',
          content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Product_added_successfully'] + '</div>'
        });
        this.loadingModal.present();
        var cartArray: Array<CartProduct> = new Array<CartProduct>();
        this.storage.get('oddwolves-cart').then((data) => {
          if (data) {
            cartArray = JSON.parse(data);
            if (this.hasVariation == true) {
              var findIndex = cartArray.findIndex((element) => {
                return element.product_id == this.product.id && element.variation_id == this.selVariation.id
              });

              if (findIndex != -1) {
                cartArray[findIndex].quantity++;
              }
              else {
                cartArray.push(this.createNewProduct());
                // this.wooService.cart.push(this.createNewProduct());
              }
              this.storage.set('oddwolves-cart', JSON.stringify(cartArray));
            } else {
              var findIndex = cartArray.findIndex((element) => {
                return element.product_id == this.product.id
              });
              if (findIndex != -1) {
                cartArray[findIndex].quantity++;
              }
              else {
                cartArray.push(this.createNewProduct());
                // this.wooService.cart.push(this.createNewProduct());
              }
              this.storage.set('oddwolves-cart', JSON.stringify(cartArray));

            }
          } else {
            cartArray.push(this.createNewProduct());
            // this.wooService.cart.push(this.createNewProduct());
            this.storage.set('oddwolves-cart', JSON.stringify(cartArray));
          }

          this.tbarService.cartBage = cartArray.length;
          this.cartProductNumber = cartArray.length;
        });

        setTimeout(() => {
          this.loadingModal.dismiss();
        }, 2000);
      } else {
        this.alertCtrl.create({
          title: value['Notice'],
          message: value['Please_select_variation'],
          buttons: [value['OK']]
        }).present();
      }
    });
    // console.log(this.wooService.cart);
  }

  createNewProduct() {
    var newProduct = new CartProduct();
    newProduct.product_id = this.product.id;
    newProduct.name = this.product.name;
    newProduct.quantity = 1;
    if (this.selVariation != null) {
      newProduct.variation_id = this.selVariation.id;
      newProduct.price = this.selVariation.price;
      if (this.selVariation.image && this.selVariation.image[0]) {
        newProduct.thumb = this.selVariation.image[0].src;
      } else {
        newProduct.thumb = this.product.images[0].src;
      }
      var temp_variation = '';
      this.selVariation.attributes.forEach(attr => {
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
  }

  goToCart() {
    if (this.navParams.get('org') == "carttab") {
      this.viewCtrl.dismiss();
    }
    else {
      this.navCtrl.push(CartPage);
    }
  }

  addWishlist() {
    this.translateService.get(['Removed_from_wishlist', 'Added_to_wishlist']).subscribe(value => {
      if (this.isFav == true) {
        this.storage.get('oddwolves-wishlist').then((data) => {
          if (data) {
            var wishlistArray: Array<WishlistProduct> = JSON.parse(data);
            var findIndex = wishlistArray.findIndex((element) => {
              return element.product_id == this.product.id;
            });
            if (findIndex != -1) {
              wishlistArray.splice(findIndex, 1);
              this.storage.set('oddwolves-wishlist', JSON.stringify(wishlistArray));
              var wishlistModal = this.loadingCtrl.create({
                spinner: 'hide',
                content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div>' + value['Removed_from_wishlist'] + '</div>'
              });
              wishlistModal.present();
              setTimeout(() => {
                wishlistModal.dismiss();
              }, 2000);
            }
          }
        });
        this.isFav = false;
      }
      else {
        this.storage.get('oddwolves-wishlist').then((data) => {
          var wishlistArray: Array<WishlistProduct> = new Array<WishlistProduct>();
          if (data) {
            wishlistArray = JSON.parse(data);
          }
          var wishlistModal = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<div class="addcart-info"><img src="assets/img/fill.png"/></div><div></div><div>' + value['Added_to_wishlist'] + '</div>'
          });
          wishlistModal.present();
          var wp = new WishlistProduct();
          wp.price = this.product.price;
          wp.product_id = this.product.id;
          wp.product_image = this.product.images[0].src;
          wishlistArray.push(wp);
          this.storage.set('oddwolves-wishlist', JSON.stringify(wishlistArray));
          setTimeout(() => {
            wishlistModal.dismiss();
          }, 2000);
        });
        this.isFav = true;
      }
    });

  }


  share() {
    this.translateService.get(['Notice', 'Loading', 'NetWork_Error', 'OK', 'Share_Success', 'Share_Fail']).subscribe(value => {
      this.loadingModal = this.loadingCtrl.create({
        content: value['Loading']
      });
      this.loadingModal.present();

      SocialSharing.share("Mira la revista tan genial de Avicultura de raza:  " + this.product.name + " por solo " + this.product.price + this.currencySymbol.nativeElement.innerHTML + ", para más detalles click en el link.",
        this.product.name, null, this.product.permalink).then(() => {
          this.loadingModal.dismiss();
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Share_Success'],
            buttons: [value['OK']]
          }).present();
        }).catch(() => {
          this.loadingModal.dismiss();
          this.alertCtrl.create({
            title: value['Notice'],
            message: value['Share_Fail'],
            buttons: [value['OK']]
          }).present();
        });
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  attributeSelected(item) {
    var changeAttrOption = (<Array<any>>this.product.attributes).find((value) => {
      return value.name == item.name;
    });
    if (changeAttrOption) {
      let popover = this.popoverCtrl.create(AttributePage, {
        'options': item.options,
        'attr': item.name,
        'option': changeAttrOption ? (changeAttrOption.option ? changeAttrOption.option : '') : ''
      });
      popover.onDidDismiss((data) => {
        if (data) {
          (<Array<any>>this.product.attributes).forEach(element => {
            if (element.name == data.attr) {
              element.option = data.option;
              return;
            }
          });
          this.getSelectedVariation();
        }
      });
      popover.present();
    }
  }

  getSelectedOption(attr) {
    var changeAttrOption = (<Array<any>>this.product.attributes).find((value) => {
      return value.name == attr;
    });
    return changeAttrOption ? (changeAttrOption.option ? changeAttrOption.option : '') : '';
  }

  viewProduct(product) {
    if(product.catalog_visibility!="hidden") {
      this.navCtrl.push(ProductDetailsPage, { product: product });
    }
    
  }

  getSelectedVariation() {
    var allSelected = true;
    (<Array<any>>this.product.attributes).forEach(element => {
      if (!element.option) {
        allSelected = false;
        return;
      }
    });

    if (!allSelected) {
      this.selVariation = null;
    }

    var selectedVariation = (<Array<any>>this.product.variations).find((value) => {
      var variation_attr_array = value.attributes;
      var len = (<Array<any>>variation_attr_array).length;
      var same = true;
      for (var i = 0; i < len; i++) {
        if ((<Array<any>>variation_attr_array)[i].option != (<Array<any>>this.product.attributes)[i].option) {
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
  }
}
