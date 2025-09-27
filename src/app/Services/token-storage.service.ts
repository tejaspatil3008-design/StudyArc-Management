import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router:Router) { }


  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    console.log('Saving user:', user);
    
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      const parsedUser = JSON.parse(user);
      console.log('Retrieved user:', parsedUser);
      return parsedUser;
    }
  
    return {}; 
  }
  
}
