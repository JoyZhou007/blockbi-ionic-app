import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailsPage } from './contact-details';
import { ContactCompanyIntroComponent } from "./components/contact-company-intro/contact-company-intro";
import { ContactCompanyAnalysisComponent } from "./components/contact-company-analysis/contact-company-analysis";
import { ContactPersonalAnalysisComponent } from "./components/contact-personal-analysis/contact-personal-analysis";
import { ContactResumeComponent } from "./components/contact-resume/contact-resume";
import { ContactGeneralComponent } from "./components/contact-general/contact-general";
import {SharedModule} from "../../share/shared.module"


@NgModule({
  declarations: [
    ContactDetailsPage,
    ContactGeneralComponent,
    ContactCompanyIntroComponent,
    ContactCompanyAnalysisComponent,
    ContactPersonalAnalysisComponent,
    ContactResumeComponent,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailsPage),
    SharedModule

  ],
})
export class ContactDetailsPageModule {}
