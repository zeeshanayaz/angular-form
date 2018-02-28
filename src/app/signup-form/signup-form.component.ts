import { UsernameValidators } from './../common/validators/username.validators';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    // 'username': new FormControl('',Validators.required,UsernameValidators.shoulBeUnique),
      'username': new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace]
      ,UsernameValidators.shoulBeUnique
    ),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    this.form.setErrors({
      invalidLogin : true
    });
  }
}
