/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class StoreService {
  constructor(public storage: Storage) {
  }

  /**
   * Get
   * @param key
   * @param successCallback 成功后，通常为赋值函数
   * @param failCallback
   */
  get(key: string, successCallback: Function, failCallback?: Function) {
    this.storage.get(key)
      .then((v: any) => {successCallback(v);})
      .catch((err) => {
        console.error('error get key ' + key + ': ' + err);
        if (failCallback) {
          failCallback();
        }
      });
  }


  /**
   * Get
   * @param key
   * @param value
   * @param callback
   */
  set(key: string, value: any, callback?: Function) {
    this.storage.set(key, value)
      .then(() => {
        console.log('success set key');
        if (callback) {
          callback();
        }
      }).catch((err) => {console.log('error set key' + key + ': ', err)});
  }

  /**
   * 删除key
   * @param key
   * @param callback
   */
  remove(key: string, callback?: Function) {
    this.storage.remove(key)
      .then(() => {
        console.log('success remove key');
        if (callback) {
          callback();
        }
      }).catch((err) => {console.log('error remove key', err)});
  }
}
