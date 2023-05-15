import { Component} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent {
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
