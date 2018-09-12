import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/9.
 */

@Injectable()
export class NotificationService {
  constructor(){
    this.initNotification();
  }

  private notificationSource: any;
// Observable any streams
  private notification: any;

  initNotification() {
    if (!this.notificationSource) {
      this.notificationSource = new Subject<any>();
      this.notification = this.notificationSource.asObservable();
    }
  }

  getNotification(): Observable<any>{
    return this.notification;
  }

  /**
   * 发送异步消息
   * @param message
   */
  postNotification(message: any) {
    if (typeof this.notificationSource !== 'undefined') {
      this.notificationSource.next(message);
    }
  }

}
