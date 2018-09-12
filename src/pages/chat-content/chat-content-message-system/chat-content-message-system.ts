import {Component, Inject, Input} from '@angular/core';
import {ChatMessage} from "../../../share/entity/chat-entity";

/**
 * Generated class for the ChatContentMessageSystemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-content-message-system',
  templateUrl: 'chat-content-message-system.html'
})
export class ChatContentMessageSystemComponent {

  public messageObj: ChatMessage;

  constructor(@Inject('app.config') public appConfig) {
  }

  @Input() set setMessage(param: any) {
    if (param) {
      this.messageObj = param;
    }
  }

}
