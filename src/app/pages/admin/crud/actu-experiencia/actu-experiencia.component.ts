import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actu-experiencia',
  templateUrl: './actu-experiencia.component.html',
  styleUrls: ['./actu-experiencia.component.css']
})
export class ActuExperienciaComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private experienciaService:ExperienciaService,
    private router:Router) { }

  experienciaId = 0;
  experiencia:any;


  ngOnInit(): void {
    this.experienciaId = this.route.snapshot.params['experienciaId'];
    this.experienciaService.obtenerExperiencia(this.experienciaId).subscribe(
      (data) => {
        this.experiencia = data;
        console.log(this.experiencia);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public actualizarDatos(){
    this.experienciaService.actualizarExperiencia(this.experiencia).subscribe(
      (data) => {
        Swal.fire('experiencia actualizado','El experiencia ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/experiencia']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el experiencia','error');
        console.log(error);
      }
    )
  }
}
