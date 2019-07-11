import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(UserId, Password) {
    if (UserId === 'antonio' && Password === '12345678') {
      return true;
    } else {
      return false;
    }
  }
}
