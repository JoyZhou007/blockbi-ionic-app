/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
import { NgModule } from "@angular/core";
import { LoginPage } from "./login";
import { IonicPageModule } from "ionic-angular";
import { SharedModule } from "../../share/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    SharedModule,
    FormsModule,
    IonicPageModule.forChild(LoginPage),
    ReactiveFormsModule,
  ]
})
export class LoginPageModule {
}
