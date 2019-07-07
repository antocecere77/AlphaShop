import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messaggio = 'Saluti sono il componente welcome';

  constructor() { }

  ngOnInit() {    
    console.log(this.messaggio);
  }

}
