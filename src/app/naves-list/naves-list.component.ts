import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {
  // PROPIEDADES

  // CONSTRUCTOR
  constructor(public datosSrv: DatosService) { }

  // METODOS
  ngOnInit(): void {
    // iniciar array de naves
    this.datosSrv.getListaNaves();

    // Suscribirse a la lista de naves, cada vez que exista un cambio, se añadirán los datos al array arrayNaves de datosSrv
    this.datosSrv.getListaNaves$().subscribe(naves => {
      this.datosSrv.arrayNaves.push(...naves.results);
    })
  }

}
