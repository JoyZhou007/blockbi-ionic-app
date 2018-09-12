import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipsDetailPage } from './tips-detail';
import { SharedModule } from "../../share/shared.module";
@NgModule({
  declarations: [
    TipsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TipsDetailPage),
    SharedModule,
  ],
})
export class TipsDetailPageModule {}
