import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  forma: any;
  creadoStatus = false;
  textoAlerta = '';

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.crearFormulario()
  }

  get nombreNoValido(): boolean {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get correoNoValido(): boolean {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get telefonoNoValido(): boolean {
    return this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }

  get mensajeNoValido(): boolean {
    return this.forma.get('mensaje').invalid && this.forma.get('mensaje').touched;
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)] ],
      correo: ['', [Validators.required, Validators.minLength(1)]],
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(14)]],
      mensaje: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(300)]],
    });
  }

  crearUsuario() {
    console.log(this.forma.value);
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( (control: any) => {
        control.markAsTouched();
      });
    }
    this.usersService.crearUsuario(this.forma.value);
    this.forma.reset();
    this.creadoStatus = true;
    this.textoAlerta = 'Usuario Creado exitosamente';
    // this.router.navigate(['/administrar']);
  }

}
