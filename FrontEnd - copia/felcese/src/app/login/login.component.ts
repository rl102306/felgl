import { Component, OnInit } from '@angular/core';

import { AuthServiceService } from '../Auth/auth-service.service';

import { Form, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { BreakpointObserver } from '@angular/cdk/layout';

import {StepperOrientation} from '@angular/material/stepper';

import {map} from 'rxjs/operators';

import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  public Form_Login: any;

  public hide = true;
 
  public response_token:any;

  public response_login:any;

  public token:any;

  public data:any;
  
  
  //isLoggedIn$: Observable<boolean>;

  stepperOrientation: Observable<StepperOrientation>

    

  constructor(
    
    private Form_Builder_Login: FormBuilder,
    
    private authService:AuthServiceService,
    
    breakpointObserver: BreakpointObserver,

    private router: Router,
    
   ) {
    //this.isLoggedIn$ = this.authService.isLoggedIn;

    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')

      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

    
     }

  ngOnInit(): void {
    this.Form_Login = this.Form_Builder_Login.group({
      user: ['', [Validators.required]],
      pass: ['',[Validators.required]]
    })

  }

  onSubmitLogin() {
    const UserData = {
      username: this.Form_Login.get('user').value,
      password: this.Form_Login.get('pass').value
    }
    this.authService.token();
    this.token = localStorage.getItem('Token');
    this.data = JSON.parse(this.token).token;
    this.authService.login(this.data,UserData).subscribe( 
      (res) => {
        if (res) {
          this.router.navigate(["ucf"]);
        }
      });
  }
}