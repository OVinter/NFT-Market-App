import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import {Nft} from "../shared/Nft";
import {NftModel} from '../shared/NftModel';

@Injectable({
  providedIn: 'root'
})
export class GetNftsService {

  UrlNfts: string;
  UrlDeleteNft: string;
  nft: any;
  header: any;
  errorData: {};
  nftAdd: NftModel;

  constructor(private http: HttpClient) {

    this.UrlNfts = 'http://localhost:8080/api/nfts';
    this.UrlDeleteNft = 'http://localhost:8080/api/users';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  GetNfts(): any {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.get<any>(this.UrlNfts, httpOptions);
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

  onBidNft(idUser: any, id: any): any {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    return this.http.get<any>(this.UrlNfts + '/' + id, httpOptions);

  }

  printNft(nft: any): any{
    const idUser = localStorage.getItem('idUser');
    console.log(nft);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    return this.http.delete<any>(this.UrlDeleteNft + '/' + nft.idUser + '/nfts/' + nft.id, httpOptions);

  }

  addNft(n: Nft): any {
    console.log(n);
    const idUser = +localStorage.getItem('idUser');
    const a = n as Nft;
    console.log(a);
    this.nftAdd.nftName = a.nftName;
    this.nftAdd.bidPrice = a.bidPrice;
    this.nftAdd.mediaFile = a.mediaFile;
    // console.log(this.nftAdd + "hahahhahahaha");
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    return this.http.post<any>(this.UrlDeleteNft + '/' + idUser + '/nfts', JSON.stringify(this.nftAdd), httpOptions);
  }
}
