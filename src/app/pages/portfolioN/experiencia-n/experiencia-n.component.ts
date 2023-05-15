
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-n',
  templateUrl: './experiencia-n.component.html',
  styleUrls: ['./experiencia-n.component.css']
})
export class ExperienciaNComponent implements OnInit {
  experienciasList: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.experienciasList = data;
    });
  }

  editarExperiencia(id: number) {
    // Aquí puedes añadir la lógica para editar una experiencia con el ID proporcionado.
    console.log(`Editar experiencia con ID ${id}`);
  }

  eliminarExperiencia(id: number) {
    // Aquí puedes añadir la lógica para eliminar una experiencia con el ID proporcionado.
    console.log(`Eliminar experiencia con ID ${id}`);
  }}
