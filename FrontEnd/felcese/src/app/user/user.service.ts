import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient,private router:Router) { 

  }

/*
  
  //DJANGO_SERVER = "http://logfelappawsenv.eba-np4mfdst.us-west-2.elasticbeanstalk.com";

  DJANGO_SERVER = "http://localhost:8000";

  private response: any;

  private isloggedIn: any;

  private user_cur : any;

  private response_token: any;


  public Token(){


    const formData = new FormData();
    
    formData.append('username', 'logfel_user_token');

    formData.append('password','Tokenulog2021$$');



    return this.http.post<any>(`${this.DJANGO_SERVER}/auth`, formData).subscribe(

      (res) => {
    
        this.response_token = res;

        console.log(this.response_token);

        console.log(localStorage.setItem('Token', JSON.stringify(this.response_token)));

      },
    
      (err) => {  
    
        console.log(err);
    
      }
    );
      
  }

  public login (formData:any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
 
    return this.http.post<any>(`${this.DJANGO_SERVER}/api/login/post`,formData,httpOptions).subscribe(

      (res) => {

          this.isloggedIn = true;

          this.user_cur = res;

          this.router.navigate(["ucf"])


    

      },
    
      (err) => {  


        alert('Usuario o contraseña incorrecto')

        //console.log(err);
    
      }
    );


    

  }

  isUserLoggedIn(): boolean {
    
    return this.isloggedIn;
  
  }*/

  public newcompany(formData: any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
  
    return this.http.post<any>(`${environment.API_URL_LOCAL}/api/company/post`,formData,httpOptions);

  }

  public newUser(formData: any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
  
    return this.http.post<any>(`${environment.API_URL_LOCAL}/api/user/post`,formData,httpOptions);

  }
}