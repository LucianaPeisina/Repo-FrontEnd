import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-add-proyectos',
  templateUrl: './add-proyectos.component.html',
  styleUrls: ['./add-proyectos.component.css']
})
export class AddProyectosComponent {
  proyecto: any = {};

  constructor(private proyectosService: ProyectosService) {}

  agregarProyecto() {
    this.proyectosService.agregarProyecto(this.proyecto).subscribe(
      (response) => {
        // Lógica después de agregar el proyecto exitosamente
        console.log('Proyecto agregado:', response);
      },
      (error) => {
        // Manejo de errores al agregar el proyecto
        console.error('Error al agregar proyecto:', error);
      }
    );
  }
}
