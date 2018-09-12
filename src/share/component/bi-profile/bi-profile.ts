import { Component, Inject, Input } from '@angular/core';
import { UserCompanyEntity, UserEntity } from "../../entity/user-entity";
import { EventNameConfig } from "../../config/event-name.config";
import { Events } from "ionic-angular";

/**
 * Generated class for the BiProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bi-profile',
  templateUrl: 'bi-profile.html'
})
export class BiProfileComponent {

  private _contact: UserCompanyEntity | UserEntity;
  private _group: string;
  @Input('group') set group(data: string) {
    this._group = data;
  }
  @Input('contact') set contact(data: any) {
    this._contact = data;
  }
  get contact(){
    return this._contact;
  }
  get group(){
    return this._group;
  }
  constructor(public event: Events, @Inject('app.config') public appConfig: any) {
  }

  /**
   * 查看人物详情
   */
  openProfileDetail(contact: any){
    // 关闭菜单
    //this.sideMenu.close();
    console.log('openProfileDetail', contact);
    this.event.publish(EventNameConfig.ROUTER_TO, {toUrl: 'contact-details', data: {contact: contact}});
  }

}
