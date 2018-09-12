import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatNewChannelComponent} from './chat-new-channel';
import {SharedModule} from "../../share/shared.module";

@NgModule({
  declarations: [
    ChatNewChannelComponent,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ChatNewChannelComponent)
  ],
})
export class ChatNewChannelPageModule {
}
