import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {ContactsList} from "../../share/entity/contact-entity";
import {ChatMessage, ChatMessageForward, ImageDetail, FileDetail, PostDetail} from "../../share/entity/chat-entity";
import {ChatConfig} from "../../share/config/chat.config";
import {EventNameConfig} from "../../share/config/event-name.config";
import {FolderModelService} from "../../share/service/model/folder-model.service";
import * as folderConfig from '../../share/config/folder.config';

/**
 * Generated class for the ChatForwardDialogComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-forward-dialog',
  templateUrl: 'chat-forward-dialog.html',
  providers: [FolderModelService]
})
export class ChatForwardDialogComponent {
  private currentForm: number;
  private currentType: number;
  private contactList: {Cooperator: Array<ContactsList>; Friend: Array<ContactsList>; Internal: Array<ContactsList>};
  private chatChannelList: any;
  public currentList: Array<any> = [];
  public isFriend: boolean;
  public messageObj: ChatMessage;
  private isCommonMessage: boolean;
  private originalMsg: ChatMessageForward;
  private isForwardMessage: boolean;
  private isShareMessage: boolean;

  constructor(public navCtrl: NavController,
              @Inject('user.service') public userService: any,
              @Inject('chat-store.service') public chatStoreService: any,
              @Inject('dialog.service') public dialogService: any,
              @Inject('app.config') public appConfig: any,
              public event: Events,
              public folderModelService: FolderModelService,
              public navParams: NavParams) {
    this.currentForm = this.navParams.data.chatMenuItem.form;
    this.messageObj = this.navParams.data.messageObj;
  }

  ionViewDidLoad() {
    this.getContactList();
    this.getGroupList();
    this.initOriginalMsg();
    this.judgeIsCommonMessage();
  }


  /**
   * 切换channel
   */
  switchNewChannelType(event: any, type: number) {
    event.stopPropagation();
    if (this.currentType != type) {
      this.currentType = type;
      switch (type) {
        case  1 :
          this.isFriend = true;
          this.currentList = this.contactList['Internal'];
          break;
        case  2 :
          this.isFriend = true;
          this.currentList = this.contactList['Cooperator'];
          break;
        case  3 :
          this.isFriend = false;
          this.currentList = this.chatChannelList['WORK'];
          break;
        case  4 :
          this.isFriend = false;
          this.currentList = this.chatChannelList['MISSION'];
          break;
        case  5 :
          this.isFriend = true;
          this.currentList = this.contactList['Friend'];
          break;
        case  6 :
          this.isFriend = false;
          this.currentList = this.chatChannelList['PRIVATE'];
          break;
      }
    }
  }


  /**
   * 从本地缓存获取contact_list
   */

  getContactList() {
    this.userService.getContactList((contactList: {
      Cooperator: Array<ContactsList>,
      Friend: Array<ContactsList>,
      Internal: Array<ContactsList>
    }) => {
      if (contactList) {
        this.contactList = contactList;
      }
    })
  }


  /**
   * 从本地缓存获取channel_list
   */
  getGroupList() {
    this.chatStoreService.getChatChannelList((v) => {
      this.chatChannelList = v;
    }).then().catch();
  }

  /**
   * 判断是否是普通文本消息
   */
  judgeIsCommonMessage() {
    if (this.messageObj.type == ChatConfig.CHAT_MESSAGE_TYPE_FORWARD && this.messageObj.detail.original_msg.type == 1) {
      this.isCommonMessage = true;
    } else if (this.messageObj.type == ChatConfig.CHAT_MESSAGE_TYPE_TEXT) {
      this.isCommonMessage = true;
    } else {
      this.isCommonMessage = false;
    }
    if (this.messageObj.type == ChatConfig.CHAT_MESSAGE_TYPE_FORWARD) {
      this.isForwardMessage = true;
    } else {
      this.isForwardMessage = false;
    }
    if (this.messageObj.type == ChatConfig.CHAT_MESSAGE_TYPE_SHARE) {
      this.isShareMessage = true;
    } else {
      this.isShareMessage = false;
    }
  }


  /**
   * forwardToTheChannel
   */
  forwardToTheChannel(item: any) {
    this.dialogService.showConfirm('Forward it', 'Are you sure ?', () => {
      this.confirmForwardMsg(item);
      this.navCtrl.pop();
    });
  }


  /**
   * 确认转发该消息
   */
  confirmForwardMsg(item: any) {
    //如果是普通文本类型消息 直接转发
    let moduleType: number;
    if (!item.gid) {
      item.uid = item.uuid || item.pisd;
      moduleType = folderConfig.MODULE_CHAT_FRIEND_TYPE;
    } else {
      moduleType = folderConfig.MODULE_CHAT_GROUP_TYPE;
    }
    let forwardMessage: any = this.isForwardMessage ? this.messageObj.detail.original_msg : this.messageObj;
    if (this.isCommonMessage) {
      // this.originalMsg =
      this.originalMsg = {
        original_msg: {
          detail: forwardMessage.detail,
          msg: forwardMessage.msg,
          msg_id: this.messageObj.msg_id,
          type: this.messageObj.type,
          owner: forwardMessage.owner,
          userInfo: {
            form: this.currentForm,
            uid: this.messageObj.user_info.uid,
            work_name: this.messageObj.user_info.work_name
          }
        }
      };
      this.event.publish(EventNameConfig.FORWARD_MESSAGE, {
        data: {
          originalMsg: this.originalMsg,
          forwardItem: item
        }
      });
    } else {  //否则要做文件上传再转发
      this.folderModelService.fileForward({
        id: item.gid || item.uid,
        moduleType: moduleType,
        form: this.currentForm,
        fid: forwardMessage.detail.fid
      }, (res: any) => {
        // 获取成功
        if (res.status == 1) {
          this.dealSpecialMessageForward(res.data, item, forwardMessage);
        }
      });
    }
  }


  /**
   * 处理非文本消息的转发
   */
  dealSpecialMessageForward(data: any, item: any, forwardMessage: any) {
    let detail: any;
    let originalMsgType: number;
    switch (forwardMessage.type) {
      case ChatConfig.CHAT_MESSAGE_TYPE_POST:
        detail = this.initPostDetail();
        originalMsgType = ChatConfig.CHAT_MESSAGE_TYPE_POST;
        Object.assign(detail, forwardMessage.detail);
        break;
      case ChatConfig.CHAT_MESSAGE_TYPE_FILE:
        detail = this.initFileDetail();
        originalMsgType = ChatConfig.CHAT_MESSAGE_TYPE_FILE;
        Object.assign(detail, forwardMessage.detail);
        break;
      case ChatConfig.CHAT_MESSAGE_TYPE_IMG:
        detail = this.initImageDetail();
        originalMsgType = ChatConfig.CHAT_MESSAGE_TYPE_IMG;
        Object.assign(detail, forwardMessage.detail);
        break;
      case  ChatConfig.CHAT_MESSAGE_TYPE_SHARE:
        originalMsgType = forwardMessage.detail.share_file_type;
        switch (forwardMessage.detail.share_file_type) {
          case ChatConfig.CHAT_MESSAGE_TYPE_POST:
            detail = this.initPostDetail();
            Object.assign(detail, forwardMessage.detail);
            break;
          case ChatConfig.CHAT_MESSAGE_TYPE_FILE:
            detail = this.initFileDetail();
            Object.assign(detail, forwardMessage.detail);
            break;
          case ChatConfig.CHAT_MESSAGE_TYPE_IMG:
            detail = this.initImageDetail();
            Object.assign(detail, forwardMessage.detail);
            break;
        }
        break;
    }
    detail.fid = data.fid;    //将消息里面的fid 换为 新 的fid
    detail.file_name = data.name;    //将消息里面的name 换为 新的name
    this.originalMsg = {
      original_msg: {
        detail: detail,
        msg: forwardMessage.msg,
        msg_id: this.messageObj.msg_id,
        type: originalMsgType,
        owner: forwardMessage.owner,
        userInfo: {
          form: this.currentForm,
          uid: this.messageObj.user_info.uid,
          work_name: this.messageObj.user_info.work_name
        }
      }
    };
    this.event.publish(EventNameConfig.FORWARD_MESSAGE, {
      data: {
        originalMsg: this.originalMsg,
        forwardItem: item
      }
    });
  }


  /**
   * 初始化转发的原始消息
   */
  initOriginalMsg() {
    this.originalMsg = {
      original_msg: {
        detail: {},
        msg: '',
        msg_id: '',
        owner: '',
        type: 1,
        userInfo: {}
      }
    }
  }

  initPostDetail() {
    let detail: PostDetail = {
      attachments: 0,
      fid: 0,
      first_attachment: {},
      post_id: '',
      post_name: '',
      updated: 0
    };
    return detail
  }

  initImageDetail() {
    let detail: ImageDetail = {
      ext: '',
      fid: '',
      file_name: '',
      file_type: '',
      file_path: ''
    };
    return detail
  }

  initFileDetail() {
    let detail: FileDetail = {
      ext: '',
      fid: '',
      file_name: '',
      file_type: '',
      updated: ''
    };
    return detail
  }

}



