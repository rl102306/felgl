import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  DJANGO_SERVER: string = "http://127.0.0.1:8000";
  
  constructor(private http: HttpClient) { }

  public upload(formData: any) {
  
    return this.http.post<any>(`${this.DJANGO_SERVER}/upload/`, formData);
  
  }

  /* 
  private serverUrl = 'http://localhost:5002';

  constructor(private httpClient: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const request = new HttpRequest('POST', `${this.serverUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(request);
  }

  getFiles(): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/files`);
  } */
}
