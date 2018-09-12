import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatForwardDialogComponent } from './chat-forward-dialog';

@NgModule({
  declarations: [
    ChatForwardDialogComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatForwardDialogComponent),
  ],
})
export class ChatForwardDialogComponentModule {}
