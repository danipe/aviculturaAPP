import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AppConfig } from '../app/app-config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import CryptoJS from 'crypto-js';
import { Storage } from '@ionic/storage';
/*
  Generated class for the WoocommerceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WoocommerceService {
  cachedData: any;
  products: any;
  cart: Array<any>;
  constructor(public appConfig: AppConfig, public http: Http, public storage: Storage) {
    this.storage.get('virtual-cart').then(cart => {
      this.cart = cart;
    });
  }

  getStoreInfo() {
    var service = this;
    return new Promise(function (resolve, reject) {
      service.http.get(service.appConfig.Shop_URL + '/wc-api/v1/').map(res => res.json()).catch(err => {
        reject('error');
        return Observable.throw(err);
      })
        // .timeout(3000, new Error('timeout exceeded'))
        .subscribe(data => {
          if (data) {
            service.cachedData = data;
            resolve(service.cachedData);
          }
          else {
            reject();
          }
        }, error => {
          reject('error');
        })
    });
  }

  getProducts(params): Promise<any> {
    var service = this;
    var url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products";
    url = this.initUrl(url, params);

    return new Promise( (resolve, reject) => {
      service.http.get(service.initRequest(url, 'get'))
        .catch(err => {
          reject('error');

          return Observable.throw(err);
        })
        .map(res => res.json())
        .subscribe(data => {
          if (data) {
            service.cachedData = data;
            this.products = data;
            resolve(service.cachedData);
          }
          else {
            reject('error');
          }
        }
        , (error) => { reject('error'); }
        );
    });
  }

  getSingleProduct(id) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products/" + id;
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  getAllDownloads(id) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v2/customers/"+id+"/downloads";
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  getStoreCategories(params) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/products/categories";
    url = this.initUrl(url, params);
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  createOrder(params, data) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wc-api/v3/orders";
    url = this.initUrl(url, params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(function (resolve, reject) {
      service.http.post(service.initRequest(url, 'post'), data,{headers:headers}).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }


  createCustomer(params, data) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wc-api/v3/customers";
    url = this.initUrl(url, params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(function (resolve, reject) {
      service.http.post(service.initRequest(url, 'post'), data,{headers:headers}).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  getCustomerByEmail(params) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/customers/";
    url = this.initUrl(url, params);
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  getOrderList(params) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/";
    url = this.initUrl(url, params);
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  getOrder(id) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/" + id;
    url = this.initUrl(url, '');
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  updateOrderStatus(id, status) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v1/orders/" + id;
    url = this.initUrl(url, '');
    return new Promise(function (resolve, reject) {
      service.http.post(service.initRequest(url, 'post'), { 'status': status }).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  initUrl(url, params) {
    if (params) {
      var keys = Object.keys(params);

      for (var i = 0; i < keys.length; i++) {
        if (i == 0) {
          url += "?" + keys[i] + '=' + params[keys[i]];
        } else {
          url += '&' + keys[i] + '=' + params[keys[i]];
        }
      }
    }
    return url;
  }

  getCustomerDownloads(id) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/wc/v2/customers/" + id + "/downloads";
    url = this.initUrl(url, '');
    return new Promise(function (resolve, reject) {
      service.http.get(service.initRequest(url, 'get')).catch(err => {
        reject('error');
        return Observable.throw(err);
      }).map(res => res.json()).subscribe(data => {
        if (data) {
          service.cachedData = data;
          resolve(service.cachedData);
        }
        else {
          reject();
        }
      });
    });
  }

  initRequest(url: string, method) {
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
      let initParams: any = {};
      let retParams: any = {};
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
  }

  isSSL(str) {
    var tarea = str;
    var tarea_regex = /^(https)/;
    if (tarea_regex.test(String(tarea).toLowerCase()) == true) {
      return true;
    }
    return false;
  }

  getNonce() {
    var word_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';

    for (var i = 0; i < this.appConfig.Shop_Nonce_Length; i++) {
      result += word_characters[parseInt(String(Math.random() * word_characters.length), 10)];
    }

    return result;
  }

  getTimeStamp() {
    return parseInt(String(new Date().getTime() / 1000), 10);
  }

  randomJsonpName() {
    var str;
    str = new Date().getTime() + Math.round(Math.random() * 1000000);
    return str;
  };

  authorize(request) {
    if (!request.data) {
      request.data = {};
    }
    let oauth_signature = this.getSignature(request);
    return oauth_signature;
  }

  hash(base_string, key) {
    switch (this.appConfig.Shop_Signature_Method) {
      case 'HMAC-SHA1':
        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
      case 'HMAC-SHA256':
        return CryptoJS.HmacSHA256(base_string, key).toString(CryptoJS.enc.Base64);
    }
  }

  getSignature(request) {
    return this.hash(this.getBaseString(request), this.percentEncode(this.appConfig.Shop_ConsumerSecret) + '&');
  }

  getBaseString(request) {
    return request.method.toUpperCase() + '&' + this.percentEncode(this.getBaseUrl(request.url)) + '&' + this.percentEncode(this.getParameterString(request));
  }

  getParameterString(request) {
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
      } else {
        data_str += key + '=' + value + '&';
      }
    }

    data_str = data_str.substr(0, data_str.length - 1);

    return data_str;
  }

  mergeObject(obj1, obj2) {
    var merged_obj = obj1;
    for (var key in obj2) {
      merged_obj[key] = obj2[key];
    }
    return merged_obj;
  }

  deParam(param) {
    var arr = param.split('&');
    var data = {};

    for (var i = 0; i < arr.length; i++) {
      var item = arr[i].split('=');
      data[item[0]] = decodeURIComponent(item[1]);
    }
    return data;
  }

  deParamUrl(url) {
    var tmp = url.split('?');

    if (tmp.length === 1)
      return {};

    return this.deParam(tmp[1]);
  }

  percentEncodeData(data) {
    var result = {};

    for (var key in data) {
      var value = data[key];
      if (value && Array.isArray(value)) {
        var newValue = [];
        value.forEach((function (val) {
          newValue.push(this.percentEncode(val));
        }).bind(this));
        value = newValue;
      } else {
        value = this.percentEncode(value);
      }
      result[this.percentEncode(key)] = value;
    }

    return result;
  }

  getBaseUrl(url) {
    return url.split('?')[0];
  }

  percentEncode(str) {
    return encodeURIComponent(str)
      .replace(/\!/g, "%21")
      .replace(/\*/g, "%2A")
      .replace(/\'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      ;
  }

  sortObject(data) {
    var keys = Object.keys(data);
    var result = {};

    keys.sort();

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      result[key] = data[key];
    }

    return result;
  }

}

export class CartProduct {
  public product_id: number;
  public name: string;
  public price: number;
  public quantity: number;
  public variation_id: number;
  public variations:any;
  public variation_name: string;
  public thumb: string;

  constructor() {
    this.name = '';
    this.price = 0;
    this.product_id = 0;
    this.quantity =0;
    this.variation_id = 0;
    this.variation_name = '';
    this.thumb = '';
  }
}

export class WishlistProduct {
  public product_id: number;
  public price: number;
  public product_image: string;
}

export class Cart {
  public CartProductArray: Array<CartProduct>;
  public total: number;
  public totalShip: number;
}
