import { LogoutComponent } from './../auth/logout/logout.component';
import { LoginService } from '../_servicios/login.service';
import { DatosService } from '../_servicios/datos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {
  // PROPIEDADES
  errorApi: string = '';


  // CONSTRUCTOR
  constructor(
    public datosSrv: DatosService,
    public loginSrv: LoginService,
    private router: Router
  ) { }

  // METODOS
  ngOnInit(): void {
    if (!this.loginSrv.logeado) {
      this.loginSrv.errorStr = "No tienes acceso :-(";
      this.router.navigate(['/login'])
    }

    if (this.datosSrv.arrayNaves.length) return;

    this.datosSrv.getListaNaves$().subscribe(
      respuesta => {
        this.datosSrv.arrayNaves = respuesta.results;
        this.datosSrv.urlSiguiente = respuesta.next;
        console.log(this.datosSrv.arrayNaves);
      },
      error => {
        this.datosSrv.errorApi = 'ERROR API: ' + error.message;
      },
      () => {
        console.log('HTTP request completed.')
      }

    );

    console.log("Esto se ejecutará antes que el console log de arriba");
  }


}

