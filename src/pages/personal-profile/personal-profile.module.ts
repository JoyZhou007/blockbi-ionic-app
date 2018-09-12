import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalProfilePage } from './personal-profile';

@NgModule({
  declarations: [
    PersonalProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalProfilePage),
  ],
})
export class PersonalProfilePageModule {}
