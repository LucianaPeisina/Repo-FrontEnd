import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos-n',
  templateUrl: './proyectos-n.component.html',
  styleUrls: ['./proyectos-n.component.css']
})
export class ProyectosNComponent {
  proyectoList: any;



  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService ){



  } 
  ngOnInit(): void {
  
    this.datosPorfolio.obtenerProyecto().subscribe(data => {
      console.log(data);
      this.proyectoList = data;
    });
  }
}
