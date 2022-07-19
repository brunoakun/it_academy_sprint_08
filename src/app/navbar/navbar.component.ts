import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../_servicios/datos.service';
import { LoginService } from '../_servicios/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public datosSrv: DatosService,    
    public loginSrv: LoginService,
    ) { }

  ngOnInit(): void {
  }

}
