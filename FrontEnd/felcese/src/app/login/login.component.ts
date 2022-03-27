import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../Auth/auth-service.service';

import { FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { BreakpointObserver } from '@angular/cdk/layout';

import {StepperOrientation} from '@angular/material/stepper';

import {map} from 'rxjs/operators';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  public login_form: any;

  public response_token:any;

  public response_login:any;

  public token:any;

  public data:any;
  
  public hide = true;
  
  isLoggedIn$: Observable<boolean>;

  stepperOrientation: Observable<StepperOrientation>

    

  constructor(
    private _formBuilder: FormBuilder,
    
    private authService:AuthServiceService,
    
    breakpointObserver: BreakpointObserver,
    
   ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')

      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

    
     }

  ngOnInit(): void {
    
    this.login_form = this._formBuilder.group({

      user:['',Validators.required],
      
      pass:['',Validators.required]

   })

   this.isLoggedIn$ = this.authService.isLoggedIn;


  }

 


  


  onSubmitLogin() {

    this.authService.token();
    
    this.token = localStorage.getItem('Token');

    this.data = JSON.parse(this.token).token;

    const formDatalogin = new FormData();

    formDatalogin.append('username',this.login_form.get('user').value);

    formDatalogin.append('password',this.login_form.get('pass').value);

    this.authService.login(formDatalogin,this.data)

  }

}