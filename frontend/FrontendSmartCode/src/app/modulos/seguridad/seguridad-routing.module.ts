import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/inicio',
    pathMatch:"full"
  },
  {
    path:'identificar',
    component:IdentificacionComponent,
    pathMatch:"full"
  },
  {
    path:'seguridad',
    loadChildren: ()=> import("./seguridad.module").then(x=>x.SeguridadModule),
    pathMatch:"full"
  },
  {
    path:'cerrar-sesion',
    component:CerrarSesionComponent,
    pathMatch:"full"
  },
  {
    path:'cambio-clave',
    component:CambioClaveComponent,
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
