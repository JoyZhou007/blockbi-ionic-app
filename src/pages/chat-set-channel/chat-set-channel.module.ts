import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatSetChannelComponent } from './chat-set-channel';

@NgModule({
  declarations: [
    ChatSetChannelComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatSetChannelComponent),
  ],
})
export class ChatSetChannelPageModule {}
