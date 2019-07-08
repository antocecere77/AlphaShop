import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  // autenticato = true;
  consentito = false;
  errorMsg = 'Spiacente, la user id o la password sono errati!';
  // infoMsg = 'Accesso consentito';


  constructor(private route: Router) { }

  ngOnInit() {
  }

  gestAut() {
    if (this.userid === 'antonio' && this.password === '123_Stella') {
      // this.autenticato = true;
      this.route.navigate(['welcome', this.userid]);
      this.consentito = true;
    } else {
      // this.autenticato = false;
      this.consentito = false;
    }
  }

}
