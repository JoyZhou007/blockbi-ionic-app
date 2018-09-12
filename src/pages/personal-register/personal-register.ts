import {Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {IonicPage, LoadingController, NavController, Slides} from "ionic-angular";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenValidator} from "../../share/directive/form-valid/forbidden-username.directive";
import {UserRegisterData} from "../../share/entity/user-entity";
import {UserModelService} from "../../share/service/model/user-model.service";


/**
 * Generated class for the PersonalRegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage({
  name: 'personal-register',
  segment: 'personal-register',
})
@Component({
  templateUrl: 'personal-register.html'
})
export class PersonalRegisterComponent implements OnInit {
  code_error: any = {};
  isRegister: boolean = false;

  userData_alert: any = {};
  //错区消息提示
  confirmPwd_alert: any = {};
  phone_alert: any = {};
  //验证码计数
  num: number;

  @ViewChild(Slides) slides: Slides;
  @ViewChildren('codeInput') codeInput: QueryList<ElementRef>;

  public userData: UserRegisterData;

  public rForm: FormGroup;

  public tplAuthCodeList: Array<any> = ['', '', '', '', '', ''];
  private authCodeLength: number = 0;
  public currentTab: number = -1;

  get username() {
    return this.rForm.get('username');
  }

  get email() {
    return this.rForm.get('email');
  }

  get phone() {
    return this.rForm.get('phone');
  }

  //
  // get authCode() {
  //   return this.rForm.get('authCode');
  // }

  get password() {
    return this.rForm.get('password');
  }

  get confirmPwd() {
    return this.rForm.get('confirmPwd');
  }

  constructor(public fb: FormBuilder,
              public loadingCtrl: LoadingController,
              public nav: NavController,
              public userModelService: UserModelService,
              @Inject('user.service') public userService: any,
              @Inject('user-store.service') public userStoreService: any) {

    console.log('Hello PersonalRegisterComponent Component');
  }

  ngOnInit(): void {
    this.initForm();
    this.userData = {
      module: 0,
      pid: '',
      work_name: '',
      email: '',
      profile: '',
      password: '',
      phone: '',
      code: '',
      confirm_password: '',
      lang: this.userService.getLanguageNum()
    };
  }


  /**
   * 初始化form表单验证器
   */
  public initForm(): void {
    let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    let regPhone = /^1\d{10}$/;
    // let regCode = /^[A-Za-z0-9_]{6}$/;
    this.rForm = this.fb.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(12)])],
      'email': [null, Validators.compose([forbiddenValidator(regEmail)])],
      'phone': [null, Validators.compose([Validators.required, forbiddenValidator(regPhone)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      'confirmPwd': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
    });
  }

  /**
   * 返回前一页
   * @param {MouseEvent} event
   */
  public clickToPrevPage(event: MouseEvent): void {
    event.stopPropagation();
    if(this.slides.getActiveIndex()!==0){
      this.slides.slidePrev();
    } else {
      this.nav.pop();
    }

  }

  /**
   * 下一页
   * @param {any} event
   * @param email
   */
  public clickToNextPage(event: any, email: FormControl): void {
    event.stopPropagation();
    if (event.keyCode === 13) {
      // this.slides.slideNext();
    } else if (event instanceof MouseEvent) {
      this.slides.slideNext();
    }


  }

  /**
   * 注册
   * @param {FormGroup} form
   */
  public doRegister(form: FormGroup): void {
    this.checkValid(form);
    if (form.valid) {
      console.log(1);
      this.userService.register(this.userData, (res: any) => {
        //注册成功
        if (res.status === 1) {
          this.isRegister = true;
        } else  {
          this.userData_alert.text = res.message;
          switch (res.data) {
            case 0:
              this.userData_alert.show = true;
              this.userData_alert.text = 'code is incorrect.';
              break;
            case 1:
              this.userData_alert.show = true;
              this.userData_alert.text = res.message;
              break;
            case 2:
              this.userData_alert.show = true;
              this.userData_alert.text = res.message;
              break;
            case 3:
              this.userData_alert.show = true;
              this.userData_alert.text = res.message;
              break;
            case 5:
              this.userData_alert.show = true;
              this.userData_alert.text = res.message;
              break;
            case 6:
              this.userData_alert.show = true;
              this.userData_alert.text = res.message;
              break;
          }
        }
      }, 5000);
    }
  }


  /**
   * 点击获取手机验证码
   * @param {MouseEvent} event
   */
  public clickSendAuthCode(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.num) {
      this.userModelService.fetchRegisterCode({
        data: {means: this.userData.phone}
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
   * 监听再次确认密码的输入值
   */
  public compareOldPwd(): void {

    this.confirmPwd_alert.show = this.userData.password !== this.userData.confirm_password;
    this.confirmPwd_alert.text = 'password mismatch.'
  }

  /**
   * 注册前检查错误信息
   * @param {FormGroup} form
   */
  private checkValid(form: FormGroup) {
    let errList = [];
    this.userData_alert.show = false;
    if (form.controls.username.invalid) {
      errList.push('username');
      this.userData_alert.show = true;
    }
    if (form.controls.email.invalid) {
      errList.push('email');
      this.userData_alert.show = true;
    }
    if (form.controls.phone.invalid) {
      errList.push('phone');
      this.userData_alert.show = true;
    }
    if (form.controls.password.invalid) {
      errList.push('password');
      this.userData_alert.show = true;
    }
    if (form.controls.confirmPwd.invalid) {
      errList.push('password');
      this.userData_alert.show = true;
    }
    // if (form.controls.authCode.invalid) {
    //   errList.push('auth code');
    //   this.userData_alert.show = true;
    // }
    if (!this.authCodeBlur()) {
      errList.push('auth code');
      this.userData_alert.show = true;
    }
    this.userData_alert.text = errList.join(',') + ' has error.';
  }

  /**
   * loading
   */
  public presentLoading(): void {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
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
    this.userData.code = codeArr.join('');
    return codeArr.join('');
  }

  /**
   * 验证auth code
   * @returns {boolean}
   */
  private authCodeBlur() {
    let code = this.fetchAuthCode();
    if (!code) {
      this.code_error.isShow = true;
      this.code_error.text = 'code is required.';
    } else if (code.length !== 6) {
      this.code_error.isShow = true;
      this.code_error.text = 'code is incorrect.';
    } else {
      this.code_error.isShow = false;
      return true;
    }
  }


}
