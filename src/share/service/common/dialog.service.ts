/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
import {Dialogs} from "@ionic-native/dialogs";
import {Injectable} from "@angular/core";
import {AlertController} from "ionic-angular";

@Injectable()
export class DialogService {
  constructor(private dialogs: Dialogs,
              private alertCtrl: AlertController) {
  }

  /**
   * alert框
   * @return {Promise<void>}
   */
  alert(text: any) {
    return this.dialogs.alert(text)
      .then(() => console.log('Dialog alert dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }

  confirm() {
    this.dialogs.confirm('confirm!')
      .then(() => console.log('Dialog confirm dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }


  /**
   * basic 基础警告框
   */
  showAlert(title?: string, subTitle?: string,callback?:Function) {
    let alert = this.alertCtrl.create({
      title: title ? title : 'warning',
      subTitle: subTitle ? subTitle : '',
      buttons: [{
        text: 'OK',
        handler: () => {
          if(callback){
            callback();
          }
        }
      }]
    });
    alert.present();
  }

  showConfirm(title: string, message: string, callback?: Function) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            if(callback) {
              callback();
            }
          }
        }
      ]
    });
    confirm.present();
  }


}