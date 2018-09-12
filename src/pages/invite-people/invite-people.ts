import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {IonicPage, Loading, LoadingController, NavController, Slides} from "ionic-angular";
import {UserModelService} from "../../share/service/model/user-model.service";
/**
 * Generated class for the InvitePeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@IonicPage({
  name: 'invite-people',
  segment: 'invite-people',
})
@Component({
  selector: 'invite-people',
  templateUrl: 'invite-people.html'
})
export class InvitePeopleComponent implements OnInit {

  public inviteList: Array<{ email: string, errorText: string }> = [{email: '', errorText: ''}];
  public emailList: string [] = [];
  public email_error: any = {};

  @ViewChild(Slides) slides: Slides;
  //显示send按钮
  public showSendBtn: boolean = false;
  private loading: Loading;

  constructor(public userModelService: UserModelService,
              public nav: NavController,
              public loadingCtrl: LoadingController,
              @Inject('user.service') public userService: any,) {
    console.log('Hello InvitePeopleComponent Component');
  }

  ngOnInit(): void {
    this.slides.lockSwipes(true);


  }

  /**
   * 点击添加邀请人输入框
   * @param {MouseEvent} event
   */
  public clickAddInvitees(event: MouseEvent): void {
    event.stopPropagation();
    this.inviteList.push({email: '', errorText: ''});
  }

  /**
   *  点击删除邀请人框
   * @param {MouseEvent} event
   * @param {number} i
   */
  public clickDeleteInput(event: MouseEvent, i: number): void {
    event.stopPropagation();
    if (this.inviteList.hasOwnProperty(i)) {
      this.inviteList.splice(i, 1);
    }
  }

  /**
   * 点击发送
   */
  public sendData(event: MouseEvent) {
    event.stopPropagation();
    if (!this.checkValid()) {
      return false;
    } else {
      this.removeRepeat();
      let formData = [];
      formData = this.emailList.map((value) => {
        return {email: value};
      });
      this.userModelService.invitePeoples({
        data: formData,
        lang: this.userService.getLanguageNum()
      }, (response: any) => {
        if (response.status === 1) {
          // this.inviteList = [{email: '', errorText: ''}];
          this.presentLoading();
          this.emailList = [];
          this.showSendBtn = false;
          this.nav.pop();
        } else {
          // this.inviteList = [{email: '', errorText: ''}];
          this.emailList = [];
          this.email_error.show = true;
          this.email_error.text = response.message;
          setTimeout(() => {
            this.email_error.show = false;
          }, 1000)

        }
      })
    }
  }

  public inputBlur(email: string) {
    let regEmail = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/;
    if (!email) {
      return {
        valid: false,
        errorText: 'email is required'
      };
    } else if (!regEmail.test(email)) {
      return {
        valid: false,
        errorText: 'email is invalid'
      };
    } else {
      return {
        valid: true,
        errorText: ''
      };
    }
  }

  /**
   * 验证文本框正确性
   * @returns {boolean}
   */
  checkValid() {
    let result = true;
    let arr = [];
    this.inviteList.forEach((value, index, array) => {
      if (value.email) {
        arr.push(value);
      }
    });
    if (!arr.length) {
      arr = [{email: '', errorText: ''}];
      result = false;
    }
    this.inviteList = arr;

    this.inviteList.forEach((value, index, array) => {
      if (!this.inputBlur(value.email.trim()).valid) {
        result = false;
        value.errorText = this.inputBlur(value.email).errorText;
      }
    });

    return result;
  }

  /**
   * 去掉重复的email
   */
  private removeRepeat() {
    //去掉 重复
    this.emailList = this.inviteList.map((value) => {
      return value.email.trim();
    });
    this.emailList = this.emailList.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
  }

  /**
   * 点击按钮跳转到发送email页面
   * @param {MouseEvent} event
   */
  public clickTurnEmail(event: MouseEvent): void {
    event.stopPropagation();
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
    this.showSendBtn = true;
  }


  /**
   * 加载器
   * 开始加载
   * @param content 内容
   * @param spinner
   */
  public presentLoading(content?: string): void {
    if (!content) {
      content = 'Send Success';
    }
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: 'hide',
      duration: 500

    });

    this.loading.present();
  }


  public clickTurnContact(event:MouseEvent): void {
    event.stopPropagation();
    // let contact: Contact = this.contacts.create();
    //
    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   () => console.log('Contact saved!', contact),
    //   (error: any) => console.error('Error saving contact.', error)
    // );
  }

  /**
   * 返回前一页
   * @param {MouseEvent} event
   */
  public clickToPrevPage(event: MouseEvent): void {
    event.stopPropagation();
    if(this.slides.getActiveIndex()!==0){
      this.slides.lockSwipes(false);
      this.slides.slidePrev();
      this.slides.lockSwipes(true);
    } else {
      this.nav.pop();
    }

  }

}
