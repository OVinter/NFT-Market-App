
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DummyComponent} from './dummy/dummy.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: 'home', component: DummyComponent },
  // { path: 'services', component: DummyComponent },
  // { path: 'projects', component: DummyComponent },
  // { path: 'aboutus', component: DummyComponent },
   { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
