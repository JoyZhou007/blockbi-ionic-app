import {Component, Output, EventEmitter, Input, Inject} from '@angular/core';
import {ChatConfig} from "../../../share/config/chat.config";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActionSheetController, NavController, ModalController} from "ionic-angular";
import {PublicAlbumsComponent} from "../../public-albums/public-albums";

/**
 * Generated class for the ChatContentInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-content-input',
  templateUrl: 'chat-content-input.html',
  providers: [Camera]
})
export class ChatContentInputComponent {

  public messageData: string;
  @Output('outSendMessage') outSendMessage = new EventEmitter<any>();
  private isShowAtList: boolean = false;
  private channelInfo: any;
  private isFriend: boolean;
  private atUserList: Array<any>;
  private isShowMoreIcons: boolean;


  constructor(@Inject('app.config') public appConfig,
              public nav: NavController,
              public modalCtrl: ModalController,
              public actionSheetCtrl: ActionSheetController,
              private camera: Camera) {
  }

  ngOnInit() {
    this.messageData = '';
  }


  //聊天组消息
  @Input() set setChannelInfo(param: any) {
    this.channelInfo = param;
    this.atUserList = this.channelInfo.info;
  }

  //聊天组消息
  @Input() set setIsFriend(bool: boolean) {
    this.isFriend = bool
  }

  // setIsFriend


  /**
   * 键盘UP 事件
   * @param event
   */
  keyUpEvent(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.sendMessage(event);
    } else {
      if (!this.isFriend) {
        this.detectIsOpenAtList();
      }
    }
  }


  /**
   * 粘贴事件
   */
  pasteEvent() {
    if (!this.isFriend) {
      this.detectIsOpenAtList();
    }
  }

  /**
   * focusEvent
   */
  focusEvent(event: any) {
    event.stopPropagation();
    this.isShowMoreIcons = false;
  }


  /**
   * 发送消息
   */
  sendMessage(event: any) {
    event.stopPropagation();
    if (this.messageData.length != 0) {
      //是否要替换@用户
      if (this.atUserList && !this.isFriend) {
        this.atUserList.forEach((user: any) => {
          let toFind = new RegExp('(@' + user.work_name + ') {1}', "g"); //注意work_name后的空格，如果去除，匹配中文结尾会有问题
          let replace = '<@USER|' + user.uid + '>  ';
          this.messageData = this.messageData.replace(toFind, replace);
        });
      }
      let data: any = {
        msg: this.messageData,
        type: ChatConfig.CHAT_MESSAGE_TYPE_TEXT,
      };
      this.outSendMessage.emit(data);
    }
  }

  /**
   * 判断最后一个字母是否是@
   */
  detectIsOpenAtList() {
    let lastCode: string = this.messageData.substring(this.messageData.length - 1, this.messageData.length);
    if (lastCode === '@') {
      this.isShowAtList = true;
    } else {
      this.isShowAtList = false;
    }
  }


  /**
   * 点击显示@人员列表
   */
  showAtList(event: any) {
    event.stopPropagation();
    this.messageData = this.messageData + '@';
    this.detectIsOpenAtList();
  }


  keyDownEvent(event: KeyboardEvent) {
    event.stopPropagation();
  }


  /**
   * atClickPerson
   */
  atClickPerson(event: any, item: any, input: any) {
    event.stopPropagation();
    this.messageData = this.messageData + item.work_name + ' ';
    this.isShowAtList = false;
    input.focus();
  }

  /**
   * 显示更多图标
   */
  showMoreIcons(event: any) {
    event.stopPropagation();
    this.isShowMoreIcons = !this.isShowMoreIcons;
  }


  /**
   * 调用手机相册/或者相机
   */
  showPhonePic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Image',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.showCamera();
          }
        }, {
          text: 'Albums',
          handler: () => {
            this.showAlbums();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 调用摄像头
   */
  showCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData', imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  showAlbums() {
    let modal = this.modalCtrl.create(PublicAlbumsComponent);
    modal.present();
  }


}
