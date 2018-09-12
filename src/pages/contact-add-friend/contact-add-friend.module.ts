import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactAddFriendPage } from './contact-add-friend';

@NgModule({
  declarations: [
    ContactAddFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactAddFriendPage),
  ],
})
export class ContactAddFriendPageModule {}
