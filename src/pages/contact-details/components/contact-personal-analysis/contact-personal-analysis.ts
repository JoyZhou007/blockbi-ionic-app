import {Component, Input,Inject} from '@angular/core';
import {UserModelService} from "../../../../share/service/model/user-model.service";
import {PersonalModelService} from "../../../../share/service/model/personal-model.service";
const SKILL_LEVEL: Array<string> = ['Elementary level', 'Limited working level', 'Professional level', 'Native level'];
const SKILL_LEVEL_ZH: Array<string> = ['基础等级', '限于工作', '专业等级', '国家级别'];

/**
 * Generated class for the ContactPersonalAnalysisComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'contact-personal-analysis',
  templateUrl: 'contact-personal-analysis.html',
  providers:[PersonalModelService]
})
export class ContactPersonalAnalysisComponent {
  public currentUid: string = '';
  public skillNameList: Array<any>;
  public skillList: Array<any> = [];
  public skillLevel: Array<string> = [];


  @Input('currentContact') set currentContact(data: any) {
    if (data) {
      console.log('contact general::', data);
      this.currentUid = data.psid || data.uuid || data.uid;
      this.getAnalysis();
    }
  }

  constructor(public userModelService: UserModelService,
              @Inject('app.config') public config,
              public personalModelService: PersonalModelService,) {
    console.log('Hello ContactPersonalAnalysisComponent Component');
    this.skillLevel = SKILL_LEVEL_ZH;
    this.getSkillJson();
  }

  /**
   * 获取skill json
   */
  getSkillJson() {
    //请求json文件
    if (!this.skillNameList) {
      this.personalModelService.queryJson(
        'GET',
        'assets/json/skill.json',
        '',
        (data: any) => {
          console.log(data,"skill list");
          this.skillNameList = data;
          this.getAnalysis();
        }
      );
    } else {
      this.getAnalysis();
    }
  }

  /**
   * 获取skill 列表
   */
  getAnalysis() {
    this.userModelService.fetchFriendInfo({'uid': this.currentUid, 'personal_module': 'user_analysis'}, (response) => {
     if(response && response.status == 1){
       console.log('response::::', response);
        if(response.hasOwnProperty('data')){
          this.skillList = response.data.skill;
        }
     }else{
       //todo: 获取失败
     }
    })
  }
}
