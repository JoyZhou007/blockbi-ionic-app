import {Component, Inject, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Events, Slides} from 'ionic-angular';
import {NotificationModelService} from "../../share/service/model/notification-model.service";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {EventNameConfig} from "../../share/config/event-name.config";

/**
 * Generated class for the NotificationMessageComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-message',
  templateUrl: 'notification-message.html',
  providers: [NotificationModelService]
})
export class NotificationMessageComponent {


  public currentNotificationType: string;
  public currentNotificationTypeNum: number;
  public currentNotificationForm: string;
  public notificationDisplayArray: Array<NotificationEntity> = [];
  public noticeDisplayArray: Array<NotificationEntity> = [];
  public requestDisplayArray: Array<NotificationEntity> = [];
  public notificationConfig: any;

  @ViewChild('slides') public slides: Slides;

  constructor(public navCtrl: NavController,
              private notificationModelService: NotificationModelService,
              private events: Events,
              @Inject('notification-store.service') private notificationStoreService,
              @Inject('type.service') private typeService,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.currentNotificationType = 'notice';
    this.currentNotificationTypeNum = 1;
    this.currentNotificationForm = 'personal';
    this.notificationConfig = NotificationConfig;
    this.fetchNotice();
    this.dealEvent();
  }


  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.CHANGE_NOTIFICATION_STATUS);
  }

  /**
   * 事件处理
   */
  dealEvent() {
    this.events.subscribe(EventNameConfig.CHANGE_NOTIFICATION_STATUS, (data: any) => {
      if (data) {
        let handleData = data.handleData;
        if (handleData.notification_form == 'personal') {
          let notificationData: any;
          //将缓存这条request_id  handled 改为 1
          this.notificationStoreService.getPersonalRequest((v) => {  //个人
            if (v) {
              notificationData = v;
              for (let i in notificationData) {
                if (notificationData[i].data.request_id == handleData.request_id) {
                  notificationData[i].data.handled = 1;
                }
              }
              this.notificationStoreService.setPersonalRequest(notificationData);
            }
          });
        } else if (handleData.notification_form == 'company') {

        }
      }
    })
  }


  /**
   * type notice/request/inMail
   * @param type
   */
  switchNotificationType(event: any, type: string, num: number) {
    event.stopPropagation();
    if (this.currentNotificationTypeNum != num) {
      this.currentNotificationTypeNum = num;
      this.notificationDisplayArray = [];
      if (type == 'notice') {
        this.fetchNotice();
      } else if (type == 'request') {
        this.fetchRequest();
      }
    }
  }


  /**
   * form: personal/company
   * @param form
   */
  switchNotificationForm(event: any, form: string) {
    event.stopPropagation();
    this.currentNotificationForm = form;
  }


  /**
   * 获取notice
   */
  fetchNotice(last_doc_id?: string) {
    // this.fetchNoticeFromApi();
  }

  /**
   * 从api 获取 notice
   */
  fetchNoticeFromApi(last_doc_id?: string) {
    let requestData = {
      last_doc_id: last_doc_id ? last_doc_id : '',
      form: (this.currentNotificationForm == 'personal') ? 1 : 2
    };
    this.notificationModelService.fetchNotice({data: requestData}, (res: any) => {
      if (res.status == 1) {
        this.buildDataForTemplate(res.data);
      }
    });
  }


  /**
   * 获取request
   */
  fetchRequest() {
    //先从本地缓存 获取 request
    this.notificationStoreService.getPersonalRequest((v) => {
      if (!v) {
        this.fetchRequestFromApi();
      } else {
        this.notificationDisplayArray = v;
      }
    });

  }


  /**
   * 从api接口获取
   */
  fetchRequestFromApi(last_doc_id?: string) {
    let requestData = {
      last_doc_id: last_doc_id ? last_doc_id : '',
      form: (this.currentNotificationForm == 'personal') ? 1 : 2
    };
    this.notificationModelService.fetchRequest({data: requestData}, (res: any) => {
      if (res.status === 1) {
        this.buildDataForTemplate(res.data);
      }
    });
  }


  /**
   *  将数据做成与在线一样的格式 NotificationEntity
   *  data:{
        act:'',
        data:{},
        status:''
      }
   */
  buildDataForTemplate(notificationArray) {
    let allId: any = {user: [], mission: [], file: [], group: [], tips: []};
    let tmpArr: Array<any> = [];
    for (let i in notificationArray) {
      let notificationData: any = {};
      notificationArray[i].notification_form = this.currentNotificationForm;  //将当前消息属于个人/公司分组 存到对象中
      notificationData.act = notificationArray[i].act;
      notificationData.status = notificationArray[i].status;
      delete notificationArray[i].status;
      delete notificationArray[i].act;
      notificationData.data = notificationArray[i];
      this.getAllId(notificationData.data, allId);
      tmpArr.push(notificationData);
    }
    //去掉重复的群组/人员id
    let newAllId: any = {user: [], mission: [], file: [], group: [], tips: []};
    for (let key in allId) {
      newAllId[key] = this.typeService.RemoveDuplicateData(allId[key]);
    }
    this.getNotificationSummaryFromApi(newAllId, tmpArr)
  }


  /**
   * 获取列表中所有的用户id/ 群组gid /mission id /tips id /folder id 请求summary 接口
   */
  getAllId(notificationData: any, allId) {
    //user 目前 可能为 owner /introduce / receiver / friend / owner.uuid / friend.uuid
    //如果存在owner
    if (notificationData.hasOwnProperty('owner')) {
      if (Object.prototype.toString.apply(notificationData.owner) === '[object Object]') {
        if (notificationData.owner.uuid) {
          allId.user.push(notificationData.owner.uuid);
        } else if (notificationData.owner.uid) {
          allId.user.push(notificationData.owner.uid);
        } else if (notificationData.owner.psid) {
          allId.user.push(notificationData.owner.psid);
        }
      } else {
        allId.user.push(notificationData.owner);
      }
    }
    //如果存在friend
    if (notificationData.hasOwnProperty('friend')) {
      if (Object.prototype.toString.apply(notificationData.owner) === '[object Object]') {
        allId.user.push(notificationData.friend.uuid);
      } else {
        allId.user.push(notificationData.friend);
      }
    }
    //如果存在introducer
    if (notificationData.hasOwnProperty('introducer')) {
      allId.user.push(notificationData.introducer);
    }
    //如果存在receiver
    if (notificationData.hasOwnProperty('receiver')) {
      allId.user.push(notificationData.receiver);
    }
    //邀请好友进群有 members
    if (notificationData.hasOwnProperty('members')) {
      for (let member in notificationData.members) {
        allId.user.push(notificationData.members[member].uid);
      }
    }


    //gid
    if (notificationData.hasOwnProperty('gid')) {
      allId.group.push(notificationData.gid);
    }


    //mid
    if (notificationData.hasOwnProperty('mid')) {
      allId.mission.push(notificationData.mid);
    }
  }


  /**
   * 获取summary接口
   */
  getNotificationSummaryFromApi(newAllId: any, notificationArray: any) {
    this.notificationModelService.fetchNotificationFetchSummary(newAllId, (res: any) => {
      if (res.status == 1) {
        for (let i in notificationArray) {
          notificationArray[i]['summaryObj'] = res.data;
          this.notificationDisplayArray.push(notificationArray[i]);
        }
        this.notificationStoreService.setPersonalRequest(this.notificationDisplayArray);
      }
    })
  };


}
