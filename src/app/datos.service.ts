import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //PROPIEDADES
  private naves$: Subject<any[]>;   // Creamos naves$ como un objeto OBSERVABLE
  public arrayNaves: any[] = [];

  //CONSTRUCTOR
  constructor() {
    this.naves$ = new Subject();
  }


  //METODOS  

  /**
   * Listado de Naves
   */
  async getListaNaves(url?: string) {
    if (!url) url = 'http://swapi.dev/api/starships';
    const respuesta = await fetch(url);
    let ListadoNaves = await respuesta.json();
    // console.log(ListadoNaves);
    this.naves$.next(ListadoNaves);   // Dispara el aviso a los que estén subscritos a getListaNaves$ y les enviará el ListadoNaves
  }

  getListaNaves$(): Observable<any> {   // Creo el Observable para que se subscriban
    return this.naves$.asObservable();
  }


}
