import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatContentComponent} from './chat-content';
import {ChatContentMessageTextComponent} from "./chat-content-message-text/chat-content-message-text";
import {ChatContentMessagePostComponent} from "./chat-content-message-post/chat-content-message-post";
import {ChatContentMessageImgComponent} from "./chat-content-message-img/chat-content-message-img";
import {ChatContentMessageFileComponent} from "./chat-content-message-file/chat-content-message-file";
import {ChatContentMessageSystemComponent} from "./chat-content-message-system/chat-content-message-system";
import {ChatContentInputComponent} from "./chat-content-input/chat-content-input";
import {ChatUserStateComponent} from "./chat-user-state/chat-user-state";

@NgModule({
  declarations: [
    ChatContentComponent,
    ChatContentMessageTextComponent,
    ChatContentMessagePostComponent,
    ChatContentMessageImgComponent,
    ChatContentMessageFileComponent,
    ChatContentMessageSystemComponent,
    ChatContentInputComponent,
    ChatUserStateComponent
  ],
  exports: [
    ChatContentMessageTextComponent,
    ChatContentMessagePostComponent,
    ChatContentMessageImgComponent,
    ChatContentMessageFileComponent,
    ChatContentMessageSystemComponent,
    ChatUserStateComponent
  ],
  imports: [
    IonicPageModule.forChild(ChatContentComponent),
  ],
})
export class ChatContentPageModule {
}
