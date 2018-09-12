import {Component, Input} from '@angular/core';
import {UserModelService} from '../../../../share/service/model/user-model.service';
import {ModalController} from "ionic-angular";
import {ContactAddFriendPage} from "../../../contact-add-friend/contact-add-friend";
/**
 * Generated class for the ContactGeneralComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contact-general',
  templateUrl: 'contact-general.html'
})

export class ContactGeneralComponent {
  public currentUid: string;
  public company: Array<any> = [];
  public individual: any = {};
  private noCompany: boolean = false;
  private contact: any;

  @Input('currentContact') set currentContact(data: any) {
    if (data) {
      console.log('contact general::', data);
      this.contact = data;
      this.currentUid = data.uid || data.psid || data.uuid;
      this.getGeneralInfo();
    }
  }

  constructor(public userModelService: UserModelService,
              public modalCtrl: ModalController) {
    console.log('Hello ContactGeneralComponent Component');
  }

  ionViewDidLoad() {

  }

  getGeneralInfo() {
    this.userModelService.fetchFriendInfo({'uid': this.currentUid, 'personal_module': 'general'}, (response) => {
      if (response && response.status == 1) {
        if (response.hasOwnProperty('data')) {
          if (response.data.company) {
            this.noCompany = false;
            this.company = response.data.company;
          } else {
            this.noCompany = true;
          }
          if (response.data.individual) {
            this.individual = response.data.individual;
          }
          if (response.data.uuid) {
            this.contact.uuid = response.data.uuid;
          }
        }
      }
    })
  }

  /**
   * 添加Cooperator好友
   */
  addNewCooperator(event: any, cp: any) {
    event.stopPropagation();
    cp.psid = cp.uid;
    let modal = this.modalCtrl.create(ContactAddFriendPage, {data: cp, friendType: 2});
    modal.present();
  }


}
