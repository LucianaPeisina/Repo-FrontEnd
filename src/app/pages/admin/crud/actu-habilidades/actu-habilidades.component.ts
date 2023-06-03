import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-actu-habilidades',
  templateUrl: './actu-habilidades.component.html',
  styleUrls: ['./actu-habilidades.component.css']
})
export class ActuHabilidadesComponent implements OnInit {
  habilidad: any = {};
  esDura: boolean = false;
  habilidadId: number = 0;

  constructor(
    private habilidadesService: HabilidadesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.habilidadId = params['id'];
      this.esDura = params['esDura'] === 'true';

      if (this.esDura) {
        this.habilidadesService.buscarDura(this.habilidadId).subscribe(data => {
          console.log(data);
          this.habilidad = data;
        });
      } else {
        this.habilidadesService.buscarBlanda(this.habilidadId).subscribe(data => {
          console.log(data);
          this.habilidad = data;
        });
      }
    });
  }

  actualizarHabilidad() {
    const data = {
      habilidadId: this.habilidadId,
      habilidad: this.habilidad
    };
  
    if (this.esDura) {
      this.habilidadesService.actualizarDuras(data).subscribe(response => {
        console.log('Habilidad dura actualizada:', response);
        // Realizar cualquier otra acción necesaria después de la actualización
        this.router.navigate(['/']);
      });
    } else {
      this.habilidadesService.actualizarBlandas(data).subscribe(response => {
        console.log('Habilidad blanda actualizada:', response);
        // Realizar cualquier otra acción necesaria después de la actualización
        this.router.navigate(['/']);
      });
    }
  }
  
  }
