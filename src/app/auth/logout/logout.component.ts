import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_servicios/login.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(
    private ruta: Router,
    public loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.loginSrv.usrLogin = {
      email: '',
      password: ''
    };

    this.ruta.navigate(['/login'])
  }

}
