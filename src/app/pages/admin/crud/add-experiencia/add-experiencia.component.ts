import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent {
  experiencia: any = {};

  constructor(private experienciaService: ExperienciaService) {}

  agregarExperiencia() {
    this.experienciaService.agregarExperiencia(this.experiencia).subscribe(
      (response) => {
        // Lógica después de agregar la experiencia exitosamente
        console.log('Experiencia agregada:', response);
      },
      (error) => {
        // Manejo de errores al agregar la experiencia
        console.error('Error al agregar experiencia:', error);
      }
    );
  }
}
