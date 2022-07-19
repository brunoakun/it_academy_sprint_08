import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { INave } from '../_modelos/if-nave';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //PROPIEDADES 
  public arrayNaves: INave[] = [];
  public datosNave: INave[] = [];

  private arrNaves$ = new Subject<any[]>();   // Creamos arrNaves$ como un objeto OBSERVABLE. Emitirá evento
  private datosNave$ = new Subject<INave[]>();   // Creamos datosNave$ como un objeto OBSERVABLE. Emitirá evento

  public errorApi: string = '';
  public urlSiguiente: string = '';

  //CONSTRUCTOR
  constructor(private http: HttpClient) {
    this.arrNaves$ = new Subject();
  }


  //METODOS  

  getListaNaves$(url?: string): Observable<any> {
    //Listado de Naves
    if (!url) url = 'http://swapi.dev/api/starships';
    let resultado = this.http.get(url);
    this.arrNaves$.next(this.arrayNaves);   // Emite arrNaves$
    return (resultado);
  }

  getNave$(id: number): Observable<any> {
    //Datos Nave
    let resultado = this.http.get('https://swapi.dev/api/starships/' + id);
    this.datosNave$.next(this.datosNave);   // Emite datosNave$
    return (resultado);
  }

  getNaveId(url: string) {
    // Devuelve el id de una nave
    const auxArr: string[] = url.split("/");
    let le = auxArr.length;
    return (auxArr[le - 2]);
  }



}
