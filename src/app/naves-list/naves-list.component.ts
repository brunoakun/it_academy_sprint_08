import { DatosService } from './../datos.service';
import { Component, OnInit } from '@angular/core';
import { Nave } from '../nave.model';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {
  arrayNaves: Nave[] = [];

  constructor(private datosSrv: DatosService) { }

  async ngOnInit() {
    this.arrayNaves = await this.datosSrv.getListaNaves();
  }

}
