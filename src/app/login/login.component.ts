import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  autenticato = true;
  consentito = false;
  errorMsg = 'Spiacente, la user id o la password sono errati!';
  infoMsg = 'Accesso consentito';


  constructor() { }

  ngOnInit() {
  }

  gestAut() {
    if (this.userid === 'Antonio' && this.password === '123_Stella') {
      this.autenticato = true;
      this.consentito = true;
    } else {
      this.autenticato = false;
      this.consentito = false;
    }
  }

}
