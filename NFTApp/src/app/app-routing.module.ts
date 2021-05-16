
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';
import {SignupComponent} from './signup/signup.component';
import {MyNftsComponent} from './my-nfts/my-nfts.component';
import {AddNftComponent} from './add-nft/add-nft.component';
import {ModifyNftComponent} from './modify-nft/modify-nft.component';
import {LogoutComponent} from './logout/logout.component';


const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: 'home', component: DummyComponent },
  { path: 'nfts/modify', component: ModifyNftComponent },
  { path: 'nfts/add', component: AddNftComponent },
  { path: 'nfts', component: MyNftsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
