import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articoli } from 'src/app/articoli/articoli.component';
import { ApiMsg } from '../../articoli/articoli.component';
import { server, port } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticoliDataService {

  constructor(private httpClient: HttpClient) { }

  getArticoliByDescription(descrizione: string) {
    return this.httpClient.get<Articoli[]>(`http://${server}:${port}/api/articoli/cerca/descrizione/${descrizione}`);
  }

  getArticoliByCodArt(codart: string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/codice/${codart}`);
  }

  getArticoliByEan(barcode: string) {
    return this.httpClient.get<Articoli>(`http://${server}:${port}/api/articoli/cerca/ean/${barcode}`);
  }

  delArticoloByCodArt(codart: string) {
    return this.httpClient.delete<ApiMsg>(`http://${server}:${port}/api/articoli/elimina/${codart}`);
  }

  updArticolo(articolo: Articoli) {
    return this.httpClient.put<ApiMsg>(`http://${server}:${port}/api/articoli/modifica`, articolo);
  }

  insArticolo(articolo: Articoli) {
    return this.httpClient.post<ApiMsg>(`http://${server}:${port}/api/articoli/inserisci`, articolo);
  }
}
