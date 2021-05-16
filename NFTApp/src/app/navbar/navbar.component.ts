import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flag: any;
  constructor() { }

  ngOnInit(): void {
    console.log('currentUser');
    if (localStorage.getItem('currentUser'))
    {
      this.flag = true;
    }
    else
    {
      this.flag = false;
    }
  }

}
