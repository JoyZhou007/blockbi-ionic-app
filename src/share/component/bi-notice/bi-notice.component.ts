import {Component} from "@angular/core";
import {NavController, ModalController} from "ionic-angular";
import {NotificationMessageComponent} from "../../../pages/notification-message/notification-message";
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/16.
 */
@Component({
  selector: 'bi-notice',
  template: `<div (click)="showNotificationMessage($event)"><span class="bi-icon-bell"></span></div>`,
})
export class BiNoticeComponent {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }


  /**
   * 显示通知
   */
  showNotificationMessage(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(NotificationMessageComponent, {});
    modal.present()
  }

}