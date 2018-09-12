import {Component, Inject, ViewChild} from "@angular/core";
import {Events, ModalController, Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {NotificationConfig} from "../share/config/notification.config";
import {NotificationEntity} from "../share/entity/notification-entity";
import {ApiService} from "../share/service/api/api.service";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {EventNameConfig} from "../share/config/event-name.config";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabHasInit: boolean = false;
  rootPage: any;
  loginStatus: boolean = false;
  @ViewChild('appContent') public appContent: any;
  @ViewChild(Nav) nav: Nav;


  constructor(public platform: Platform,
              public statusBar: StatusBar,
              private events: Events,
              public splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              public barcodeScanner: BarcodeScanner,
              @Inject('dialog.service') public dialogService: any,
              @Inject('user.service') public userService: any) {
    this.platformReady();
    this.platformResume();

  }

  platformResume() {
    this.platform.resume.subscribe(e => {
      this.onResume();
    });
  }

  platformReady() {
    this.dealEvent();
    this.dealWebSocketNotification();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.userService.checkIsLogin((v) => {
        console.log('app init check login ?', v);

      });
    });
  }

  onResume() {
    console.log('resuming');
  }

  scanTest2() {
    this.barcodeScanner.scan({
      showFlipCameraButton: true,
      prompt: "Place a qrcode inside the scan area",
      formats: "QR_CODE",
      showTorchButton: true, // iOS and Android
      resultDisplayDuration: 0,
      disableSuccessBeep: true
    }).then((barcodeData) => {
      // Success! Barcode data is here
      console.log('barcodeData', barcodeData);
    }, (err) => {
      // An error occurred
    });
  }

  /**
   * 自定义通知处理
   */
  dealEvent() {
    //用户退出登录
    this.events.subscribe(EventNameConfig.TAB_PAGE_ENTERED, () => {
      this.tabHasInit = true;
    });
    this.events.subscribe(EventNameConfig.USER_LOGOUT, () => {
      this.loginStatus = false;
      this.tabHasInit = false;
      this.nav.setRoot('login');
    });
    //用户登录
    this.events.subscribe(EventNameConfig.USER_LOGIN, () => {
      if (!this.loginStatus) {
        this.loginStatus = true;
      }
      if (this.nav.root != 'tab-page' && !this.tabHasInit) {
        //this.nav.setRoot('tabs-page');
        this.nav.setRoot('tabs-page');
      }
    });
    //跳转
    this.events.subscribe(EventNameConfig.ROUTER_TO, (param: any) => {
      let url = param.toUrl;
      console.log('dealEvent routerTo ' + url + ' param');
      switch (url) {
        case 'contact-details':
          if (param && param.hasOwnProperty('data') && param.data.hasOwnProperty('contact')) {
            let contact = param.data.contact;
            let contactId = contact.hasOwnProperty('psid') ? contact.psid : contact.uuid;
            if(typeof contactId == 'undefined' &&  contact.hasOwnProperty('uid')){
              contactId = contact.uid;
            }
            let profileModal = this.modalCtrl.create('contact-details',
              {contactId: contactId, contact: contact},
              {showBackdrop: true}
            );
            profileModal.present();
          }
          break;
        case 'homepage':
        default:
          if (this.nav.getActiveChildNavs().length) {
            this.nav.getActiveChildNavs()[0].select(0);
          }
      }
    });
  }

  /**
   * IM通知处理
   */
  dealWebSocketNotification() {
    this.events.subscribe(EventNameConfig.NOTIFICATION_GLOBAL, (param: NotificationEntity) => {
      if (param) {
        switch (param.act) {
          case NotificationConfig.ACT_USER_SESSION_EXPIRED:
          case ApiService.ERROR_CODE_SESSION_EXPIRED:
            this.loginStatus = false;
            this.dialogService.alert('Your Session has been expired, please re login').then(this.userService.logoutViaAPI());
            break;
          case NotificationConfig.ACT_SYSTEM_IM_LOGIN:
            if (param.status === 1) {
              console.log('im 登录成功 需要读取在线状态')
            }
            break
        }
      }
    })
  }


}

