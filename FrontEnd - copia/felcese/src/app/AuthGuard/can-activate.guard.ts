import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthServiceService } from '../Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  
  constructor(private router:Router, private authService: AuthServiceService ) {
  }

  canActivate():Observable<boolean>{
    return this.authService.IsLogged.pipe(
      take(1),
      map((IsLogged:boolean)=>!IsLogged));
  }
}
  
  
/*  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
      return this.authService.isLoggedIn.pipe(

        take(1),

        map((isLoggedin:boolean) => {


          this.loggin = localStorage.getItem('Logggin');

            if(!isLoggedin)
            
              {
               
                if (this.loggin == 'false'){

                this.router.navigate(['/login']);
               
                return false;
              }
            }
            
            return true;
        }));
      }*/
      
    
