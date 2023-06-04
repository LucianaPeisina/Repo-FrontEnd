import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
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
    private route: ActivatedRoute,
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

  editarSkill(id: number, esSkills: boolean) {
    if (this.isLoggedIn) {
      console.log(`Editar ${esSkills ? 'skill' : 'desarrollo'} con ID ${id}`);
      this.router.navigate(['/actu-herramientas'], { queryParams: { id: id, esSkills: esSkills } });
    } else {
      console.log('Debe iniciar sesión para editar la herramienta.');
    }
  }

  borrarSkill(id: number) {
    if (this.isLoggedIn) {
      console.log(`Borrar skill con ID ${id}`);
      const skill = this.skillsList.find((item: any) => item.id === id);
      if (skill) {
        this.herramientasService.borrarSkills(skill.id).subscribe(response => {
          console.log('Skill eliminado:', response);
        });
      }
    } else {
      console.log('Debe iniciar sesión para borrar el skill.');
    }
  }

  editarDesarrollo(id: number, esSkills: boolean) {
    if (this.isLoggedIn) {
      console.log(`Editar ${esSkills ? 'skill' : 'desarrollo'} con ID ${id}`);
      this.router.navigate(['/actu-herramientas'], { queryParams: { id: id, esSkills: esSkills } });
    } else {
      console.log('Debe iniciar sesión para editar la herramienta.');
    }
  }

  borrarDesarrollo(id: number) {
    if (this.isLoggedIn) {
      console.log(`Borrar desarrollo con ID ${id}`);
      const desarrollo = this.desarrolloList.find((item: any) => item.id === id);
      if (desarrollo) {
        this.herramientasService.borrarDesarrollo(desarrollo.id).subscribe(response => {
          console.log('Desarrollo eliminado:', response);
        });
      }
    } else {
      console.log('Debe iniciar sesión para borrar el desarrollo.');
    }
  }
}
