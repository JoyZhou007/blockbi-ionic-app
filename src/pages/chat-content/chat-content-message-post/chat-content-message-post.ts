import {Component, Input, Inject} from '@angular/core';
import {PostDetail, ChatMessage} from "../../../share/entity/chat-entity";

/**
 * Generated class for the ChatContentMessagePostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-content-message-post',
  templateUrl: 'chat-content-message-post.html'
})
export class ChatContentMessagePostComponent {

  public messageObj: ChatMessage;
  public fileDetail: PostDetail;
  public isForwardMessage: boolean;
  public originalMessageObj: any;
  private allUserInfo: any;
  private originalMessageOwner: any;
  private isShareMessage: boolean;


  constructor(@Inject('app.config') public appConfig) {
  }

  @Input() set setMessage(param: ChatMessage) {
    if (param) {
      this.messageObj = param;
      this.fileDetail = this.messageObj.detail;
    }
  }



//是否是转发消息
  @Input() set setIsForward(bool: boolean) {
    this.isForwardMessage = bool;
  }


  //是否是分享消息
  @Input() set setIsShare(bool: boolean) {
    this.isShareMessage = bool;
  }


  @Input() set setAllUserInfo(param: any) {
    this.allUserInfo = param;
  }


  ngOnInit(): void {
    if (this.isForwardMessage) {
      this.originalMessageObj = this.messageObj.detail.original_msg;
      this.getOriginalMessageOwnerInfo(this.originalMessageObj);
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
}
