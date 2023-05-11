import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {
  skillsList: any;
  desarrolloList:any;



  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService ){


  } 
  ngOnInit(): void {
    this.datosPorfolio.obtenerSkills().subscribe(dataSkills => {
      console.log(dataSkills);
      this.skillsList = dataSkills.skills;
    });
  
    this.datosPorfolio.obtenerDesarrollo().subscribe(dataDesarrollo => {
      console.log(dataDesarrollo);
      this.desarrolloList = dataDesarrollo.desarrollo;
    });
  }
  
}
