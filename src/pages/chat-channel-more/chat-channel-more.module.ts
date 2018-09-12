import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatChannelMoreComponent } from './chat-channel-more';

@NgModule({
  declarations: [
    ChatChannelMoreComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatChannelMoreComponent),
  ],
})
export class ChatChannelMoreComponentModule {}
