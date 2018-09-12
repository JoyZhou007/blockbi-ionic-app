import {Component, Input} from '@angular/core';
import * as UserConfig from '../../../share/config/user.config';

/**
 * Generated class for the ChatUserStateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-user-state',
  templateUrl: 'chat-user-state.html'
})
export class ChatUserStateComponent {

  text: string;
  userInfo: any;
  public userState: number;
  public userConfig:any = UserConfig;

  constructor() {
    console.log('Hello ChatUserStateComponent Component');
    this.text = 'Hello World';
  }


  @Input() set setUserState(param: any) {
    if (param) {
      this.userInfo = param;
      this.userState = this.userInfo.state;
    }
  }

}
