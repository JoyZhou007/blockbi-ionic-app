import {Component, Input, Inject} from '@angular/core';
import {UserModelService} from '../../../../share/service/model/user-model.service';
/**
 * Generated class for the ContactIntroComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contact-company-intro',
  templateUrl: 'contact-company-intro.html'
})
export class ContactCompanyIntroComponent {
  public currentUid: string = '';
  public general: {
    amount_dept: number,
    amount_employee: number,
    description: string,
    found_date: string,
    industry: string,
    name: string
  };
  public privacy = {
    address: '',
    builder: [],
    owner: [],
    parent: [],
    share_holder: [],
    structure_admin: []
  }

  @Input('currentContact') set currentContact(data: any) {
    if (data) {
      this.currentUid = data.uid || data.psid;
      // uid | psid
      console.log('**********', data);
      this.getConpanyInfo();
    }
  }

  constructor(public userModelService: UserModelService,
              @Inject('app.config') public config) {
    console.log('Hello ContactIntroComponent Component');
    this.initGeneral();
  }

  /**
   * 获取公司信息
   */
  getConpanyInfo() {
    this.userModelService.fetchFriendInfo({'uid': this.currentUid, 'personal_module': 'introduction'}, (response) => {
      if (response && response.status == 1) {
        if (response.hasOwnProperty('data')) {
          console.log('>>>>>>>>', response);
          if (response.data.hasOwnProperty('general')) {
            Object.assign(this.general, response.data.general);
            console.log('>>>>>>>>**', this.general);
          }
          if (response.data.hasOwnProperty('privacy')) {
            if (response.data.privacy.hasOwnProperty('address')) {
              this.privacy.address = response.data.privacy.address
            }
            if (response.data.privacy.hasOwnProperty('builder')) {
              this.privacy.builder = response.data.privacy.builder
            }
            if (response.data.privacy.hasOwnProperty('owner')) {
              this.privacy.owner = response.data.privacy.owner
            }
            if (response.data.privacy.hasOwnProperty('parent')) {
              this.privacy.parent = response.data.privacy.parent
            }
            if (response.data.privacy.hasOwnProperty('share_holder')) {
              this.privacy.share_holder = response.data.privacy.share_holder
            }
            if (response.data.privacy.hasOwnProperty('structure_admin')) {
              this.privacy.structure_admin = response.data.privacy.structure_admin
            }
            console.log('&&&&&&', this.privacy);
          }
        }
      }
    })
  }

  /**
   * 初始化general
   */
  initGeneral() {
    this.general = {
      amount_dept: -1,
      amount_employee: -1,
      description: '',
      found_date: '',
      industry: '',
      name: ''
    };
  }
}
