import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import { MyNftsComponent } from './my-nfts/my-nfts.component';
import { AddNftComponent } from './add-nft/add-nft.component';
import { ModifyNftComponent } from './modify-nft/modify-nft.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    MyNftsComponent,
    AddNftComponent,
    ModifyNftComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
