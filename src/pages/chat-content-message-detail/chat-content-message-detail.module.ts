import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatContentMessageDetailComponent } from './chat-content-message-detail';
import {ChatContentPageModule} from "../chat-content/chat-content.module";


@NgModule({
  declarations: [
    ChatContentMessageDetailComponent,
  ],
  imports: [
    ChatContentPageModule,
    IonicPageModule.forChild(ChatContentMessageDetailComponent),
  ],
})
export class ChatContentMessageDetailComponentModule {}
