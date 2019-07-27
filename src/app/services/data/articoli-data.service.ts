import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articoli } from 'src/app/articoli/articoli.component';
import { ApiMsg } from '../../articoli/articoli.component';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  server = 'localhost';
  port = '5051';

  constructor(private httpClient: HttpClient) { }

  getArticoliByDescription(descrizione: string) {
    return this.httpClient.get<Articoli[]>(`http://${this.server}:${this.port}/api/articoli/cerca/descrizione/${descrizione}`);
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
}
