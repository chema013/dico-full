import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { DescargarComponent } from './components/descargar/descargar.component';

const routes: Routes = [
  { path: '', component: CrearUsuarioComponent},
  { path: 'crear', component: CrearUsuarioComponent },
  { path: 'descargar', component: DescargarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
