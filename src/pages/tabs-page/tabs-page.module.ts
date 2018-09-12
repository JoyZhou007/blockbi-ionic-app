/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/25.
 */

import { TabsPage } from "./tabs-page";
import { SharedModule } from "../../share/shared.module";
import { IonicPageModule } from "ionic-angular";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [TabsPage],
  imports: [
    SharedModule,
    IonicPageModule.forChild(TabsPage)
  ]
})
export class TabsPageModule {
}
