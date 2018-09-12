import { NgModule } from '@angular/core';
import {ForgetPasswordComponent} from "./forget-password";
import {IonicPageModule} from "ionic-angular";
import {SharedModule} from "../../share/shared.module";
@NgModule({
	declarations: [ForgetPasswordComponent],
	imports: [
    IonicPageModule.forChild(ForgetPasswordComponent),
    SharedModule,
  ],
	exports: [ForgetPasswordComponent]
})
export class ComponentsModule {}
