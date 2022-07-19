import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from './datos.service';

import { IUser } from '../_modelos/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public errorStr = '';
  usrLogin: IUser = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    public datosSrv: DatosService
  ) { }


  logIn(usr: IUser) {
    const encontrado = localStorage.getItem(usr.email);
    if (encontrado) this.usrLogin = JSON.parse(encontrado);

    if (!encontrado) {
      this.errorStr = 'Usuario NO encontrado';
      return
    }
    if (usr.password != this.usrLogin.password) {
      this.errorStr = 'Password INCORRECTO';
      return
    }
  }


  existeUsr(nombre: string): boolean {
    var existe = false;
    alert('nombre:' + nombre);
    if (localStorage.getItem(nombre)) existe = true;
    return existe;
  }

  addUsr(usr: IUser) {
    alert(usr.email);
    localStorage.setItem(usr.email, JSON.stringify(usr));
  };


}


