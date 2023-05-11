import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HabilidadesComponent } from '././habilidades/habilidades.component';
import { ExperienciaComponent } from '././experiencia/experiencia.component';
import { ProyectosComponent } from '././proyectos/proyectos.component';
import { ContactoComponent } from '././contacto/contacto.component';
import { PieComponent } from '././pie/pie.component';
import { HerramientasComponent } from '././herramientas/herramientas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BotonscrollComponent } from './botonscroll/botonscroll.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioAdminComponent } from './portfolio-admin/portfolio-admin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [

    EncabezadoComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactoComponent,
    PieComponent,
    HerramientasComponent,
    BotonscrollComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    PortfolioAdminComponent,
    SignupComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports: [
    EncabezadoComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    ContactoComponent,
    PieComponent,
    HerramientasComponent,
    BotonscrollComponent
  ],



})
export class ComponentesModule { }

