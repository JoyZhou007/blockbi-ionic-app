/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
import { Inject, Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";

@Injectable()
export class BaseModelService {
  constructor(@Inject(ApiService) public api: ApiService) {
  }

  private DEFAULT_METHOD = 'post';

  /**
   * post 请求
   * @param apiName API名称
   * @param data  参数数据
   * @param callback 回调方法
   */
  post(apiName: string, data?: any, callback?: any) {
    return this.api.post(apiName, data, callback);
  }

  /**
   * get 请求
   * @param apiName API名称
   * @param data    参数数据
   * @param callback  回调方法
   */
  get(apiName: string, data?: any, callback?: any): any {
    return this.api.get(apiName, data, callback);
  }

  /**
   * 获取远程数据
   * @param apiName
   * @param data
   * @param callback
   * @param method 提交方式
   */
  getData(apiName: string, data?: any, callback?: any, method?: string): any {
    method = (method ? method : this.DEFAULT_METHOD).toLocaleLowerCase();
    if (method === 'post') {
      return this.post(apiName, data, callback);
    } else if (method === 'get') {
      return this.get(apiName, data, callback);
    }
  }
}
