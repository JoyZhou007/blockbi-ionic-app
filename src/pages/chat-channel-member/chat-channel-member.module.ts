import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatChannelMemberComponent } from './chat-channel-member';

@NgModule({
  declarations: [
    ChatChannelMemberComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatChannelMemberComponent),
  ],
})
export class ChatChannelMemberComponentModule {}
