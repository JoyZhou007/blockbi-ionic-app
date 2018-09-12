import { NgModule } from '@angular/core';
import {GuideComponent} from "./guide";
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [GuideComponent],
	imports: [
    IonicPageModule.forChild(GuideComponent),
  ],
	exports: [GuideComponent]
})
export class GuideModule {}
