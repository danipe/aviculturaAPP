import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailsPage } from '../../pages/product-details/product-details';
/**
 * Generated class for the ProductCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'product-card',
  templateUrl: 'product-card.html'
})
export class ProductCardComponent {


  @Input() product: any;


  constructor(private navCtrl: NavController) {
  }

  viewProduct(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }

}
