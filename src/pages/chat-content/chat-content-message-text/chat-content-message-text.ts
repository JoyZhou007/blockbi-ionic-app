import {Component, Input, Inject} from '@angular/core';
import {ChatMessage} from "../../../share/entity/chat-entity";
import * as UserConfig from '../../../share/config/user.config';

/**
 * Generated class for the ChatContentMessageTextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-content-message-text',
  templateUrl: 'chat-content-message-text.html'
})
export class ChatContentMessageTextComponent {

  public messageObj: ChatMessage;
  public isForwardMessage: boolean;
  public originalMessageObj: any = {};
  private allUserInfo: any;
  private originalMessageOwner: any;
  private channelInfo: any;
  private atUserList: any;
  public userConfig: any = UserConfig;

  constructor(@Inject('app.config') public appConfig,
              @Inject('type.service') public typeService) {
  }


  @Input() set setMessage(param: ChatMessage) {
    if (param) {
      this.messageObj = param;
    }
  }

  //是否是转发消息
  @Input() set setIsForward(bool: boolean) {
    this.isForwardMessage = bool;
  }

  //所有参与群聊的成员信息
  @Input() set setAllUserInfo(param: any) {
    this.allUserInfo = param;
  }

  //聊天组消息
  @Input() set setChannelInfo(param: any) {
    this.channelInfo = param;
    this.atUserList = this.typeService.clone(this.channelInfo.info);
  }


  ngAfterContentInit(): void {
    this.mergeChatUserInfo(this.allUserInfo);
  }

  /**
   * 合并聊天人员信息
   */
  mergeChatUserInfo(userInfo: any) {
    if (this.atUserList && userInfo) {
      for (let i  in userInfo) {
        let count: number = 0;
        for (let k in this.atUserList) {
          if (this.atUserList[k].uid != userInfo[i].uid) {
            count++;
          }
        }
        if (count === this.atUserList.length) {
          this.atUserList.push(userInfo[i])
        }
      }
    }
    if (this.isForwardMessage) {
      this.originalMessageObj = this.messageObj.detail.original_msg;
      this.getOriginalMessageOwnerInfo(this.originalMessageObj);
      this.analyseMessageText(this.originalMessageObj, this.atUserList);
    } else {
      this.analyseMessageText(this.messageObj, this.atUserList);
    }
  }


  /**
   * 获取原始消息的owner info
   */
  getOriginalMessageOwnerInfo(originalMessage: any) {
    for (let key in this.allUserInfo) {
      if (key == originalMessage.owner) {
        this.originalMessageOwner = this.allUserInfo[key];
        break;
      }
    }
  }


  /**
   * 显示前分析文本中是否有特殊标签和html冲突 <>
   * - 高亮聊天人@ <@USER|uid>
   * - 转发 <@FORWARD|msg_id>
   * - emoji表情 ::EMOJI|#1::
   * - 换行"\n"
   */
  analyseMessageText(message: any, userInfoArr?: Array<any>) {
    if (message.msg && !message.safeMsg) {
      //处理换行
      let messageText = message.msg;
      //处理html
      //messageText = this.escapeHtml(messageText);
      while (messageText.indexOf("\n") !== -1) {
        messageText = messageText.replace("\n", "<br />");
      }
      //处理用户高亮
      if (userInfoArr) {
        // 找到所有的<@USER|XXX>
        let findReg = new RegExp("(((&|&amp;)lt;)|<)@USER[|](\\S{0,})(((&amp;|&)gt;)|>)", "gm");

        messageText = messageText.replace(findReg, function (rs, $1, $2, $3, $4): string {
          let str = rs;
          for (let i in userInfoArr) {
            if (userInfoArr[i].uid == $4) {
              str = '<a class="mention"  data-user="' + userInfoArr[i].uid + '">@' + userInfoArr[i].work_name + '</a>';
            }
          }
          return str;
        });
      }
      // 2017.10.17 - 防止发送的消息有样式信息
      // messageText = this.escapeHtml(messageText);
      message.safeMsg = messageText;
    }
  }


}
