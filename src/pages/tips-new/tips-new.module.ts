import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTipsPage } from './tips-new';
import {SharedModule} from "../../share/shared.module";

@NgModule({
  declarations: [
    NewTipsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(NewTipsPage),
  ],
})
export class NewTipsPageModule {}
