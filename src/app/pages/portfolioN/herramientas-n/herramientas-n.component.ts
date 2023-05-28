import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/servicios/herramientas.service';

@Component({
  selector: 'app-herramientas-n',
  templateUrl: './herramientas-n.component.html',
  styleUrls: ['./herramientas-n.component.css']
})
export class HerramientasNComponent implements OnInit {
  skillsList: any;
  desarrolloList: any;
  isLoggedIn = false;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
    private herramientasService: HerramientasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    this.portfolioService.obtenerSkills().subscribe(data => {
      console.log(data);
      this.skillsList = data;
    });

    this.herramientasService.verDesarrollo().subscribe(data => {
      console.log(data);
      this.desarrolloList = data;
    });
  }

  editarSkill(id: number) {
    if (this.isLoggedIn) {
      // Lógica para editar skill solo si ha iniciado sesión
      console.log(`Editar skill con ID ${id}`);
      // Implementa la lógica adicional para realizar la edición utilizando el servicio de herramientas
      const skill = this.skillsList.find((item: any) => item.id === id);
      if (skill) {
        this.herramientasService.actualizarSkills(skill).subscribe(response => {
          console.log('Skill actualizado:', response);
          // Realizar cualquier otra acción necesaria después de la edición
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para editar el skill.');
    }
  }

  borrarSkill(id: number) {
    if (this.isLoggedIn) {
      // Lógica para borrar skill solo si ha iniciado sesión
      console.log(`Borrar skill con ID ${id}`);
      // Implementa la lógica adicional para realizar la eliminación utilizando el servicio de herramientas
      const skill = this.skillsList.find((item: any) => item.id === id);
      if (skill) {
        this.herramientasService.borrarSkills(skill.id).subscribe(response => {
          console.log('Skill eliminado:', response);
          // Realizar cualquier otra acción necesaria después de la eliminación
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para borrar el skill.');
    }
  }

  editarDesarrollo(id: number) {
    if (this.isLoggedIn) {
      // Lógica para editar desarrollo solo si ha iniciado sesión
      console.log(`Editar desarrollo con ID ${id}`);
      // Implementa la lógica adicional para realizar la edición utilizando el servicio de herramientas
      const desarrollo = this.desarrolloList.find((item: any) => item.id === id);
      if (desarrollo) {
        this.herramientasService.actualizarDesarrollo(desarrollo).subscribe(response => {
          console.log('Desarrollo actualizado:', response);
          // Realizar cualquier otra acción necesaria después de la edición
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para editar el desarrollo.');
    }
  }

  borrarDesarrollo(id: number) {
    if (this.isLoggedIn) {
      // Lógica para borrar desarrollo solo si ha iniciado sesión
      console.log(`Borrar desarrollo con ID ${id}`);
      // Implementa la lógica adicional para realizar la eliminación utilizando el servicio de herramientas
      const desarrollo = this.desarrolloList.find((item: any) => item.id === id);
      if (desarrollo) {
        this.herramientasService.borrarDesarrollo(desarrollo.id).subscribe(response => {
          console.log('Desarrollo eliminado:', response);
          // Realizar cualquier otra acción necesaria después de la eliminación
        });
      }
    } else {
      // Lógica para mostrar mensaje o redirigir a página de inicio de sesión
      console.log('Debe iniciar sesión para borrar el desarrollo.');
    }
  }
}
