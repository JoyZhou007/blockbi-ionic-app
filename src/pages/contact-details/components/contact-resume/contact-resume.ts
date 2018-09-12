import {Component, Input} from '@angular/core';
import {UserModelService} from '../../../../share/service/model/user-model.service';
/**
 * Generated class for the ContactResumeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contact-resume',
  templateUrl: 'contact-resume.html'
})
export class ContactResumeComponent {
  public currentUid: string;
  public educations: Array<{
    description: string,
    end_date: string,
    id: string,
    major: string,
    school: string,
    start_date: string
  }> = [];
  public experiences: Array<{
    company: string,
    description: string,
    end_date: string,
    finial_position: string,
    id: string,
    initial_position: string,
    start_date: string
  }> = [];


  @Input('currentContact') set currentContact(data: any) {
    if (data) {
      console.log('**********', data);
      this.currentUid = data.uid;
      this.getResumeInfo();
    }
  }

  constructor(public userModelService: UserModelService) {
    console.log('Hello ContactResumeComponent Component');
  }

  getResumeInfo() {
    this.userModelService.fetchFriendInfo({'uid': this.currentUid, 'personal_module': 'resume'}, (response) => {
      if (response && response.status == 1) {
        console.log(response, "resume data:::");
        if (response.hasOwnProperty('data')) {
          this.educations = response.data.educations;
          this.experiences = response.data.experiences;
        }
      }
    })
  }
}
