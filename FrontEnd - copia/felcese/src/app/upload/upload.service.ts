import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {

  }


  public uploadfile(formData: any,token:any) {

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
    
    // FU = File Upload

    return this.http.post<any>(`${environment.API_URL_LOCAL}/api/fu/post`,formData,httpOptions);

  }

  public postfile(formData:any,token:any){

    let httpOptions = {

      headers: new HttpHeaders({
        'Authorization': 'token '+ token
      })
    };
  

    return this.http.post<any>(`${environment.API_URL_LOCAL}/api/posicion/post`, formData,httpOptions);
    
  }

}

