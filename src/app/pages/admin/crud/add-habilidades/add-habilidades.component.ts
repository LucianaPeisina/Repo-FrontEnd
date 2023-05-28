import { Component } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-add-habilidades',
  templateUrl: './add-habilidades.component.html',
  styleUrls: ['./add-habilidades.component.css']
})
export class AddHabilidadesComponent {
  habilidadBlanda: any = {};
  habilidadDura: any = {};

  constructor(private habilidadesService: HabilidadesService) {}

  agregarBlanda() {
    // Lógica para agregar habilidad blanda
    this.habilidadesService.agregarBlandas(this.habilidadBlanda).subscribe(
      (response) => {
        console.log('Habilidad blanda agregada:', response);
        // Restablecer los campos de la habilidad blanda después de agregarla
        this.habilidadBlanda = {};
      },
      (error) => {
        console.error('Error al agregar habilidad blanda:', error);
      }
    );
  }

  agregarDura() {
    // Lógica para agregar habilidad dura
    this.habilidadesService.agregarDuras(this.habilidadDura).subscribe(
      (response) => {
        console.log('Habilidad dura agregada:', response);
        // Restablecer los campos de la habilidad dura después de agregarla
        this.habilidadDura = {};
      },
      (error) => {
        console.error('Error al agregar habilidad dura:', error);
      }
    );
  }

  agregarHabilidad() {
    // Lógica para agregar ambas habilidades (blandas y duras)
    this.agregarBlanda();
    this.agregarDura();
  }
}
