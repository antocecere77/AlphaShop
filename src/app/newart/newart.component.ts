import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articoli } from '../articoli/articoli.component';
import { ArticoliDataService } from '../services/data/articoli-data.service';

@Component({
  selector: 'app-newart',
  templateUrl: './newart.component.html',
  styleUrls: ['./newart.component.css']
})
export class NewartComponent implements OnInit {

  CodArt = '';
  articolo: Articoli;

  constructor(private route: ActivatedRoute, private articoliService: ArticoliDataService) { }

  ngOnInit() {
    this.CodArt = this.route.snapshot.params.codart;
    this.articoliService.getArticoliByCodArt(this.CodArt).subscribe(
      response => {
        this.articolo = response;
        console.log(this.articolo);
      },
      error => {
        console.log(error.error.message);
      }
    );
  }

}
