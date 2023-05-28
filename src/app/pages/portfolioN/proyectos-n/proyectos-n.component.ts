import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos-n',
  templateUrl: './proyectos-n.component.html',
  styleUrls: ['./proyectos-n.component.css']
})
export class ProyectosNComponent implements OnInit {
  proyectoList: any;
  isLoggedIn = false;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
    private proyectosService: ProyectosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.portfolioService.obtenerProyecto().subscribe(data => {
      console.log(data);
      this.proyectoList = data;
    });
  }

  editarProyecto(id: number) {
    if (this.isLoggedIn) {
      // Lógica para editar proyecto solo si ha iniciado sesión
      console.log(`Editar proyecto con ID ${id}`);
      // Lógica adicional para realizar la edición utilizando el servicio de proyectos
      const proyecto = this.proyectoList.find((item: any) => item.id === id);
      if (proyecto) {
        this.proyectosService.actualizarProyecto(proyecto).subscribe(response => {
          console.log('Proyecto actualizado:', response);
          // Realizar cualquier otra acción necesaria después de la edición
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para editar el proyecto.');
    }
  }

  eliminarProyecto(id: number) {
    if (this.isLoggedIn) {
      // Lógica para eliminar proyecto solo si ha iniciado sesión
      console.log(`Eliminar proyecto con ID ${id}`);
      // Lógica adicional para realizar la eliminación utilizando el servicio de proyectos
      const proyecto = this.proyectoList.find((item: any) => item.id === id);
      if (proyecto) {
        this.proyectosService.borrarProyecto(proyecto.id).subscribe(response => {
          console.log('Proyecto eliminado:', response);
          // Realizar cualquier otra acción necesaria después de la eliminación
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para eliminar el proyecto.');
    }
  }
}
