import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root', 
  })
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}

    canActivate(): boolean {
        const isLoggedIn = !!localStorage.getItem('authToken');
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
}
