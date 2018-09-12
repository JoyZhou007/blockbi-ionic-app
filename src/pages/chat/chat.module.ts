/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChatPage } from "./chat";
import { SharedModule } from "../../share/shared.module";
import {ChatMenuComponent} from "./chat-menu/chat-menu";

@NgModule({
  declarations: [
    ChatPage,
    ChatMenuComponent
  ],
  imports: [IonicPageModule.forChild(ChatPage), SharedModule],
})
export class ChatPageModule {
  constructor() {
  }


}
