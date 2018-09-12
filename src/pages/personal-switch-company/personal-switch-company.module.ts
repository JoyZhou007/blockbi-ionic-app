import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalSwitchCompanyPage } from './personal-switch-company';

@NgModule({
  declarations: [
    PersonalSwitchCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalSwitchCompanyPage),
  ],
})
export class PersonalSwitchCompanyPageModule {}
