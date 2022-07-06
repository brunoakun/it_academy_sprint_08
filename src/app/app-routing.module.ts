import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NaveDetallComponent } from './nave-detall/nave-detall.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'naves', component: NavesListComponent },
  { path: 'naves/:id', component: NaveDetallComponent }  // Parámetro 'id' 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
