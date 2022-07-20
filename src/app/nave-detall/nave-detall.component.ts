import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from '../_servicios/datos.service';
import { checkIfImageExists } from '../_funciones/checkIfImageExists'
import { INave } from '../_modelos/if-nave';
import { LoginService } from '../_servicios/login.service';

@Component({
  selector: 'app-nave-detall',
  templateUrl: './nave-detall.component.html',
  styleUrls: ['./nave-detall.component.css']
})
export class NaveDetallComponent implements OnInit {

  //PROPIEDADES

  datosNave: INave = {
    id: 0,
    foto: '',
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: 0,
    length: 0,
    max_atmosphering_speed: 0,
    crew: '',
    passengers: 0,
    cargo_capacity: 0,
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: undefined,
    edited: undefined,
    url: ''
  }

  errorTxt: string = '';
  auxId: number = 0;
  auxFoto: string = '';


  // CONSTRUCTOR
  constructor(
    public datosSrv: DatosService,
    private rutaActiva: ActivatedRoute,
    public loginSrv: LoginService,
    private router: Router
  ) { }


  // METODOS
  ngOnInit(): void {

    if (!this.loginSrv.usrLogin.email) {
      this.loginSrv.errorStr = "No tienes acceso";
      this.router.navigate(['/login'])
    }

    this.auxId = Number(this.rutaActiva.snapshot.paramMap.get('id'));
    this.auxFoto = `https://starwars-visualguide.com/assets/img/starships/${this.auxId}.jpg`;

    this.validaId(this.auxId);
    this.validaImagen();

    this.datosSrv.getNave$(this.auxId).subscribe(
      respuesta => {
        this.datosNave = respuesta;
      },
      error => {
        this.datosSrv.errorApi = 'ERROR API: ' + error.message;
      },
      () => {
        console.log('HTTP request getNave$ completed. Añadir mas datos, foto e Id');
        this.datosNave.id = this.auxId;
        this.datosNave.foto = this.auxFoto;
        console.log(this.datosNave);
      }

    );


  }

  validaId(id: number) {
    if (isNaN(id)) this.errorTxt = `Id NO válida`;
  }

  validaImagen() {
    checkIfImageExists(this.auxFoto, (exists: boolean) => {
      if (!exists) {
        this.errorTxt = `${this.datosNave.foto} Foto NO existe o inválida... `;
        this.auxFoto = '../img/chewbacca.jpg';
        this.auxFoto = './assets/img/chewbacca.jpg';
      }
    });

  }


}
