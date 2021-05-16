import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMyNftsService {

  UrlMyProducts: string;
  header: any;
  errorData: {};

  constructor(private http: HttpClient, private router: Router) {

    this.UrlMyProducts = 'http://localhost:8080/api/users/';
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetNfts(idUser: any): any {
    const idToken = localStorage.getItem('currentUser');
    console.log(idToken);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    console.log(this.UrlMyProducts + idUser + '/nfts');
    console.log(httpOptions);
    return this.http.get<any>(this.UrlMyProducts + idUser + '/nfts', httpOptions);
    // return this.http.get<any>(this.UrlMyProducts, httpOptions);
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

  public deleteNft(productId: number, idUser: any): Observable<void> {
    const idToken = localStorage.getItem('currentUser');
    console.log(productId);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))}) };
    return this.http.delete<void>(`${this.UrlMyProducts}${idUser}/nfts/${productId}`, httpOptions);
  }
}
