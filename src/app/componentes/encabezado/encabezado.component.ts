import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  public active: boolean = false;
  isLoggedIn = false;
  user: any = null;

  constructor(
    public authService: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  public logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  setActive(): void {
    this.active = !this.active;
  }

  navigateToAnchor(anchor: string): void {
    const currentRoute = this.router.url;
    const homeRoute = '/'; // Actualiza con la ruta del componente Home

    if (currentRoute === homeRoute) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navegar a la ruta del componente Home con el fragmento ancla
      this.router.navigate([homeRoute], { fragment: anchor });

      // Scroll manualmente al ancla después de un pequeño retraso
      setTimeout(() => {
        const element = this.document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }


  public itemsMenu = [
    {
      nombre: 'Acerca',
      ruta: 'Perfil'
    },
    {
      nombre: 'Habilidades',
      ruta: 'Habilidades'
    },
    {
      nombre: 'Experiencias',
      ruta: 'Experiencia'
    },
    {
      nombre: 'Herramientas',
      ruta: 'Herramientas'
    },
    {
      nombre: 'Proyectos',
      ruta: 'Proyectos'
    },
    {
      nombre: 'Contacto',
      ruta: 'Contacto'
    }
  ];
}

