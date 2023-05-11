import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habiDList: any;
  habiBList: any;



  miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService ){


  } 

  ngOnInit():void{
    this.datosPorfolio.obtenerDuras().subscribe(data =>{
      console.log(data);
      this.habiDList=data;
    });

    this.datosPorfolio.obtenerBlandas().subscribe(data =>{
      console.log(data);
      this.habiBList=data;
    });
}

  
}