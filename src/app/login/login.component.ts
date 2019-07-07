import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = 'Antonio';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  gestAut() {
    console.log(this.userid);
    console.log(this.password);
  }

}
