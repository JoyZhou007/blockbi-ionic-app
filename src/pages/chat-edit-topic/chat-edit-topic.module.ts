import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatEditTopicComponent } from './chat-edit-topic';

@NgModule({
  declarations: [
    ChatEditTopicComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatEditTopicComponent),
  ],
})
export class ChatEditTopicComponentModule {}
