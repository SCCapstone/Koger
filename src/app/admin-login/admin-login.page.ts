import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: 'admin-login.page.html',
  styleUrls: ['admin-login.page.scss']
})
export class AdminLoginPage  implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit()
  {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
      // Pattern must match ___@___.___
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose
      ([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  // Error Messages
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.'},
      { type: 'pattern', message: 'Please enter a valid email.'}
    ],
    'password' : [
      {type: 'required', message: 'Password is required.'},
      { type: 'minLength', message: 'Password must be at least 5 characters'}
    ]
  };

  loginUser(value)
  {
    this.authService.loginUser(value)
      .then(res=> {
        console.log(res);
        console.log('Succesfully Logged In')
        this.errorMessage = "";
        console.log("UID: " + this.authService.userData.uid);
      }, err=> {
        this.errorMessage = err.message;
      })
  }
}
