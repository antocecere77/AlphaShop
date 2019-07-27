import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articoli, ApiMsg } from '../articoli/articoli.component';
import { ArticoliDataService } from '../services/data/articoli-data.service';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  codArt = '';
  articolo: Articoli;
  Conferma: string;
  Errore: string;
  apiMsg: ApiMsg;

  Iva = [
    {id: 22,
    descrizione: 'Iva 22%',
    aliquota: 22},
    {id: 10,
      descrizione: 'Iva 10%',
      aliquota: 10},
    {id: 4,
    descrizione: 'Iva 4%',
    aliquota: 4},
    {id: 0,
      descrizione: 'Iva Esente',
      aliquota: 0}
  ];

  FamAssort = [
    {
      id: -1,
      descrizione: 'NON DISPONIBILE'
    },
    {
      id: 1,
      descrizione: 'DROGHERIA ALIMENTARE'
    },
    {
      id: 10,
      descrizione: 'DROGHERIA CHIMICA'
    },
    {
      id: 15,
      descrizione: 'BANCO TAGLIO'
    },
    {
      id: 16,
      descrizione: 'GASTRONOMIA'
    },
    {
      id: 17,
      descrizione: 'PASTECCERIA'
    },
    {
      id: 20,
      descrizione: 'LIBERO SERVIZIO'
    },
    {
      id: 25,
      descrizione: 'PANE'
    },
    {
      id: 40,
      descrizione: 'SURGELATI'
    },
    {
      id: 50,
      descrizione: 'ORTOFRUTTA'
    },
    {
      id: 60,
      descrizione: 'MACELLERIA'
    },
    {
      id: 70,
      descrizione: 'PESCHERIA'
    },
    {
      id: 90,
      descrizione: 'EXTRA ALIMENTARI'
    }
  ];

  constructor(private route: ActivatedRoute, private articoliService: ArticoliDataService) { }

  ngOnInit() {
    this.codArt = this.route.snapshot.params.codArt;
    this.articoliService.getArticoliByCodArt(this.codArt).subscribe(
      response => {
        this.articolo = response;
        console.log(this.articolo);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

  salva() {
    console.log('Save item');
    this.articoliService.updArticolo(this.articolo).subscribe(
      response => {
        console.log(response);
        this.apiMsg = response;
        this.Conferma = this.apiMsg.message;
      },
      error => {
        console.log(error);
        console.log(error.error.messaggio);
        this.Errore = error.error.messaggio;
      }
    );
  }

}
