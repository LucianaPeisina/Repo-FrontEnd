import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  public active : boolean = false 

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }
  public itemsMenu = [
    {
      nombre: 'Acerca',
      ruta: '/portfolio#Perfil',
    },
    {
      nombre: 'Habilidades',
      ruta: '/portfolio#Habilidades',
    },
    {
      nombre: 'Experiencias',
      ruta: '/portfolio#Experiencia',
    }, 
    {
      nombre: 'Herramientas',
      ruta: '/portfolio#Herramientas',
    },
    {
      nombre: 'Proyectos',
      ruta: '/portfolio#Proyectos',
    },
    {
      nombre: 'Contacto',
      ruta: '/portfolio#Contacto',
    },
  ];





}
