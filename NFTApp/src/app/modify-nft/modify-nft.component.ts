import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModifyNftService} from "./modifyNftService";

@Component({
  selector: 'app-modify-nft',
  templateUrl: './modify-nft.component.html',
  styleUrls: ['./modify-nft.component.css']
})
export class ModifyNftComponent implements OnInit {

  model: any = {};
  modify: any = {};
  flag: any;

  constructor(private router: Router, private addProductService: ModifyNftService) {
    this.modify = JSON.parse(localStorage.getItem('modifyProduct'));
  }

  ngOnInit(): void {
    if (this.modify) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  modifyNft(): any {
    console.log(this.model);
    console.log(this.modify);
    if (!this.model.nftName) {
      this.model.nftName = this.modify.nftName;
    }
    if (!this.model.bidPrice) {
      this.model.bidPrice = this.modify.bidPrice;
    }
    if (!this.model.mediaFile) {
      this.model.mediaFile = this.modify.mediaFile;
    }
    console.log(this.model);
    localStorage.removeItem('modifyProduct');
    this.addProductService.ModifyNft(this.model, this.modify.id).subscribe();
  }

}
