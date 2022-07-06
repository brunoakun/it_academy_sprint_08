import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from './modelos/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usrLogin: IUser = {
    email: '',
    password: ''
  }

  constructor(private router: Router) { }


  logIn(usr: IUser) {
    const encontrado = localStorage.getItem(usr.email);
    if (encontrado) this.usrLogin = JSON.parse(encontrado);

    if (!encontrado) {
      alert("Usuario NO encontrado");
      return
    }
    if (usr.password != this.usrLogin.password) {
      alert("Password INCORRECTO");
      return
    }
  }


  existeUsr(nombre: string) {
    var existe = false;
    if (localStorage.getItem(nombre)) existe = true;
    return existe;
  }

  addUsr(usr: IUser) {
    alert(usr.email);
    localStorage.setItem(usr.email, JSON.stringify(usr));
  };


}


