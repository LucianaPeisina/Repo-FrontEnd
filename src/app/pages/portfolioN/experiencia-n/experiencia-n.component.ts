import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia-n',
  templateUrl: './experiencia-n.component.html',
  styleUrls: ['./experiencia-n.component.css']
})
export class ExperienciaNComponent implements OnInit {
  experienciasList: any;
  isLoggedIn = false;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
    private experienciaService: ExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.portfolioService.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.experienciasList = data;
    });
  }

  editarExperiencia(id: number) {
    if (this.isLoggedIn) {
      console.log(`Editar experiencia con ID ${id}`);
      this.router.navigate(['/actu-experiencia'], { queryParams: { id: id } });
    } else {
      console.log('Debe iniciar sesión para editar la experiencia.');
    }
  }

  eliminarExperiencia(id: number) {
    if (this.isLoggedIn) {
      console.log(`Eliminar experiencia con ID ${id}`);
      // Lógica adicional para realizar la eliminación utilizando el servicio de experiencias
      this.experienciaService.eliminarExperiencia(id).subscribe(response => {
        console.log('Experiencia eliminada:', response);
        // Realizar cualquier otra acción necesaria después de la eliminación
        window.location.reload(); // Recargar la página
      });
    } else {
      console.log('Debe iniciar sesión para eliminar la experiencia.');
    }
  }
}
