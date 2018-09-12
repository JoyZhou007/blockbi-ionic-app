///<reference path="../../share/config/chat.config.ts"/>
import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {ChatMessage, ChatMessageShare, ChatMessageSharePost} from "../../share/entity/chat-entity";
import {ChatConfig} from "../../share/config/chat.config";
import {ChatModelService} from "../../share/service/model/chat-model.service";
import {EventNameConfig} from "../../share/config/event-name.config";

/**
 * Generated class for the ChatShareDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-share-dialog',
  templateUrl: 'chat-share-dialog.html',
  providers: [ChatModelService]
})
export class ChatShareDialogPage {

  private currentForm: number;
  private currentType: number;
  private chatChannelList: any;
  public currentList: Array<any> = [];
  public isFriend: boolean;
  public messageObj: ChatMessage;


  constructor(public navCtrl: NavController,
              @Inject('chat-store.service') public chatStoreService: any,
              @Inject('im.service') public imService: any,
              public chatModelService: ChatModelService,
              @Inject('dialog.service') public dialogService: any,
              @Inject('app.config') public appConfig: any,
              public event: Events,
              public navParams: NavParams) {
    this.currentForm = this.navParams.data.chatMenuItem.form;
    this.messageObj = this.navParams.data.messageObj;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatShareDialogPage');
    this.getGroupList();
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
          this.currentList = this.chatChannelList['WORK'];
          break;
        case  2 :
          this.currentList = this.chatChannelList['MISSION'];
          break;
      }
    }
  }


  /**
   * 从本地缓存获取channel_list
   */
  getGroupList() {
    this.chatStoreService.getChatChannelList((v) => {
      this.chatChannelList = v;
      if (this.currentForm == 1) {
        this.currentList = this.chatChannelList['PRIVATE'];
      }
    }).then().catch();
  }

  /**
   * 确认分享
   */
  public shareToTheChannel(item: any) {
    this.dialogService.showConfirm('Share it!', 'Are you be sure ? they also be share comments as well', () => {
      let shareMessage: any;
      let resource_id: string;
      switch (this.messageObj.type) {
        case ChatConfig.CHAT_MESSAGE_TYPE_FORWARD:
          let originalMsgType = this.messageObj.detail.original_msg.detail.type;
          resource_id = this.messageObj.detail.original_msg.detail.fid;
           if (originalMsgType == ChatConfig.CHAT_MESSAGE_TYPE_POST) {
            shareMessage = this.initSharePostMessage();
          } else {
            shareMessage = this.initShareMessage();
          }
          resource_id = this.messageObj.detail.original_msg.detail.fid;
          Object.assign(shareMessage,  this.messageObj.detail.original_msg.detail);

          break;

        case ChatConfig.CHAT_MESSAGE_TYPE_SHARE:
          if (this.messageObj.detail.share_file_type == ChatConfig.CHAT_MESSAGE_TYPE_POST) {
            shareMessage = this.initSharePostMessage();
          } else {
            shareMessage = this.initShareMessage();
          }
          resource_id = this.messageObj.detail.fid;
          Object.assign(shareMessage, this.messageObj.detail);
          break;

        case ChatConfig.CHAT_MESSAGE_TYPE_IMG:
        case ChatConfig.CHAT_MESSAGE_TYPE_FILE:
          shareMessage = this.initShareMessage();
          resource_id = this.messageObj.detail.fid;
          Object.assign(shareMessage, this.messageObj.detail);
          shareMessage.share_file_type = this.messageObj.type;
          break;

        case ChatConfig.CHAT_MESSAGE_TYPE_POST:
          resource_id = this.messageObj.detail.fid;
          shareMessage = this.initSharePostMessage();
          Object.assign(shareMessage, this.messageObj.detail);
          shareMessage.share_file_type = this.messageObj.type;
          break;
      }
      //从api获取 share_id
      let getShareIdFun = (item: any) => {
        this.chatModelService.generateShareId({
          data: {
            gid: item.gid,
            resource_id: resource_id,
            form: this.currentForm
          }
        }, (response: any) => {
          if (response.status === 1) {
            let shareId = response.data.share_id;
            if (shareId) {
              shareMessage.share_id = shareId;
              this.event.publish(EventNameConfig.SHARE_MESSAGE, {
                data: {
                  shareMessage: shareMessage,
                  shareItem: item
                }
              });
            }
          }
        })
      };
      getShareIdFun(item);
    });
  }


  /**
   * 初始化share的消息对象
   * @returns {ChatMessageShare}
   */

  initShareMessage() {
    let detail: ChatMessageShare = {
      ext: '',
      fid: '',
      file_name: '',
      file_path: '',
      file_type: '',
      share_file_type: 0,
      share_id: ''
    };
    return detail
  }


  /**
   * 初始化 share post 对象
   * @returns {ChatMessageSharePost}
   */
  initSharePostMessage() {
    let detail: ChatMessageSharePost = {
      first_attachment: '',
      fid: '',
      post_name: '',
      post_id: '',
      share_file_type: 0,
      share_id: '',
      summary: '',
      updated: '',
    };
    return detail
  }

}
