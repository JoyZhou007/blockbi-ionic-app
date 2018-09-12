import {Component, Inject, ViewChild} from "@angular/core";
import {App, Events, IonicPage, ModalController} from "ionic-angular";
import {NewTipsPage} from '../tips-new/tips-new';
import {EventNameConfig} from "../../share/config/event-name.config";

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  public currentUser: string;
  public initDashBoard: boolean = false;
  @ViewChild('tipComponent') public tipComponent;
  private isRefresh: {
    isRefresh: true,
    refreshObj: any
  };

  constructor(public app: App,
              public events: Events,
              public modalCtrl: ModalController,
              @Inject('user.service') public userService: any,
              @Inject('user-store.service') public userStoreService: any) {
    if (!this.currentUser) {
      this.userStoreService.getCurrentUserName((v) => {
        this.currentUser = v;
      }).then().catch();
    }
  }

  ngAfterViewInit() {
    this.newTip()
  }

  newTip() {
    this.events.subscribe(EventNameConfig.NEW_TIPS, (param: any) => {
      let url = param.param;
      switch (url) {
        case 'new-tips' :
          console.log('home::', param);
          let modal = this.modalCtrl.create(NewTipsPage, {tips: 45454});
          modal.present();
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.NEW_TIPS);
  }

  ionViewDidEnter() {
    this.events.subscribe('contact-is-ready', () => {
      this.initDashBoard = true;
    });
    this.app.setTitle('Homepage');
  }

  doLogout() {
    this.userService.logoutViaAPI();
  }

  /**
   * 上拉刷新
   * @param event
   */
  doRefresh(event: any) {
    this.isRefresh = {
      isRefresh: true,
      refreshObj: event
    };
  }
}
