import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.servicioSeguridad.EliminarInformacionSesion();
  }

}