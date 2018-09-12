/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/8.
 */
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/1.
 */
import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {StoreService} from "./store.service";

@Injectable()
export class NotificationStoreService extends StoreService {

  public static STORE_KEY_NOTIFICATION_PERSONAL_REQUEST = 'notification_personal_request';
  public static STORE_KEY_NOTIFICATION_COMPANY_REQUEST = 'notification_company_request';


  constructor(public storage: Storage) {
    super(storage);
  }


  /**
   * 存储个人类型 的 request 消息
   */
  setPersonalRequest(data) {
    return this.storage.set(NotificationStoreService.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST, data).then().catch();
  }

  /**
   * 获取个人类型 的 request 消息
   */
  getPersonalRequest(deal: Function): Promise<any> {
    return this.storage.get(NotificationStoreService.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST).then((v) => deal(v)).catch();
  }

  /**
   * 从缓存删除个人类型 的 request 消息
   */
  removePersonalRequest() {
    return this.storage.remove(NotificationStoreService.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST).then().catch();
  }


  /**
   * 清除所有notification相关数据
   * @returns {Promise<TResult|Promise<any>[]>|Promise<Promise<any>[]>}
   */
  removeAllNotificationData(): Promise<any> {
    return Promise.all([
      this.storage.remove(NotificationStoreService.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST)
    ]).then().catch();
  }









}