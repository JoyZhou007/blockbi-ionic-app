import {Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IonicPage, Loading, LoadingController, Slides} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {forbiddenValidator} from "../../share/directive/form-valid/forbidden-username.directive";
import {UserModelService} from "../../share/service/model/user-model.service";

/**
 * Generated class for the ForgetPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@IonicPage({
  name: 'forget-password',
  segment: 'forget-password',
})
@Component({
  templateUrl: 'forget-password.html'
})
export class ForgetPasswordComponent implements OnInit {
  loading: Loading;
  //显示打开email的页面
  showEmailLink: boolean = false;
  //显示完成页
  showComplete: boolean = false;
  code_error: any = {};
  email_error: any = {};
  @ViewChild(Slides) slides: Slides;

  //显示邮件输入框还是电话输入框
  showEmail: boolean = true;
  emailForm: FormGroup;
  phoneForm: FormGroup;

  phoneValue: number;
  codeValue: string;

  //验证码计数
  num: number;
  phone_alert: any = {};
  //错区消息提示
  confirmPwd_alert: any = {};

  public resetForm: FormGroup;

  public resetData: {
    password: string,
    confirm_password: string
  } = {
    password: '',
    confirm_password: ''
  };

  get password() {
    return this.resetForm.get('password');
  }

  get confirmPwd() {
    return this.resetForm.get('confirmPwd');
  }


  get email() {
    return this.emailForm.get('email');
  }

  public tplAuthCodeList: Array<any> = ['', '', '', '', '', ''];
  private authCodeLength: number = 0;
  public currentTab: number = -1;
  @ViewChildren('codeInput') codeInput: QueryList<ElementRef>;

  constructor(public fb: FormBuilder,
              public userModelService: UserModelService,
              public loadingCtrl: LoadingController,
              @Inject('user.service') public userService: any,
              ) {
    console.log('Hello ForgetPasswordComponent Component');
  }

  ngOnInit(): void {
    this.initEmailForm();
    // this.initPhoneForm();

    //使slides按钮不能点
    this.slides.lockSwipes(true);
    this.initResetForm();
  }

  public clickSendEmail(event: MouseEvent): void {
    event.stopPropagation();
    this.showEmail = true;
  }

  public clickSendPhone(event: MouseEvent): void {
    event.stopPropagation();
    this.showEmail = false;
  }

  /**
   * 初始化 email form表单验证器
   */
  public initEmailForm(): void {
    let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    this.emailForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, forbiddenValidator(regEmail)])],
    });
  }

  /**
   * 初始化 phone form表单验证器
   */
  public initPhoneForm(): void {
    let regPhone = /^1\d{10}$/;
    let regCode = /^[A-Za-z0-9_]{6}$/;
    this.phoneForm = this.fb.group({
      'phone': [null, Validators.compose([Validators.required, forbiddenValidator(regPhone)])],
      'authCode': [null, Validators.compose([Validators.required, forbiddenValidator(regCode)])],
    });
  }

  /**
   * 发送email
   * @param {MouseEvent} event
   */
  public sendEmail(event: MouseEvent): void {
    event.stopPropagation();
    let data = {
      data: {
        means: this.email.value,
        lang: this.userService.getLanguageNum()
      }
    };
    this.presentLoading();
    this.userModelService.sendPhoneOrEmail(data, (response: any) => {
      this.dismissLoading();
      if (response.status === 1) {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);

        this.showEmailLink = true;

      } else {
        this.email_error.show = true;
        this.email_error.text = 'email is not find';
        setTimeout(() => {
          this.email_error.show = false;
        }, 1000)
      }
    });
  }



  /**
   * 点击获取手机验证码
   * @param {MouseEvent} event
   */
  public clickSendAuthCode(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.num) {
      this.userModelService.sendPhoneOrEmail({
        data: {
          means: this.phoneValue,
          lang: this.userService.getLanguageNum()
        }
      }, (res: any) => {
        if (res.status === 1) {
          this.num = 60;
          let timer: any = setInterval(() => {
            this.num--;
            if (this.num == -1) {
              clearInterval(timer);
              this.num = 0;
            }
          }, 1000);
          this.phone_alert.show = false;
        } else {
          this.phone_alert.show = true;
          this.phone_alert.text = 'send phone code failed! ';
          setTimeout(() => {
            this.phone_alert.show = false;
          }, 1000)
        }
      });
    }
  }


  /**
   * 自动聚焦到下一个
   * @param event
   * @param i
   * @param input
   */
  public autoTab(event: KeyboardEvent, i: number, input: any): void {
    if (event.keyCode === 8 && input.value === '') {
      if (i >= 1) {
        this.codeInput.toArray()[i - 1].nativeElement.focus();
        this.codeInput.toArray()[i - 1].nativeElement.select();
        if (this.authCodeLength > 0) {
          this.authCodeLength--;
        }
      }
    } else if (input.value) {
      if (input.value.length > 1) {
        input.value = input.value.slice(0, 1);
      }
      let maxLength = this.codeInput.length;
      let totalLen = 0;
      if (maxLength) {
        let next;
        this.currentTab = i;

        this.codeInput.toArray().forEach((item: ElementRef, index: number) => {
          if (i === index && i < (maxLength - 1) && !next) {

            next = index + 1;
          }
          if (item.nativeElement.value != '') {
            totalLen++;
          }
          if (index === next) {
            item.nativeElement.focus();
          }
        })
      }
      this.authCodeLength = totalLen;
    }

  }


  /**
   * 获取auth code 输入框的值
   * @returns {string}
   */
  public fetchAuthCode(): string {
    let inputList = this.codeInput.toArray();
    let codeArr = [];
    for (let val of inputList) {
      codeArr.push(val.nativeElement.value);
    }
    this.codeValue = codeArr.join('');
    return codeArr.join('');
  }

  /**
   * 验证auth code
   * @returns {boolean}
   */
  private authCodeBlur() {
    let code = this.fetchAuthCode();
    if (!code) {
      this.code_error.show = true;
      this.code_error.text = 'code is required.';
    } else if (code.length !== 6) {
      this.code_error.show = true;
      this.code_error.text = 'code is incorrect.';
    } else {
      this.code_error.show = false;
      return true;
    }
  }

  /**
   * 验证验证码
   * @param {MouseEvent} event
   */
  public resetPwdByPhone(event: MouseEvent): void {
    event.stopPropagation();
    if (this.authCodeBlur()) {
      this.userModelService.validateToken({
        data: {
          token: this.fetchAuthCode()
        }
      }, (response: any) => {
        if (response.status === 1) {
          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true);
        } else {
          this.code_error.show = true;
          this.code_error.text = response.message;
          setTimeout(() => {
            this.code_error.show = false;
          }, 1000)

        }
      })
    }

  }

  /**
   * 初始化reset-pwd的表单验证
   */
  private initResetForm() {
    this.resetForm = this.fb.group({
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      'confirmPwd': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
    });
  }

  /**
   * 监听再次确认密码的输入值
   */
  public compareOldPwd(): void {

    this.confirmPwd_alert.show = this.resetData.password !== this.resetData.confirm_password;
    this.confirmPwd_alert.text = 'password mismatch.'
  }


  /**
   * 点击按钮确认修改密码
   * @param {MouseEvent} event
   */
  public clickResetPassword(event: MouseEvent): void {
    event.stopPropagation();
    if (this.resetForm.valid) {
      let dataInfo = {
        data: {
          password: this.resetData.password,
          confirm_password: this.resetData.confirm_password,
          token: this.fetchAuthCode()
        }

      };
      this.userModelService.resetPassword(dataInfo, (response: any) => {
        if (response.status === 1) {
          // this.nav.push('login');
          // this.presentLoading();
          this.showComplete = true;
        } else {
          this.confirmPwd_alert.show = true;
          this.confirmPwd_alert.text = response.message;
          setTimeout(() => {
            this.confirmPwd_alert.show = false;
          }, 1000)
        }
      });
    }
  }


  /**
   * 加载器
   * 开始加载
   * @param content 内容
   * @param spinner
   */
  public presentLoading(content?: string, spinner?: string): void {
    if (!content) {
      content = 'Please Wait...';
    }
    if (!spinner) {
      spinner = 'bubbles';
    }
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: spinner
    });

    this.loading.present();
  }

  /**
   * 结束加载
   */
  public dismissLoading(): void {
    this.loading.dismiss();
  }


}
