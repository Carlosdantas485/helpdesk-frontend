//to create this file wil needed run this command (ng g interceptor interceptors/auth)
//needed set this Filein AppComponent.module.ts in providers

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');

    if (token){
      const cloneReq = request.clone({
        headers: request.headers.set('authorization', `Bearer ${token}`)
      });
      return next.handle(cloneReq);
    }else{

    }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
