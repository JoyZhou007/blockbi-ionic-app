/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/23.
 */
import { FormControl, NG_VALIDATORS, ValidatorFn } from "@angular/forms";
import { Directive } from "@angular/core";


/**
 * 合法登录名验证， 手机或者邮箱
 * @return {(control:FormControl)=>{[p: string]: any}}
 */
@Directive({
  selector: '[forbiddenUsername][ngModel],[forbiddenUsername][formControl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: forbiddenUsernameValidator,
      multi: true
    }
  ]
})
export class ForbiddenUsernameValidator {
  validator: Function;

  constructor() {
    let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    let regPhone = /^1\d{10}$/;
    this.validator = forbiddenUsernameValidator(regPhone, regEmail);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}


export function forbiddenUsernameValidator(regPhone: RegExp, regEmail: RegExp): ValidatorFn {
  return (control: FormControl): { [key: string]: any } => {
    //为空或者过短时候不检查
    const forbidden = (control.value && control.value.length >= 5)
      && (!regPhone.test(control.value) && !regEmail.test(control.value));
    return forbidden ? {'forbidden': true} : null;
  };
}

export function forbiddenValidator(reg: RegExp): ValidatorFn {
  return (control: FormControl): { [key: string]: any } => {
    //为空或者过短时候不检查
    const forbidden = (control.value)
      && (!reg.test(control.value));
    return forbidden ? {'forbidden': true} : null;
  };
}

