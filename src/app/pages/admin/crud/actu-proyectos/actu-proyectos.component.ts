import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-actu-proyectos',
  templateUrl: './actu-proyectos.component.html',
  styleUrls: ['./actu-proyectos.component.css']
})
export class ActuProyectosComponent implements OnInit {

  proyecto: any = {};
  proyectoId: number = 0;

  constructor(
    private proyectoService: ProyectosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.proyectoId = Number(params['id']);
      // Lógica para cargar los datos de la proyecto utilizando el servicio de proyecto
      this.proyectoService.buscarProyecto(this.proyectoId).subscribe(data => {
        this.proyecto = data;
      });
    });
  }

  public actualizarProyecto() {
    this.proyectoService.actualizarProyecto(this.proyecto).subscribe(
      (data) => {
        console.log('proyecto actualizada:', data);
        // Realizar cualquier otra acción necesaria después de la actualización
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error al actualizar la proyecto:', error);
        // Realizar cualquier otra acción necesaria en caso de error
      }
    );
  }
}
