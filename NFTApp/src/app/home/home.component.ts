import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Nft} from '../shared/Nft';
import {GetNftsService} from "./HomeService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nfts: any[];
  nmnft = [];

  constructor(private getNftsService: GetNftsService, private router: Router) { }

  ngOnInit(): void {
    this.GetNfts();
  }

  public GetNfts(): any {
    this.getNftsService.GetNfts().subscribe(
      (response: Nft[]) => {
        this.nfts = response.filter(nft => nft.idUser !== +localStorage.getItem('idUser'));
        console.log(this.nfts);
        console.log(this.nfts);
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    console.log(this.nmnft);
    console.log(this.nfts);
  }

  public searchNfts(key: string): void {
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

  public onBidNft(): void {}

}
