import { Injectable } from '@angular/core';
import {HttpRequest, HttpInterceptor, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptService implements HttpInterceptor {


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const UserId = 'admin';
    const Password = '12345678';
    const AuthHeader = 'Basic ' + window.btoa(UserId + ':' + Password);

    req = req.clone({
      setHeaders :
      {
        Authorization: AuthHeader
      }
    });

    return next.handle(req);
  }

}
