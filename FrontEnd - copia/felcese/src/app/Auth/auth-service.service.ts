import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';


import { User, UserResponse } from '../user/user.interface';

import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {




  private Bool_User_Login = new BehaviorSubject<boolean>(false);

  private response_token:any;

  private User_State: any;

  


  constructor(private http: HttpClient, private router: Router) { }

  get IsLogged(): Observable<boolean>{

    return this.Bool_User_Login.asObservable();

  }


  login(Token:any, authData:User): Observable<any>{

    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'token ' + Token,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<UserResponse>(`${environment.API_URL_LOCAL}/api/login/post`,authData, httpOptions)
    .pipe( map((res:UserResponse) => {
                  console.log('Soy yo inicie sesion.')
                  console.log('Res',res)
                  this.User_State = res;
                  this.Bool_User_Login.next(true);

                  localStorage.setItem('User_State', this.User_State);
                  return res;
              }),
                  catchError((err) => this.handlerError(err))
          );
  }

  private handlerError(err:any): Observable<never>{
    let errorMessage = 'Ha ocurrido un error.'
    if (err.error.toString() == "1900"){
        errorMessage = 'Verique su usuario y contraseña.' 
    }else{
        errorMessage = `Error : code ${err.message}`
    }
    Swal.fire(errorMessage);
    return throwError(errorMessage);
  }
  
  
  
  

  token(){
    const formData = new FormData();
    
    formData.append('username', environment.USER_TOKEN);

    formData.append('password', environment.PASS_TOKEN);
    
    return this.http.post<any>(`${environment.API_URL_LOCAL}/auth`, formData).subscribe(

      (res) => {
    
        this.response_token = res;

        localStorage.setItem('Token', JSON.stringify(this.response_token));

      },
    
      (err) => {
        
        Swal.fire('Ocurrió un error, favor contacte al administrador. Codigo de error T019K.'); 
      }
    );
  }



/*  login(formData: any, token: any){

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
  */

  logout() {
    localStorage.removeItem('Token');
    this.Bool_User_Login.next(false);
/*
    this.response_login = false;
          
    this.loggedIn.next(this.response_login);
    
    localStorage.setItem('Logggin', JSON.stringify(this.response_login));
    
    this.router.navigate(['/login']);

    localStorage.removeItem('Token');

    localStorage.removeItem('user_id');*/

  }



}
