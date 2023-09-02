// import { CanActivate, CanActivateFn, CanLoad } from '@angular/router';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return this.loginService.isLoggedIn
// }
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service'; // Make sure to import your LoginService

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {
  constructor(private loginService:LoginService,
    private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoggedIn? true:this.router.navigate(['/login']) // Assuming isLoggedIn is a boolean property in your LoginService
  }

  canLoad(
    route:Route,
    segments:UrlSegment[]):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return this.loginService.isLoggedIn
    }
  
}

