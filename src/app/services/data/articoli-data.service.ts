import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articoli } from 'src/app/articoli/articoli.component';
import { ApiMsg } from '../../articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  server = 'localhost';
  port = '5051';

  constructor(private httpClient: HttpClient) { }

  getBasicAuthHeader() {
    const UserId = 'antonio';
    const Password = '12345678';

    const retVal = 'Basic ' + window.btoa(UserId + ':' + Password);

    return retVal;
  }

  getArticoliByDescription(descrizione: string) {
    const headers = new HttpHeaders({
      Authorization: this.getBasicAuthHeader()
    });

    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`, {headers});
  }

  getArticoliByCodArt(codart: string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/codice/${codart}`);
  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${this.server}:${this.port}/api/articoli/cerca/ean/${barcode}`);
  }

  delArticoloByCodArt(codart: string) {
    return this.httpClient.delete<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/elimina/${codart}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/modifica`, articolo);
  }

  insArticolo(articolo: Articoli) {
    return this.httpClient.post<ApiMsg>(`http://${this.server}:${this.port}/api/articoli/inserisci`, articolo);
  }
}
