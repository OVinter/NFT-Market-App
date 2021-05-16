import { Component, OnInit } from '@angular/core';
import {AddNftService} from './addNftService';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-nft',
  templateUrl: './add-nft.component.html',
  styleUrls: ['./add-nft.component.css']
})
export class AddNftComponent implements OnInit {

  model: any = {};

  constructor(private addNftService: AddNftService, private router: Router) { }

  ngOnInit(): void {
  }

  addNft(): void {
    const idUser = localStorage.getItem('idUser');
    this.addNftService.AddProduct(this.model, idUser).subscribe();
    this.router.navigate(['nfts']).then(() => {
      window.location.reload();
    });
  }

}
