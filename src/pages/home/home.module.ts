/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
//home.module.ts
import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { SharedModule } from "../../share/shared.module";
import { IonicPageModule } from "ionic-angular";
import {HomeTipsComponent} from "./components/home-tips/home-tips";
@NgModule({
  declarations: [HomePage, HomeTipsComponent],
  imports: [
    SharedModule,
    IonicPageModule.forChild(HomePage),
  ]
})
export class HomePageModule {
}
