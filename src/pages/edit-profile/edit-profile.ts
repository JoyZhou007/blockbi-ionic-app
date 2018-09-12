import {Component, Inject, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, Events, ActionSheetController} from 'ionic-angular';
import {PersonalModelService} from "../../share/service/model/personal-model.service";
import {ConstInterFaceService} from '../../share/service/model/const-interface.service';
import * as userConfig from '../../share/config/user.config';
import {EventNameConfig} from "../../share/config/event-name.config";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
  providers: [PersonalModelService, ConstInterFaceService]
})
export class EditProfilePage {
  public tabType: string = 'general';
  public userInfo: {
    birthday: string,
    country: string, //国家
    online: number,
    gender: string, //性别 ‘1’：Male  ‘2’：Female  other '3'
    first_name: string,
    last_name: string,
    uid: string,
    user_profile_path: string,
    work_name: string
  };
  private currentCountry: string = ''; //当前选择的国家
  private areaCountry: any; //国家列表
  public sendUserInfo: {
    birthday: string,
    country: string,
    first_name: string, last_name: string,
    gender: string,
    home_address: string,
    nation: string,
    work_name: string,
    bank_type: string,
    identity_card: string,
    wage_card: string,
    passport: string
  };
  public educationData: Array<{
    description: string,
    end_date: string,
    id: number,
    major: string,
    school: string,
    start_date: string,
    operation: number,  //删除 -1 ， 增加 1
    schoolError: boolean,
    timeError: boolean
  }> = [];
  public experienceData: Array<{
    company: string,
    description: string,
    end_date: string,
    finial_position: string,
    id: number,
    initial_position: string,
    company_id: number,
    tag: number,
    start_date: string,
    operation: number, //删除 -1 ， 增加 1
    companyError: boolean,
    timeError: boolean
  }> = [];
  public clickIcon: boolean = false;
  public female = userConfig.USER_GENDER_FEMALE;
  public male = userConfig.USER_GENDER_MALE;
  public other = userConfig.USER_GENDER_OTHER;
  public formGroup: FormGroup;
  public sGroup: FormGroup;
  public hasClickOnSend: boolean = false;


  @ViewChild('fabBtn') public fabBtn: any;
  private clicked: boolean = false;

  constructor(public navCtrl: NavController,
              public event: Events,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,
              public formBuilder: FormBuilder,
              @Inject('user-store.service') public userStoreService: any,
              @Inject('date.service') public dateService: any,
              public constInterFaceService: ConstInterFaceService,
              @Inject('app.config') public config,
              public personalModelService: PersonalModelService,
              public navParams: NavParams) {
    if (this.navParams.data) {
      this.userInfo = this.navParams.data.data;
    }
    this.clicked = false;
    this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
    this.personalModelService.getUserInfo({personal_module: 'general'}, (response) => {
      if (response && response.status == 1) {
        if (response.hasOwnProperty('data')) {
          if (response.data.hasOwnProperty('personal_information')) {
            this.userInfo = Object.assign(this.userInfo, response.data.personal_information);
            //国家初始化
            let countryType: string = this.userInfo.country ? this.userInfo.country : 'CN';
            this.constInterFaceService.initCountry(countryType, (data: string, list: any) => {
              this.currentCountry = data;
              this.areaCountry = list.setData;
              console.log('country::', this.currentCountry, this.areaCountry);
            });

          }
        }
      }
    })
    //初始化send obj
    this.initSendUserInfo();
  }

  /**
   * 切换general / resume
   * @param type
   */
  onClickTab(type: number) {
    if (type) {
      this.tabType = 'resume';
      if (!this.clicked) {
        this.personalModelService.getUserInfo({personal_module: 'resume'}, (response) => {
          if (response && response.status == 1) {
            this.clicked = true;
            if (response.hasOwnProperty('data')) {
              let newArray = [];
              this.educationData = newArray.concat(response.data.educations);
              this.experienceData = newArray.concat(response.data.experiences);
              console.log('resume data::', this.educationData, this.experienceData);
            }
          }
        })
      }
    } else {
      this.tabType = 'general';
    }
  }

  /**
   * 保存personal general
   */
  saveBaseInfo() {
    //如果是general
    if (this.tabType == 'general') {
      this.hasClickOnSend = true;
      if (!this.formGroup.valid) {
        return;
      }
      //赋值，调用接口
      this.sendUserInfo = Object.assign(this.sendUserInfo, this.userInfo);
      this.personalModelService.userSaveBaseInfo(this.sendUserInfo, (response) => {
        if (response && response.status == 1) {
          //修改成功
          let alert = this.alertCtrl.create({
            title: 'SUCCESS',
            subTitle: 'update info success',
            buttons: ['OK']
          });
          alert.present();
          //事件传出数据
          this.event.publish(EventNameConfig.EDIT_PROFILE, {
            param: 'edit-profile',
            data: this.sendUserInfo
          });
          //更新缓存
          this.userStoreService.getUserInfo((response) => {
            let userStore = response;
            userStore.work_name = this.sendUserInfo.work_name;
            this.userStoreService.setUserInfo(userStore);
          }).then().catch();

        } else {
          //修改失败
          let alert = this.alertCtrl.create({
            title: 'FAILED',
            subTitle: 'update info failed',
            buttons: ['OK']
          });
          alert.present();
        }

      })
    } else if (this.tabType == 'resume') {
      if (this.checkEduExp()) {
        let resumeData = {
          'user_educations': this.educationData,
          'user_experiences': this.experienceData
        }
        this.personalModelService.saveEducations({'user_edu_exp': resumeData}, (response) => {
          if (response && response.status == 1) {
            //修改成功
            let alert = this.alertCtrl.create({
              title: 'SUCCESS',
              subTitle: 'update info success',
              buttons: ['OK']
            });
            alert.present();
          } else {
            //修改失败
            let alert = this.alertCtrl.create({
              title: 'FAILED',
              subTitle: 'update info failed',
              buttons: ['OK']
            });
            alert.present();
          }
        })
      }
    }
  }

  /**
   * 检测education experience的合法性
   */
  checkEduExp() {
    let flag = 1;
    for (let i = 0; i < this.educationData.length; i++) {
      if (this.educationData[i].school == '' && this.educationData[i].operation != -1) {
        this.educationData[i].schoolError = true;
        flag = 0;
      }else{
        this.educationData[i].schoolError = false;
      }
    }
    for (let i = 0; i < this.experienceData.length; i++) {
      if (this.experienceData[i].company == '' && this.experienceData[i].operation != -1) {
        this.experienceData[i].companyError = true;
        flag = 0;
      }else{
        this.experienceData[i].companyError = false;
      }
    }

    return flag;
  }

  /**
   *点击添加
   */
  onClickIcon() {
    this.clickIcon = !this.clickIcon;
  }

  /**
   * 删除 education ， experience
   * @param education
   * @param index
   * @param type  0: education  1: experience
   */
  removeResume(education: any, index: number, type: number) {
    //confirm 弹框
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Remove the experience',
      buttons: [
        {
          text: 'Delete it',
          handler: () => {
            if (type) {
              education.operation = -1;
              console.log(this.experienceData, "delete <<<<<")
            } else {
              education.operation = -1;
              console.log(this.educationData, "delete <<<<<")
            }
          }
        },
        {
          text: 'Just clear it',
          handler: () => {
            console.log('clear it');
          }
        },
        {
          text: 'No, Thanks',
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 添加education
   */
  onAddEducation() {
    this.fabBtn.nativeElement.click();
    let edu = this.initEducation();
    edu.operation = 1;
    this.educationData.push(edu);
  }

  /**
   * 添加experience
   */
  onAddExperience() {
    this.fabBtn.nativeElement.click();
    let exp = this.initExperience();
    exp.operation = 1;
    this.experienceData.push(exp);
  }

  /**
   * 初始换用户信息
   */
  initSendUserInfo(): any {
    let sendObj = {
      birthday: '',
      country: '',
      first_name: '',
      last_name: '',
      gender: '',
      home_address: '',
      nation: '',
      work_name: '',
      bank_type: '',
      identity_card: '',
      wage_card: 'gre',
      passport: ''
    };
    this.sendUserInfo = sendObj;
  }

  /**
   * 初始化education对象
   * @returns {{description: string, end_date: string, id: string, major: string, school: string, start_date: string, operation: number}}
   */
  initEducation(): any {
    let str = this.dateService.dateFormat(new Date(),'yyyy-MM-dd');
    console.log(str,'data->');
    let education = {
      description: '',
      end_date: str,
      id: 0,
      major: '',
      school: '',
      start_date: str,
      operation: 0,
      schoolError: false,
      timeError: false
    };
    return education;
  }

  /**
   * 初始化experience对象
   * @returns {{company: string, description: string, end_date: string, finial_position: string, id: string, initial_position: string, start_date: string, operation: number}}
   */
  initExperience(): any {
    let str = this.dateService.dateFormat(new Date(),'yyyy-MM-dd');
    let experience = {
      company: '',
      description: '',
      end_date: str,
      finial_position: '',
      company_id: 0,
      id: 0,
      tag: 1,
      initial_position: '',
      start_date: str,
      operation: 0,//删除 -1 ， 增加 1
      companyError: false,
      timeError: false
    };
    return experience;
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      'workName': [null, Validators.compose([Validators.required])],
    });
    this.sGroup = this.formBuilder.group({
      'school': [null, Validators.compose([Validators.required])],
    });
  }

  get workName() {
    return this.formGroup.get('workName');
  }

  get school() {
    return this.sGroup.get('school');
  }
}
