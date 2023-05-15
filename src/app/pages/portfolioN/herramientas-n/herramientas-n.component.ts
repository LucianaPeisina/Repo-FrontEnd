import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-herramientas-n',
  templateUrl: './herramientas-n.component.html',
  styleUrls: ['./herramientas-n.component.css']
})


export class HerramientasNComponent {
  skillsList: any;
  desarrolloList: any;



  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService ){



  } 
  ngOnInit(): void {
    this.datosPorfolio.obtenerSkills().subscribe(data => {
      console.log(data);
      this.skillsList = data;
    });
  
    this.datosPorfolio.obtenerDesarrollo().subscribe(data => {
      console.log(data);
      this.desarrolloList = data;
    });
  }

  
}