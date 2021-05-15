// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//
//   constructor() {
//   }
//
//   ngOnInit(): void {
//   }
// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from './SignupService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};

  errorMessage: string;

  constructor(private router: Router, private signupService: SignupService) {
  }
  // constructor() {
  //
  // }


  ngOnInit(): void {

  }

  signup(): any {
    console.log(this.model);
    this.signupService.SignUp(this.model).subscribe();
  }

}
