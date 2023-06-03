import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-habilidades-n',
  templateUrl: './habilidades-n.component.html',
  styleUrls: ['./habilidades-n.component.css']
})
export class HabilidadesNComponent implements OnInit {
  habiDList: any;
  habiBList: any;
  isLoggedIn = false;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
    private habilidadesService: HabilidadesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.portfolioService.obtenerDuras().subscribe(data => {
      console.log(data);
      this.habiDList = data;
    });

    this.portfolioService.obtenerBlandas().subscribe(data => {
      console.log(data);
      this.habiBList = data;
    });
  }

  eliminarHabilidad(id: number, esDura: boolean) {
    if (this.isLoggedIn) {
      // Lógica para eliminar habilidad solo si ha iniciado sesión
      console.log(`Eliminar habilidad con ID ${id}`);
      // Lógica adicional para realizar la eliminación utilizando el servicio de habilidades
      if (esDura) {
        const habilidad = this.habiDList.find((item: any) => item.id === id);
        if (habilidad) {
          this.habilidadesService.borrarDura(habilidad.id).subscribe(response => {
            console.log('Habilidad dura eliminada:', response);
            // Realizar cualquier otra acción necesaria después de la eliminación
            window.location.reload(); // Recargar la página
          });
        }
      } else {
        const habilidad = this.habiBList.find((item: any) => item.id === id);
        if (habilidad) {
          this.habilidadesService.borrarBlanda(habilidad.id).subscribe(response => {
            console.log('Habilidad blanda eliminada:', response);
            // Realizar cualquier otra acción necesaria después de la eliminación
            window.location.reload(); // Recargar la página
          });
        }
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para eliminar la habilidad.');
    }
  }
}
