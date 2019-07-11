import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(UserId, Password) {
    if (UserId === 'antonio' && Password === '12345678') {
      sessionStorage.setItem('Utente', UserId);
      return true;
    } else {
      return false;
    }
  }

  loggedUser() {
    const utente = sessionStorage.getItem('Utente');
    return (sessionStorage.getItem('Utente') != null) ? utente : '';
  }

  isLogged() {
    return sessionStorage.getItem('Utente') != null ? true : false;
  }
}
