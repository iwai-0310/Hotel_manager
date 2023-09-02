// import { CanActivateChildFn } from '@angular/router';

// export const roomGuard: CanActivateChildFn = (childRoute, state) => {
//   return false;
// };
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service'; // Make sure to import your LoginService

@Injectable({
  providedIn: 'root'
})
export class roomGuard implements CanActivateChild {
  constructor(private loginService:LoginService) {}
  canActivateChild(
    childRoute:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return this.loginService.isAdmin;
      // return true
    }
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.loginService.isLoggedIn? true:this.router.navigate(['/login']) // Assuming isLoggedIn is a boolean property in your LoginService
  // }



