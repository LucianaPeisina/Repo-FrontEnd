import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerramientasService } from 'src/app/servicios/herramientas.service';

@Component({
  selector: 'app-actu-herramientas',
  templateUrl: './actu-herramientas.component.html',
  styleUrls: ['./actu-herramientas.component.css']
})
export class ActuHerramientasComponent implements OnInit {
  herramienta: any;
  isSkills: boolean;

  constructor(private route: ActivatedRoute, private herramientasService: HerramientasService) {
    this.herramienta = {};
    this.isSkills = false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.isSkills = params['esSkills'];

      if (this.isSkills===true) {
        this.herramientasService.buscarSkills(id).subscribe(response => {
          this.herramienta = response;
        });
      } else {
        this.herramientasService.buscarDesarrollo(id).subscribe(response => {
          this.herramienta = response;
        });
      }
    });
  }

  actualizarHerramienta() {
    if (this.isSkills) {
      this.herramientasService.actualizarSkills(this.herramienta).subscribe(response => {
        console.log('Skills actualizados:', response);
        // Realizar cualquier otra acción necesaria después de la actualización
      });
    } else {
      this.herramientasService.actualizarDesarrollo(this.herramienta).subscribe(response => {
        console.log('Desarrollo actualizado:', response);
        // Realizar cualquier otra acción necesaria después de la actualización
      });
    }
  }
}
