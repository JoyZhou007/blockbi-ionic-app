/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LogoutPage } from "./logout";
import { SharedModule } from "../../share/shared.module";

@NgModule({
  declarations: [LogoutPage],
  imports: [IonicPageModule.forChild(LogoutPage), SharedModule]
})
export class LogoutPageModule {
}
