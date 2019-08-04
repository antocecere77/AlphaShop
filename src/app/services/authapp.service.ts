import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

export class AuthData {

  constructor(
    public codice: string,
    public mesaggio: string
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor(private httpClient: HttpClient) { }

  server = 'localhost';
  port = '5051';

  /*
  autentica(UserId, Password) {
    if (UserId === 'antonio' && Password === '12345678') {
      sessionStorage.setItem('Utente', UserId);
      return true;
    } else {
      return false;
    }
  }
  */

  autenticaService(UserId: string, Password: string) {

    const AuthString = 'Basic ' + window.btoa(UserId + ':' + Password);

    const headers = new HttpHeaders(
      {Authorization: AuthString}
    );

    return this.httpClient.get<AuthData>(`http://${this.server}:${this.port}/api/articoli/test`, {headers})
      .pipe(map(
        data => {
          sessionStorage.setItem('Utente', UserId);
          sessionStorage.setItem('AuthToken', AuthString);
          return data;
        }
      ));
  }

  loggedUser() {
    const utente = sessionStorage.getItem('Utente');
    return (sessionStorage.getItem('Utente') != null) ? utente : '';
  }

  getAuthToken() {
    if (this.loggedUser) {
      return sessionStorage.getItem('AuthToken');
    } else {
      return '';
    }
  }

  isLogged() {
    return sessionStorage.getItem('Utente') != null ? true : false;
  }

  clearAll() {
    sessionStorage.removeItem('Utente');
  }
}
