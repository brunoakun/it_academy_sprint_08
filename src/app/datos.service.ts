import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nave } from './nave.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //PROPIEDADES

  //CONSTRUCTOR
  constructor() { }


  //METODOS  

  async getListaNaves() {
    // Llenar el array de naves
    const arrayNaves: any[] = [];
    const respuesta = await fetch('http://swapi.dev/api/starships');
    let ListadoNaves = await respuesta.json();
    console.log(ListadoNaves.results);

    for (let nave of ListadoNaves.results) {
      arrayNaves.push(nave);
    }
    return (arrayNaves);
  }


}
