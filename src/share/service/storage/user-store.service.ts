/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { StoreService } from "./store.service";

@Injectable()
export class UserStoreService extends StoreService {
  public static STORE_KEY_USER_INFO = 'user';
  public static STORE_KEY_SESSION_ID = 'session_id';
  public static STORE_KEY_COMPANY_LIST = 'company_list';
  public static STORE_KEY_COMPANY_CURRENT = 'company_current';
  public static STORE_KEY_CONTACT_LIST = 'contact_list';

  constructor(public storage: Storage) {
    super(storage);
  }


  /**
   * 将api login-check接口的数据放入缓存
   * @param data
   */
  setUserInfo(data: any): Promise<any> {
    // user
    return this.storage.set(UserStoreService.STORE_KEY_USER_INFO, data).then().catch();
  }

  /**
   * 设置session_id
   * @param data
   * @return {Promise<any>}
   */
  setSessionId(data: any): Promise<any> {
    // session_id
    return this.storage.set(UserStoreService.STORE_KEY_SESSION_ID, data).then().catch();
  }

  /**
   * 设置公司列表
   * @param data
   * @return {Promise<any>}
   */
  setUserCompanyList(data: any): Promise<any> {
    //companies_information
    if (data.length > 0) {
      return Promise.all([
        this.setUserCurrentCompany(data[0]),
        this.storage.set(UserStoreService.STORE_KEY_COMPANY_LIST, data)
      ]).then();
    } else {
      return this.storage.set(UserStoreService.STORE_KEY_COMPANY_LIST, data).then();
    }
  }

  /**
   * 设置当前公司
   * @param data
   * @return {Promise<any>}
   */
  setUserCurrentCompany(data: any): Promise<any> {
    // companies_information[0]
    return this.storage.set(UserStoreService.STORE_KEY_COMPANY_CURRENT, data).then().catch();
  }

  /**
   * 获取登录用户数据
   * {name: string, email: string, work_name: string, work_email: string, uuid: string}
   * @param deal
   * @return {Promise<any>}
   */
  getUserInfo(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_USER_INFO).then((v) => {
      deal(v)
    }).catch();
  }

  /**
   * 获取登录session id
   * @param deal
   * @return {Promise<any>}
   */
  getSessionId(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_SESSION_ID).then((v) => deal(v)).catch();
  }

  /**
   * 获取所有可用公司列表
   * @param deal
   * @return {Promise<any>}
   */
  getUserCompanyList(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_COMPANY_LIST).then((v) => deal(v)).catch();
  }

  /**
   * 获取当前公司信息
   * @param deal
   * @return {Promise<any>}
   */
  getUserCurrentCompany(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_COMPANY_CURRENT).then((v) => deal(v)).catch();
  }

  /**
   * 获取当前公司CID
   * @param deal
   * @return {Promise<any>}
   */
  getCurrentCID(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_COMPANY_CURRENT).then((v) => {
      if (v && v.hasOwnProperty('cid')) {
        deal(v.cid);
      } else {
        deal('');
      }
    }).catch();
  }

  /**
   * 获取当前用户uuid
   * @param deal
   * @return {Promise<any>}
   */
  getCurrentUUID(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_USER_INFO).then((v) => {
      if (v && v.hasOwnProperty('uuid')) {
        deal(v.uuid);
      } else {
        deal('');
      }
    }).catch();
  }

  /**
   * 获取当前用户psid
   * @param deal
   * @return {Promise<any>}
   */
  getCurrentPSID(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_COMPANY_CURRENT).then((v) => {
      if (v && v.hasOwnProperty('psid')) {
        deal(v.psid);
      } else {
        deal('');
      }
    }).catch();
  }

  /**
   * 当前用户姓名
   * @param deal
   * @return {Promise<any>}
   */
  getCurrentUserName(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_USER_INFO).then((v) => {
      if (v && v.hasOwnProperty('work_name')) {
        deal(v.work_name);
      } else {
        deal('');
      }
    }).catch();
  }

  /**
   * 当前用户私人邮箱
   * @param deal
   * @return {Promise<any>}
   */
  getCurrentUserEmail(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_USER_INFO).then((v) => {
      if (v && v.hasOwnProperty('email')) {
        deal(v.email);
      } else {
        deal('');
      }
    }).catch();
  }

  /**
   * 清除登录用户相关数据
   * @return {Promise<any>}
   */
  removeUserLoginData(): Promise<any> {
    return Promise.all([
      this.storage.remove(UserStoreService.STORE_KEY_SESSION_ID),
      this.storage.remove(UserStoreService.STORE_KEY_CONTACT_LIST),
      this.storage.remove(UserStoreService.STORE_KEY_USER_INFO),
      this.storage.remove(UserStoreService.STORE_KEY_COMPANY_LIST),
      this.storage.remove(UserStoreService.STORE_KEY_COMPANY_CURRENT),
    ]).then().catch();
  }

  /**
   * 初始登录用户相关数据
   * @return {Promise<any>}
   */
  setUserLoginData(session_id: any, user_info: any, company_all: any): Promise<any> {
    return Promise.all([
      this.setSessionId(session_id),
      this.setUserInfo(user_info),
      this.setUserCompanyList(company_all)
    ]).then().catch();
  }


  /**
   * 存储contact_list
   */
  setContactList(data: any): Promise<any> {
    // contact_list
    return this.storage.set(UserStoreService.STORE_KEY_CONTACT_LIST, data).then().catch();
  }

  /**
   * 获取联系人列表
   */
  getContactList(deal: Function): Promise<any> {
    return this.storage.get(UserStoreService.STORE_KEY_CONTACT_LIST).then((v) => {
      deal(v)
    }).catch();
  }

  /**
   * 删除联系人列表
   * @return {Promise<T>}
   */
  removeContactList() {
    return this.storage.remove(UserStoreService.STORE_KEY_CONTACT_LIST).then().catch();
  }

}
