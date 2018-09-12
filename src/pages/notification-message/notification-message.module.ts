import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationMessageComponent } from './notification-message';
import {NotificationChatInviteComponent} from "./notification-chat-invite/notification-chat-invite";
import {NotificationNewContactComponent} from "./notification-new-contact/notification-new-contact";

@NgModule({
  declarations: [
    NotificationMessageComponent,
    NotificationChatInviteComponent,
    NotificationNewContactComponent
  ],
  // entryComponents:[
  //   NotificationMessageComponent,
  // ],
  imports: [
    IonicPageModule.forChild(NotificationMessageComponent),
  ],
})
export class NotificationMessageComponentModule {}
