import { Component} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})


export class ProyectosComponent {
  proyectoList: any;



  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService ){


  } 

  ngOnInit():void{
    this.datosPorfolio.obtenerProyectos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
      this.proyectoList=data.proyectos
    });
  }


}

