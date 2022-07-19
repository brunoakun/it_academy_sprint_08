import { Component, OnInit } from '@angular/core';
import { interval, take, finalize } from 'rxjs';
import { DatosService } from '../_servicios/datos.service';

@Component({
  selector: 'app-footer-naves',
  templateUrl: './footer-naves.component.html',
  styleUrls: ['./footer-naves.component.css']
})
export class FooterNavesComponent implements OnInit {

  // PROPIEDADES
  totalNaves: number = 0;
  totalNavesCargadas: number = 0;
  //urlSiguiente: string = '';

  apiFin: boolean = true;

  // CONSTRUCTOR
  constructor(public datosSrv: DatosService) { }

  // METODOS
  ngOnInit(): void {
    //  if (this.datosSrv.arrayNaves.length >= this.totalNavesCargadas) this.apiFin = true; 
    // Suscribirse a la lista de naves 

    this.datosSrv.getListaNaves$().subscribe(data => {
      //  this.datosSrv.urlSiguiente = data.next;
      this.totalNaves = data.count;
      this.totalNavesCargadas = this.datosSrv.arrayNaves.length;

    });

  }

  getMasNaves() {
    this.apiFin = false;
    this.datosSrv.getListaNaves$(this.datosSrv.urlSiguiente).subscribe(data => {
      //    this.datosSrv.urlSiguiente = data.next;
      this.totalNaves = data.count;
      this.datosSrv.urlSiguiente = data.next;
      console.log(data)

      // Añadir resultados al array de naves
      this.datosSrv.arrayNaves.push(...data.results);
      this.totalNavesCargadas = this.datosSrv.arrayNaves.length;
    },
      error => {
        this.datosSrv.errorApi = 'ERROR API: ' + error.message;
      },
      () => {
        this.apiFin = true;
      })
  }

}
