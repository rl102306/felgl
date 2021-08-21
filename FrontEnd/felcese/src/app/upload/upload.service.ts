import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpEvent, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) {

  }


  public uploadfile(formData: any) {
  
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/post`, formData);

  }

  public postfile(formData:any){

    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/posicion/post`, formData);
    
  }

}

