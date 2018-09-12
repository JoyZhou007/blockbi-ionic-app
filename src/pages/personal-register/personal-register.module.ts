import { NgModule } from '@angular/core';
import {PersonalRegisterComponent} from "./personal-register";
import { IonicPageModule } from "ionic-angular";
import {SharedModule} from "../../share/shared.module";
@NgModule({
	declarations: [PersonalRegisterComponent],
	imports: [
	  IonicPageModule.forChild(PersonalRegisterComponent),
    SharedModule,
  ]
})
export class PersonalRegisterModule {}
