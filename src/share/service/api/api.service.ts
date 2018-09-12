/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */
import "rxjs/add/operator/map";
import { Inject, Injectable } from "@angular/core";
import { Headers, Http, Response, URLSearchParams } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { BlockBiRequest } from "../../config/api.config";
import { Events, Platform } from "ionic-angular";
import { EventNameConfig } from "../../config/event-name.config";


@Injectable()
export class ApiService {
  private responseDataType: string = 'json';
  private httpHeader: Headers;
  private USER_SESSION_ID: string = 'session_id';
  private sessionId: any;
  public static ERROR_CODE_NO_LOGIN: number = -10001;
  public static ERROR_CODE_NO_ACCESS: number = 400;
  public static ERROR_CODE_SESSION_EXPIRED: number = 501;


  constructor(public http: Http,
              public plt: Platform,
              public event: Events,
              @Inject('app.config') public appConfig:any,
              @Inject('user-store.service') private userStoreService: any,
              @Inject('dialog.service') private dialogService: any) {
    this.httpHeader = new Headers();
    this.httpHeader.append('Content-Type', 'application/x-www-form-urlencoded');
    this.initSession();
  }

  public initSession(): Promise<any> {
    return this.userStoreService.getSessionId((v) => {
      this.sessionId = v;
    });
  }

  /**
   *
   * @param apiName
   */
  public setRequestUrl(apiName: string): string {
    let requestUrl = '';
    if (BlockBiRequest.IS_REQUEST_BY_DOMAIN) {
      requestUrl = BlockBiRequest.TARGET_DOMAIN;
    }
    if (BlockBiRequest.PROXY_DATA[apiName]) {
      requestUrl += '/' + BlockBiRequest.PROXY_DATA_PREFIX
        + '/' + BlockBiRequest.PROXY_DATA[apiName];
    } else {
      //console.error('API NAME IS ERROR!');
    }
    return requestUrl;
  }

  /**
   * 设置请求参数
   * @param d
   * @param then
   */
  public setRequestData(d: any, then: Function) {
    let requestData = '';
    //初始化Session
    let func = (data, requestFunc:Function) => {
      let urlSearchParams = new URLSearchParams();
      if (data !== null && data) {
        for (let key in data) {
          //let value: any = '';
          if (data.hasOwnProperty(key)) {
            if (typeof data[key] === 'object') {
              urlSearchParams.append(key, JSON.stringify(data[key]));
            } else {
              urlSearchParams.append(key, data[key]);
            }
          }
        }
      }
      if (this.sessionId) {
        urlSearchParams.append(this.USER_SESSION_ID, this.sessionId);
      }
      urlSearchParams.append('app_version', (this.plt.is('ios') ? 'i' : 'a') + this.appConfig.appVersion);
      requestData = urlSearchParams.toString();
      requestFunc(requestData);
    };
    this.initSession().then(() => {func(d, then)});
    //console.log('body>>>>>>>>>>>>>>>>', urlSearchParams, body);
  }

  /**
   * 发送GET请求
   * @param apiName
   * @param data
   * @param callback
   * @param responseDataType
   * @returns {any}
   */
  public get(apiName: string, data?: any, callback?: any, responseDataType?: any): any {
    let requestUrl = this.setRequestUrl(apiName);
    let requestFunc = (requestData) => {
      //返回的数据类型
      if (responseDataType) {
        this.responseDataType = responseDataType;
      }
      if (requestData !== '') {
        requestUrl += '?' + requestData;
      }

      let response = this.response(this.http.get(requestUrl));

      if (typeof callback === 'function') {	//如果是回调函数
        response.subscribe((data: any) => {
          console.log('api service response1', data);
          this.dealPageCommonStatus(data, callback);
        });
      } else {
        console.log('api service response2', data);
        return response;
      }
    };
    //请求发送的数据
    this.setRequestData(data, requestFunc);


  }

  /**
   *
   * @param apiName
   * @param data
   * @param callback
   */
  public download(apiName: string, data?: any, callback?: Function) {

  }


  /**
   * 发送POST请求
   * @param apiName
   * @param data
   * @param callback
   * @param responseDataType
   * @returns {*}
   */
  public post(apiName: string, data?: any, callback?: any, responseDataType?: any): any {
    let requestUrl = this.setRequestUrl(apiName);
    //请求发送的数据
    let requestFunc = (requestData) => {
      //返回的数据类型
      if (responseDataType) {
        this.responseDataType = responseDataType;
      }
      let response = this.response(this.http.post(requestUrl, requestData, {
        headers: this.httpHeader
      }));
      console.info('**request api:' + requestUrl + '**, param: ', data);
      //如果是回调函数
      response.subscribe((data: any) => {
          //添加调试参数
          this.dealPageCommonStatus(data, callback);
        },
        err => {
          this._serverError(err, requestUrl);
        }
      );
    };
    this.setRequestData(data, requestFunc);
  }

  /**
   * 处理公用状态
   */
  dealPageCommonStatus(data: any, callback?: Function) {
    let loadCallback:boolean = true;
    if (data.hasOwnProperty('status')) {
      switch(data.status) {
        case ApiService.ERROR_CODE_NO_ACCESS:
          loadCallback = false;
          this.event.publish(EventNameConfig.ROUTER_TO, {toUrl: 'home'});
          break;
        case ApiService.ERROR_CODE_NO_LOGIN:
          loadCallback = false;
          this.event.publish(EventNameConfig.USER_LOGOUT);
          break;
        case ApiService.ERROR_CODE_SESSION_EXPIRED:
          loadCallback = false;
          this.event.publish(EventNameConfig.NOTIFICATION_GLOBAL, {act: ApiService.ERROR_CODE_SESSION_EXPIRED});
          break;
        default:
          loadCallback = true;
      }
    } else {

    }
    if (loadCallback && callback) {
      callback(data);
    }
  }


  /**
   * 处理返回数据的类型
   * @param httpRequest 请求实例
   */
  public response(httpRequest: Observable<Response>): Observable<Response> {
    let response: any;
    if (this.responseDataType === 'json') {
      response = httpRequest.map(res => res.json()); // could raise an error if invalid JSON
    } else if (this.responseDataType === 'text') {
      response = httpRequest.map(res => res.text()); // could raise an error if invalid text
      //response = httpRequest.map((res: any) => res.text());
    } else if (this.responseDataType === 'file') {
      response = httpRequest;
    }
    return response;
  }

  /**
   * 处理接口错误数据
   * @param err
   * @returns {any}
   * @private
   */
  private _serverError(err: any, requestUrl: string) {
    if (err instanceof Response) {
      this.dialogService.alert({
        simpleContent: 'request: <b>' + requestUrl + '</b> failed. <br> Status:' + err.status + ', Error Msg:' + err.statusText
      });
      return Observable.throw('backend server error, ' + 'error: ' + err.status + ', errorMsg:' + err.statusText);
      // if you're using lite-server, use the following line
      // instead of the line above:
      //return Observable.throw(err.text() || 'backend server error');
    } else if (err instanceof SyntaxError) {
      this.dialogService.alert({
        simpleContent: 'request: <b>' + requestUrl + '</b> failed. <br> Detail:' + err.message
      });
      return Observable.throw(err.message || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }

  /**
   * 模拟表单提交
   * @param apiName
   * @param requestData
   * @param callback
   */
  ajaxFormSend(apiName: string, requestData: any, callback: Function) {
    let url = this.setRequestUrl(apiName);
    let request = new XMLHttpRequest();
    let self = this;
    request.onreadystatechange = function () {
      if (request.readyState == XMLHttpRequest.DONE) {
        if (callback) {
          if (ApiService.IsJsonString(request.responseText)) {
            callback(JSON.parse(request.responseText))
          } else {
            self.dialogService.alert({
              simpleContent: 'request: <b>' + url + '</b> failed.'
            });
          }

        }
      }
    };
    request.open("POST", url);
    requestData.append(this.USER_SESSION_ID, this.sessionId);
    request.send(requestData);
  }

  /**
   * 是否为合法JSON字符串
   * @param str
   * @return {boolean}
   * @constructor
   */
  static IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
