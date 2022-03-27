import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';


import { UserResponse } from '../user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private loggedIn = new BehaviorSubject<boolean>(false);

  response_token:any;

  response_login: any;

  response_login_user:any;

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {

    return this.loggedIn.asObservable();

  }


  login(formData: any, token: any){

      let httpOptions = {
  
        headers: new HttpHeaders({
          'Authorization': 'token ' + token
        })
      };
  
      
  return this.http.post<UserResponse>(`${environment.API_URL_LOCAL}/api/login/post`, formData, httpOptions).
  
  subscribe(
  
    (res) => {

          this.response_login_user = res;

          this.response_login = true;

          this.loggedIn.next(this.response_login);

          localStorage.setItem('user_id', this.response_login_user);

          localStorage.setItem('Logggin', JSON.stringify(this.response_login));
         
          this.router.navigate(["ucf"])
  
        },
        (err) => {

          //console.log(JSON.stringify(err))

          alert("Usuario o contraseña incorrecta.")
        
        }
      );
    }
  

  logout() {

    this.response_login = false;
          
    this.loggedIn.next(this.response_login);
    
    localStorage.setItem('Logggin', JSON.stringify(this.response_login));
    
    this.router.navigate(['/login']);

    localStorage.removeItem('Token');

    localStorage.removeItem('user_id');

  }

  token(){

    const formData = new FormData();
    
    formData.append('username', 'logfel_user_token');

    formData.append('password','Tokenulog2021$$');


    
    return this.http.post<any>(`${environment.API_URL_LOCAL}/auth`, formData).subscribe(

      (res) => {
    
        this.response_token = res;

        localStorage.setItem('Token', JSON.stringify(this.response_token));

      },
    
      (err) => {  
    
        //console.log(err);
    
      }
    );
  }
}
