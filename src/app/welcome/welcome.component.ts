import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.utente = this.route.snapshot.params.userid;
  }

}
