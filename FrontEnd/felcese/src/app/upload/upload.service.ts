import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

  }


  public uploadfile(formData: any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
  
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/api/post`, formData,httpOptions);

  }

  public postfile(formData:any,token:any){

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
  

    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/api/posicion/post`, formData,httpOptions);
    
  }

}

