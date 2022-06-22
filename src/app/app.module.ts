import { DatosService } from './datos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { FooterNavesComponent } from './footer-naves/footer-naves.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavesListComponent,
    FooterNavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
