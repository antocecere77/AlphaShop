import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';
import { AuthJWTService } from '../services/AuthJWTService.';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  autenticato = true;
  errorMsg = 'Spiacente, la user id o la password sono errati!';

  constructor(private route: Router, private BasicAuth: AuthJWTService) { }

  ngOnInit() {
  }

  /*
  gestAut() {
    if (this.BasicAuth.autentica(this.userid, this.password)) {
      this.autenticato = true;
      this.route.navigate(['welcome', this.userid]);
    } else {
      this.autenticato = false;
    }
  }
*/

  gestAuth() {
    this.BasicAuth.autenticaService(this.userid, this.password).subscribe(
      data => {
        console.log(data);
        this.autenticato = true;
        this.route.navigate(['welcome', this.userid]);
      },
      error => {
        console.log(error);
        this.autenticato = false;
      }
    );
  }

}
