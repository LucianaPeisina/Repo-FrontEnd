import { Component } from '@angular/core';
import { HerramientasService } from 'src/app/servicios/herramientas.service';

@Component({
  selector: 'app-add-herramientas',
  templateUrl: './add-herramientas.component.html',
  styleUrls: ['./add-herramientas.component.css']
})
export class AddHerramientasComponent {
  tipo: string | undefined;
  nombre: string | undefined;
  nivel: string | undefined;
  logo: string | undefined;

  constructor(private herramientasService: HerramientasService) {}

  agregarHerramienta() {
    if (this.tipo === 'skills') {
      const nuevaSkill = {
        nombre: this.nombre,
        nivel: this.nivel,
        logo: this.logo
      };
      this.herramientasService.agregarSkills(nuevaSkill).subscribe(response => {
        console.log('Habilidad agregada:', response);
        // Realizar cualquier otra acción necesaria después de agregar la habilidad
      });
    } else if (this.tipo === 'desarrollo') {
      const nuevoDesarrollo = {
        nombre: this.nombre,
        nivel: this.nivel,
        logo: this.logo
      };
      this.herramientasService.crearDesarrollo(nuevoDesarrollo).subscribe(response => {
        console.log('Desarrollo agregado:', response);
        // Realizar cualquier otra acción necesaria después de agregar el desarrollo
      });
    }
  }
}
