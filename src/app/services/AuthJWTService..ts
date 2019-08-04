import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { port, server, authServerUri } from '../app.constants';

export class AuthData {

  constructor(
    public codice: string,
    public mesaggio: string
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthJWTService {

  constructor(private httpClient: HttpClient) { }

  autenticaService(username: string, password: string) {

    return this.httpClient.post<any>(`${authServerUri}`,
      {username, password})
      .pipe(map(
        data => {
          sessionStorage.setItem('Utente', username);
          sessionStorage.setItem('AuthToken', `Bearer ${data.token}`);
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
