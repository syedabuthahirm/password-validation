import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator, customPattern } from 'src/custom-validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public changePasswordForm: FormGroup;

  passwordMinLength: number = 7;

  constructor() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.passwordMinLength),
        customPattern(/\d/, {
          hasNumber: true
        }),
        customPattern(/[A-Z]/, {
          hasCapitalCase: true
        }),
        customPattern(/[a-z]/, {
          hasSmallCase: true
        }),
        customPattern(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
          hasSpecialCharacters: true
        }),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required
      ])
    }, { validators: confirmPasswordValidator });
  }

  get passwordConfirm() {
    console.log(this.changePasswordForm.controls['confirmPassword'].errors)
    return null;
  }
}
