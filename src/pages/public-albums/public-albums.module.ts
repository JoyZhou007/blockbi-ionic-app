import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicAlbumsComponent } from './public-albums';

@NgModule({
  declarations: [
    PublicAlbumsComponent,
  ],
  imports: [
    IonicPageModule.forChild(PublicAlbumsComponent),
  ],
})
export class PublicAlbumsComponentModule {}
