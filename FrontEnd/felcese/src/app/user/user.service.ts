import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class UserService {


  private httpOptions: any;

  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  //http://localhost:8000/auth
  

  private response: any;

  private isloggedIn: any;

  constructor(private http: HttpClient,private router:Router) { 

  }

  public Token(formData:any){


    return this.http.post<any>(`${this.DJANGO_SERVER}/auth`, formData);
      
  }

  public login (formData:any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
 
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/api/login/post`,formData,httpOptions).subscribe(

      (res) => {

        if(res == 1024){

          this.isloggedIn = true;

          
          this.router.navigate(["ucf"])

          


        }
    

      },
    
      (err) => {  


        alert('Usuario o contraseña incorrecto')

        //console.log(err);
    
      }
    );


    

  }

  isUserLoggedIn(): boolean {
    
    return this.isloggedIn;
  
  }
}