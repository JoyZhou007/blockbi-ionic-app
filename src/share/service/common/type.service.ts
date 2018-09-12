import { Injectable } from "@angular/core";

@Injectable()
export class TypeService {

  /**
   * 克隆对象 (解决对象绑定值遇到数据引用类型的问题)
   * @param obj
   * @returns {any}
   */
  clone(obj: any): any {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) {
      return obj;
    }

    let cloneObj: any = new obj.constructor;
    for (let attr in obj) {
      if (typeof obj[attr] === 'object' && attr !== 'timer') {
        cloneObj[attr] = this.clone(obj[attr]);
      } else {
        cloneObj[attr] = obj[attr];
      }
    }
    return cloneObj;
  }


  /**
   * 数组去重
   */
  RemoveDuplicateData(arr) {
    let ret = [];
    for (let i = 0, j = arr.length; i < j; i++) {
      if (ret.indexOf(arr[i]) === -1) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }



  /**
   * 判断是字符串还是数字
   * e.g
   *  123         true
   * '123'       true
   * 'AAAAAAAA'  false
   * @param val
   * @returns {boolean}
   */
  isNumber(val: any) {
    return !isNaN(val);
  }
}
