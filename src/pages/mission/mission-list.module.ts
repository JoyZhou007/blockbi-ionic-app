/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MissionListPage } from "./mission-list";
import { SharedModule } from "../../share/shared.module";


@NgModule({
  declarations: [
    MissionListPage,
  ],
  imports: [
    IonicPageModule.forChild(MissionListPage),
    SharedModule
  ]
})
export class MissionListPageModule {
}
