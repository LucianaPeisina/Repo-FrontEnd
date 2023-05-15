import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from '././pie/pie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BotonscrollComponent } from './botonscroll/botonscroll.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

    EncabezadoComponent,
    PieComponent,

    BotonscrollComponent,

    PortfolioComponent

  ],
  imports: [
    CommonModule, 
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    EncabezadoComponent,
    PieComponent,
    BotonscrollComponent
  ],



})
export class ComponentesModule { }

