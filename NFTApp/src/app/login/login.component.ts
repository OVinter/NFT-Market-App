import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit(): void {
  }
  public LogIn(): void{
    this.loginService.LogIn(this.model).subscribe();
    this.router.navigate(['home']);

  }

  public signup(): void{
    this.router.navigate(['signup']);
  }

}
