import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatShareDialogPage } from './chat-share-dialog';

@NgModule({
  declarations: [
    ChatShareDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatShareDialogPage),
  ],
})
export class ChatShareDialogPageModule {}
