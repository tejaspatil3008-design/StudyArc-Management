import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../Services/token-storage.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = this.token.getToken();
    // const user=this.token.getUser();

    const authReq = request.clone();

    if(true){
      const tenantAuth= authReq.clone({
         setHeaders:{
           tenantId:'MyG5nwZ7ZPQ=',
         }
       });
       return next.handle(tenantAuth);
    }
  }
}
