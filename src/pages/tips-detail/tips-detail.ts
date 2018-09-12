import {Component, ViewChild, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, AlertController, ModalController, Events} from 'ionic-angular';
import {Tips} from "../../share/entity/user-entity";
import {UserModelService} from "../../share/service/model/user-model.service";
import {NewTipsPage} from "../tips-new/tips-new";
import {EventNameConfig} from "../../share/config/event-name.config";
/**
 * Generated class for the TipsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips-detail',
  templateUrl: 'tips-detail.html',
})
export class TipsDetailPage {

  public tipsList: Array<Tips> = [];
  public currentTips: Tips;
  public currentIndex: number = -1;
  private tab: string = 'all';
  @ViewChild('mySlides') public slides: Slides;
  private noData: boolean = false;

  constructor(public navCtrl: NavController,
              public userModelService: UserModelService,
              public events: Events,
              @Inject('app.config') public config: any,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    if (this.navParams.data && this.navParams.data.tipData) {
      if (this.navParams.data.tipData.hasOwnProperty('tipsList')) {
        this.tipsList = this.navParams.data.tipData.tipsList;
      }
      if (this.navParams.data.tipData.hasOwnProperty('current')) {
        this.currentIndex = this.navParams.data.tipData.current;
        this.currentTips = this.tipsList[this.currentIndex];
      }
    }
  }

  ionViewDidLoad() {
    this.slides.coverflow.rotate = 10;
    console.log('ionViewDidLoad TipsDetailPage');
    this.dealEvent();
  }

  /**
   * 处理接受事件
   */
  dealEvent() {
    //接收消息
    this.events.subscribe(EventNameConfig.UPDATE_TIPS, (param: any) => {
      let data = param.param;
      switch (data) {
        case 'update-tips' :
          this.tipsList[param.data.currentIndex].content = param.data.tips.content;
          console.log('update tips::', this.tipsList[param.data.currentIndex].content, param.data);
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.UPDATE_TIPS);
  }

  /**
   * 滑动下一个
   */
  clickNext() {
    if (this.currentIndex < this.tipsList.length - 1) {
      this.currentIndex++;
    }
  }

  /**
   * 滑动上一个
   */
  clickPre() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  /**
   * 点击tip
   * @param event
   */
  onClickTips(event: any, type: string) {
    if (event) {
      event.stopPropagation();
    }
    //
    if (type == 'tips') {
      this.tab = 'tips';
      this.slides.slideTo(0);
      this.currentIndex =this.findFirstIndex('tips');
      if (this.findFirstIndex('tips') == -1) {
        this.noData = true;
      } else {
        this.noData = false;
      }
      this.slides.slideTo(0);
    } else if (type == 'all') {
      this.tab = 'all';
    } else if (type == 'mission') {
      this.tab = 'mission';
      this.slides.slideTo(0);
      this.currentIndex = this.findFirstIndex('mission');
      if (this.findFirstIndex('mission') == -1) {
        this.noData = true;
      } else {
        this.noData = false;
      }
    }
  }

  /**
   * 查找第一个tips ， mission所在的索引
   * @param type
   * @returns {number}
   */
  findFirstIndex(type: string): number {
    //是tips true ， mission false
    if (this.tipsList[0]) {
      let first = this.tipsList[0].hasOwnProperty('form');
      if (first) {
        if (type == 'tips') {
          return 0;
        } else {
          for (let i = 0; i < this.tipsList.length; i++) {
            if (!this.tipsList[i].hasOwnProperty('form')) {
              return i;
            }
          }
          return -1;
        }
      } else {
        if (type == 'mission') {
          return 0;
        } else {
          for (let i = 0; i < this.tipsList.length; i++) {
            if (this.tipsList[i].hasOwnProperty('form')) {
              return i;
            }
          }
          return -1;
        }
      }
    } else {
      return -1;
    }

  }

  /**
   * 删除tips
   * @param tips
   * @param index
   */
  onDeleteTips(tips: Tips, index: number) {
    //弹出confirm框
    let confirm = this.alertCtrl.create({
      title: 'confirm delete tip',
      message: 'Do you want to delete this tip?',
      buttons: [
        {
          text: 'CANCEL',
        },
        {
          text: 'DELETE',
          handler: () => {
            this.userModelService.deleteTips({data: {tip_id: tips.rid}}, (response) => {
              if (response && response.status == 1) {
                this.tipsList.splice(index, 1);
                if (index == this.tipsList.length) {
                  if (this.tipsList.length == 0) {
                    this.noData = true;
                    this.slides.slideTo(0);
                  } else {
                    this.slides.slidePrev();
                  }
                }
              }
            })
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * todo:owner是本人可以修改，增加couldEdit
   * @param event
   * @param tips
   * @param index
   */
  onEditTips(event: any, tips: Tips, index: number) {
    if (event) {
      event.stopPropagation();
    }
    let tipsData: any = {
      isShowChannel: false,
      tipData: {  //传入修改tips
        updateTips: true,
        data: tips,
        currentIndex: index
      }
    };
    let modal = this.modalCtrl.create(NewTipsPage, tipsData);
    modal.present();
  }

  /**
   * 查看人物详情
   */
  openProfileDetail(contact: any, type?: any) {
    let contactObj;
    if (type) {  //mission or tips 的 owner
      if (type == 'mission') {
        contactObj = contact.creator_info && contact.creator_info.user_info;
        /* contactObj.uid = contactObj.psid;*/
      } else {
        contactObj = contact.ownerInfo;
      }
      this.events.publish(EventNameConfig.ROUTER_TO, {
        toUrl: 'contact-details',
        data: {'contactId': contactObj.uid, 'contact': contactObj}
      });
    } else {
      this.events.publish(EventNameConfig.ROUTER_TO, {
        toUrl: 'contact-details',
        data: {'contactId': contact.uid, 'contact': contact}
      });
    }
  }

  /**
   * 点击向上一个翻
   * @param event
   */
  onClickPre(event: any){
    event.stopPropagation();
    if(!this.slides.isBeginning()){
      this.slides.slidePrev();
    }
  }

  /**
   * 点击向下一个翻
   * @param event
   */
  onClickNext(event: any){
    event.stopPropagation();
    if(!this.slides.isEnd()){
      this.slides.slideNext();
    }
  }
}
