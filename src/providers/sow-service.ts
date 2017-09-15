import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { AppConfig } from '../app/app-config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SowService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SowService {
  cachedData: any;
  constructor(public http: Http, public appConfig: AppConfig) {
    
  }

  login(params) {
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/sow/v1/user_login/";
    url = this.initUrl(url, params);
     var headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    return new Promise(function (resolve, reject) {
      service.http.get(url, { headers: headers }).catch(err => {
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

  getShippingMethod(){
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/sow/v1/shipping_method/";
    url = this.initUrl(url,'');
     var headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    return new Promise(function (resolve, reject) {
      service.http.get(url, { headers: headers }).catch(err => {
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

    getPacks(){
      var service = this;
      let url = service.appConfig.Shop_URL + "/wp-json/sow/v1/getPacks/";
      url = this.initUrl(url,'');
       var headers = new Headers();
      headers.append('Content-Type', 'text/plain');
      return new Promise(function (resolve, reject) {
        service.http.get(url, { headers: headers }).catch(err => {
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

  getHomeSlider(){
    var service = this;
    let url = service.appConfig.Shop_URL + "/wp-json/sow/v1/home_slider/";
    url = this.initUrl(url,'');
     var headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    return new Promise(function (resolve, reject) {
      service.http.get(url, { headers: headers }).catch(err => {
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

}
