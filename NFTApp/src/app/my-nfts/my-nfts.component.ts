import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Nft} from '../shared/Nft';
import {GetMyNftsService} from './myNftsService';

@Component({
  selector: 'app-my-nfts',
  templateUrl: './my-nfts.component.html',
  styleUrls: ['./my-nfts.component.css']
})
export class MyNftsComponent implements OnInit {

  nfts: any;
  flag: boolean;
  deleteNft: any;
  nftId: number;

  constructor(private getNftsService: GetMyNftsService, private router: Router) { }

  ngOnInit(): void {
    this.flag = true;
    if (localStorage.getItem('currentUser') === null) {
      this.flag = false;
    }
    if (this.flag) {
      this.GetNfts();
    } else {
      console.log(localStorage.getItem('currentUser'));
    }
  }

  public GetNfts(): any {
    const idUser = localStorage.getItem('idUser');
    this.getNftsService.GetNfts(idUser).subscribe(
      (response: Nft[]) => {
        this.nfts = response;
        console.log(this.nfts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProducts(key: string): void {
    console.log(key);
    const results: Nft[] = [];
    for (const nft of this.nfts) {
      if (nft.nftName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(nft);
      }
    }
    this.nfts = results;
    if (results.length === 0 || !key) {
      this.GetNfts();
    }
  }

  public onDeleteProduct(nft: Nft): void {
    const idUser = localStorage.getItem('idUser');
    this.getNftsService.deleteNft(nft.id, idUser).subscribe(
      (response: void) => {
        console.log(response);
        this.GetNfts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduct(): void {
    this.router.navigate(['nfts/add']);
  }

  public onModifyProduct(nft: Nft): void {
    localStorage.setItem('modifyProduct', JSON.stringify(nft));
    this.router.navigate(['nfts/modify']);
  }

}
