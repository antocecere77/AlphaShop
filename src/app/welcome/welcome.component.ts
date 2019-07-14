import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  // messaggio = 'Saluti sono il componente welcome';

  saluti = 'Benvenuti nel sito Alphashop';
  titolo2 = 'Seleziona gli articoli da acquistare';

  utente = '';
  messaggio = '';

  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { }

  ngOnInit() {
    this.utente = this.route.snapshot.params.userid;
  }

  getSaluti() {
    this.salutiSrv.getSaluti().subscribe(
      response => this.handleResponse(response)
    );
  }

  handleResponse(response) {
    this.messaggio = response;
    console.log(response);
  }
}
