import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PublicSelectComponent} from './public-select';

@NgModule({
  declarations: [
    PublicSelectComponent,
  ],
  imports: [
    IonicPageModule.forChild(PublicSelectComponent),
  ],
})
export class PublicSelectPageModule {}
