import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})

export class CheckloginGuard implements CanActivate {

  constructor(private authService: AuthServiceService ) {
  }

  canActivate():Observable<boolean>{
    return this.authService.IsLogged.pipe(
      take(1),
      map((IsLogged:boolean)=>IsLogged));
  }
}
