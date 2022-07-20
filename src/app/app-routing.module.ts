import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NaveDetallComponent } from './nave-detall/nave-detall.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'logout/:del', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'naves', component: NavesListComponent },
  { path: 'naves/:id', component: NaveDetallComponent }  // Parámetro 'id' 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
