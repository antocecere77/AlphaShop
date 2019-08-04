import { Injectable } from '@angular/core';
import {HttpRequest, HttpInterceptor, HttpHandler} from '@angular/common/http';
import { AuthappService } from '../authapp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptService implements HttpInterceptor {


  constructor(private BasicAuth: AuthappService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const AuthToken = this.BasicAuth.getAuthToken();
    const User = this.BasicAuth.loggedUser();

    if (AuthToken && User) {

      req = req.clone({
        setHeaders :
        {
          Authorization: AuthToken
        }
      });
    }
    return next.handle(req);
  }

}
