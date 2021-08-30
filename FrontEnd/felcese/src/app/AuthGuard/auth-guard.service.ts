import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';

import { UserService } from '../user/user.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: UserService ) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.authService.isUserLoggedIn()) {
            
          alert('No se le permite ver esta página. Se le redirige a la página de inicio de sesión');
            
            this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
            
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        }
        
        return true;
    }
 
}