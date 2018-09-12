import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {InvitePeopleComponent} from "./invite-people";
@NgModule({
	declarations: [InvitePeopleComponent],
	imports: [
    IonicPageModule.forChild(InvitePeopleComponent)
  ],
})
export class InvitePeopleModule {}
