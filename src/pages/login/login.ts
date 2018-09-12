import {Component, Inject, OnDestroy} from "@angular/core";
import {IonicPage, Loading, LoadingController, ModalController, ViewController} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {forbiddenUsernameValidator} from "../../share/directive/";
import {ForgetPasswordComponent} from "../forget-password/forget-password";


@IonicPage({
  name: 'login',
  segment: 'login'
})
@Component({
  templateUrl: 'login.html',
})
export class LoginPage implements OnDestroy {
  loading: Loading;
  public isLogin: boolean;
  public errorMsg: any={};
  public rForm: FormGroup;

  constructor(
              public view: ViewController,
              public fb: FormBuilder,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              @Inject('user.service') public userService: any) {
    this.initForm();
  }

  get username() {
    return this.rForm.get('username');
  }

  get password() {
    return this.rForm.get('password');
  }

  ngOnDestroy() {

  }

  initForm() {
    let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    let regPhone = /^1\d{10}$/;
    this.rForm = this.fb.group({
      'username': [null, Validators.compose([Validators.required, forbiddenUsernameValidator(regPhone, regEmail)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      'validate': ''
    });
  }

  /**
   * 登录
   * @param form
   */
  doLogin(form) {
    if (this.rForm.valid) {
      this.presentLoading();
      this.userService.loginViaAPI({username: form.username, password: form.password}, (res: any) => {
        this.dismissLoading();
        if (res.status === 1) {

        } else {
          this.errorMsg.show = true;
          this.errorMsg.text = res.message;
          setTimeout(() => {
            this.errorMsg.show = false;
          }, 2000)
        }
      });
    }
  }


  public clickOpenForgetPassword(event: MouseEvent): void {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ForgetPasswordComponent);
    modal.present();
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



