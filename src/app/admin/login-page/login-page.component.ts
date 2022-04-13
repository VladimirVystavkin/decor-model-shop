import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/user";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  private _form: FormGroup
  private _emailControl: FormControl
  private _passwordControl: FormControl

  constructor() {
    this._emailControl = new FormControl(
      Validators.required,
      Validators.email);

    this._passwordControl = new FormControl(
      Validators.required,
      Validators.minLength(6));

    this._form = new FormGroup({
      email: this.emailControl
      , password: this.passwordControl
    })
    this.emailControl.setValue('example@gmail.com')
    this.passwordControl.setValue("000000")
  }

  get form(): FormGroup {
    return this._form;
  }

  get emailControl(): FormControl {
    return this._emailControl;
  }

  get passwordControl(): FormControl {
    return this._passwordControl;
  }

emailControlInvalid() : boolean {
    return this.emailControl.touched && this.emailControl.invalid
}

passwordControlInvalid() : boolean {
    return this.passwordControl.touched && this.passwordControl.invalid
}

submit(): void {
    if(!this.emailControlInvalid() && !this.passwordControlInvalid()){
      const user : User = {
        email: this.emailControl.value,
        password: this.passwordControl.value
      }
      console.log(user)
    }
}

  ngOnInit(): void {

  }
}
