import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css']
})
export class DescargarComponent {

  constructor(private usersService: UsersService) { }

  crearArchivo() {
    this.usersService.crearArchivo();
  }

}
