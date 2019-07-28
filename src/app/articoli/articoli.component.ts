
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ArticoliDataService } from '../services/data/articoli-data.service';
import { Router } from '@angular/router';

export class Articoli {

  constructor(
    public codArt: string,
    public descrizione: string,
    public um: string,
    public pzcart: number,
    public peso: number,
    public prezzo: number,
    public idStatoArt: string,
    public data: Date,
    public famAssort: FamAss,
    public iva: Iva
  ) {}
}

export class Iva {
  constructor(
    public idIva: number,
    public descrizione: string,
    public aliquota: number
  ) {}
}

export class FamAss {
  constructor(
    public id: number,
    public descrizione: string
  ) {}
}

export class ApiMsg {

  constructor(
    public code: string,
    public message: string
  ) {}
}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  NumArt = 0;

  pagina = 1;
  righe = 10;

  filter: string;
  articolo: Articoli;
  articoli: Articoli[];

  apiMsg: ApiMsg;
  messaggio: string;

  /*
  articoli = [
    new Articoli('014600301','BARILLA FARINA 1 KG','PZ',24,1,1.09,true,new Date()),
    new Articoli('013500121','BARILLA PASTA GR.500 N.70 1/2 PENNE','PZ',30,0.5,1.3,true,new Date()),
    new Articoli('007686402','FINDUS FIOR DI NASELLO 300 GR','PZ',8,0.3,6.46,true,new Date()),
    new Articoli('057549001','FINDUS CROCCOLE 400 GR','PZ',12,0.4,5.97,true,new Date())
  ]
  */

  constructor(private route: ActivatedRoute, private router: Router, private articoliService: ArticoliDataService) { }

  ngOnInit() {

    this.filter = this.route.snapshot.params.filter;

    if (this.filter !== undefined) {
      this.getArticoli(this.filter);
    }

  }

  refresh() {
    this.messaggio = '';
    this.getArticoli(this.filter);
  }

  public getArticoli(filter: string) {

    this.articoliService.getArticoliByCodArt(filter).subscribe(
      response => {

        this.articoli = [];
        console.log('Ricerchiamo articoli per codart con filtro ' + filter);

        this.articolo = response;
        console.log(this.articolo);

        this.articoli.push(this.articolo);

        this.NumArt = this.articoli.length;
        console.log(this.articoli.length);
      },
      error => {
        console.log(error.error.messaggio);
        console.log('Ricerchiamo articoli per ean con filtro ' + filter);

        this.articoliService.getArticoliByEan(filter).subscribe(
          response => {
            this.articoli = [];
            this.articolo = response;
            console.log(this.articolo);

            this.articoli.push(this.articolo);

            this.NumArt = this.articoli.length;
            console.log(this.articoli.length);
          },
          error2 => {
            console.log(error.error.messaggio);
            console.log('Ricerchiamo articoli per descrizione con filtro ' + filter);
            this.articoliService.getArticoliByDescription(filter).subscribe(
              response => {
                this.articoli = response;
                console.log(this.articoli);

                this.NumArt = this.articoli.length;
                console.log(this.articoli.length);
              }
            );
          }
        );
      }
    );
  }

  Elimina(CodArt: string) {
    console.log(`Eliminazione articolo ${CodArt}`);
    this.articoliService.delArticoloByCodArt(CodArt).subscribe(
      response => {
        console.log(response);
        this.refresh();
        this.apiMsg = response;
        this.messaggio = this.apiMsg.message;
      }
    );
  }

  Modifica(CodArt: string) {
    console.log(`Modifica articolo ${CodArt}`);
    this.router.navigate(['newart', CodArt]);
  }

}
