import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

// const API = 'https://sapi.billmade.in/api/v1/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorageService) {}

  // login(authRequest: any): Observable<any> {
  //   return this.http.post(API + 'authenticate', authRequest);
  // }

  // loggedIn(): boolean {
  //   return this.token.getToken() != null;
  // }

  // validateToken(): Observable<any> {
  //   const user = this.token.getUser();
  //   const params = {
  //     id: user?.id ,
  //     tenantId: user?.tenantId,
  //     email: user?.email,
  //     token: user?.accessToken
  //   };
  //   return this.http.get(API + 'validateToken', { params });
  // }


}
