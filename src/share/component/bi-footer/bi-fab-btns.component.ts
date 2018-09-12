/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import {Component, Renderer, ViewChild} from "@angular/core";
import {
  NavController, Platform, ViewController, Tab, Events, ModalController,
  FabContainer
} from "ionic-angular";
import {EventNameConfig} from "../../config/event-name.config";

@Component({
  selector: 'bi-fab-btns',
  templateUrl: 'bi-fab-btns.html'
})
export class BiFabBtnsComponent {
  public tabHome: string = 'home';
  public tabChat: string = 'chat';
  public tabFolder: string = 'folder';
  public tabMission: string = 'mission';
  public buttons: Array<any> = [];
  private currentUrl: string = '';
@ViewChild('addBtn') public addBtn:any;
  constructor(public nav: NavController,
              private event: Events,
              public view: ViewController,
              public renderer: Renderer,
              public modalCtrl: ModalController,
              public plt: Platform) {

  }

  initButtons(tabs: Tab) {
    this.currentUrl = this.nav.getActive() ? this.nav.getActive().id : '';
    switch (tabs.root) {
      case this.tabChat:
        this.buttons = [
          {label: 'NEW CHAT CHANNEL', key: '2-1'},
          {label: 'NEW POST', key: '2-2'},
        ];
        break;
      case this.tabFolder:
        this.buttons = [
          {label: 'NEW FOLDER', key: '3-1'},
          {label: 'UPLOAD FILES', key: '3-2'},
        ];
        break;
      case this.tabMission:
        this.buttons = [
          {label: 'NEW MEETING', key: '4-1'},
          {label: 'NEW ASSIGNMENT', key: '4-2'},
          {label: 'NEW PROJECT', key: '4-3'},
          {label: 'NEW APPLICATION', key: '4-4'},
          {label: 'NEW TASK', key: '4-5'},
        ];
        break;
      case this.tabHome:
      default:
        this.buttons = [
          {label: 'invite people', key: '1-1'},
          {label: 'application of leave', key: '1-2'},
          {label: 'out of office', key: '1-3'},
          {label: 'clocking in', key: '1-4'},
          {label: 'new tips', key: '1-5'}
        ];
        break;
    }
    console.log(' this.buttons ', this.buttons);
  }

  /**
   * adding a transition when pushing a new page
   * @param url
   */
  navTo(url: string) {
    let currentUrl = this.nav.getActive().id;
    if (currentUrl !== url) {
      this.nav.push(url).then(() => {
        const index = this.view.index;
        this.nav.remove(index);
      });
    }
  }

  expandPlusByRouter(event: any) {
    event.stopPropagation();
    console.log('event', event);
  }

  /**
   *
   */
  clickOnButtons(btn: any, fab: FabContainer) {
    this.addBtn.nativeElement.click();
    switch (btn.key) {
      case '2-1':
        this.event.publish(EventNameConfig.NEW_CHANNEL, {param: 'new-channel'});
        break;
      case '3-2':
        this.event.publish(EventNameConfig.UPLOAD_FILE, {param: 'upload-file', data: {}});
        break;
      case '1-5':
        this.event.publish(EventNameConfig.NEW_TIPS, {param: 'new-tips'});
        break;
      case '1-1':
        this.nav.push('invite-people');
        break;
    }
    fab.close();
  }

  /**
   * 点击添加
   */
  clickAdd(){
    let global = document.querySelector('.global-tab');
    let className = global.className;
    if(className.indexOf('filter') == -1){
      this.renderer.setElementClass(global, 'filter', true);
    }else{
      this.renderer.setElementClass(global, 'filter', false);
    }

  }

}
