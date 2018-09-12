import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatInviteMemberComponent } from './chat-invite-member';

@NgModule({
  declarations: [
    ChatInviteMemberComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatInviteMemberComponent),
  ],
})
export class ChatInviteMemberComponentModule {}
