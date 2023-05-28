import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

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
      // Lógica para editar experiencia solo si ha iniciado sesión
      console.log(`Editar experiencia con ID ${id}`);
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para editar la experiencia.');
    }
  }

  eliminarExperiencia(id: number) {
    if (this.isLoggedIn) {
      // Lógica para eliminar experiencia solo si ha iniciado sesión
      console.log(`Eliminar experiencia con ID ${id}`);
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para eliminar la experiencia.');
    }
  }
}
