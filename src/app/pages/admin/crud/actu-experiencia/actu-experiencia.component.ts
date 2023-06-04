import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-actu-experiencia',
  templateUrl: './actu-experiencia.component.html',
  styleUrls: ['./actu-experiencia.component.css']
})
export class ActuExperienciaComponent implements OnInit {

  experiencia: any = {};
  experienciaId: number = 0;

  constructor(
    private experienciaService: ExperienciaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.experienciaId = Number(params['id']);
      // Lógica para cargar los datos de la experiencia utilizando el servicio de experiencia
      this.experienciaService.buscarExperiencia(this.experienciaId).subscribe(data => {
        this.experiencia = data;
      });
    });
  }

  public actualizarDatos() {
    this.experienciaService.actualizarExperiencia(this.experiencia).subscribe(
      (data) => {
        console.log('Experiencia actualizada:', data);
        // Realizar cualquier otra acción necesaria después de la actualización
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al actualizar la experiencia:', error);
        // Realizar cualquier otra acción necesaria en caso de error
      }
    );
  }
}
