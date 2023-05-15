import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentesModule} from './componentes/componentes.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import {register} from 'swiper/element/bundle';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienciaComponent } from './pages/admin/experiencia/experiencia.component';
import { HabilidadesComponent } from './pages/admin/habilidades/habilidades.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { PerfilComponent } from './pages/admin/perfil/perfil.component';
import { ProyectosComponent } from './pages/admin/proyectos/proyectos.component';
import { ContactoComponent } from './pages/admin/contacto/contacto.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PerfilNComponent } from './pages/portfolioN/perfil-n/perfil-n.component';
import { ContactoNComponent } from './pages/portfolioN/contacto-n/contacto-n.component';
import { ExperienciaNComponent } from './pages/portfolioN/experiencia-n/experiencia-n.component';
import { HabilidadesNComponent } from './pages/portfolioN/habilidades-n/habilidades-n.component';
import { ProyectosNComponent } from './pages/portfolioN/proyectos-n/proyectos-n.component';
import { HomeComponent } from './pages/home/home.component';
import { HerramientasNComponent } from './pages/portfolioN/herramientas-n/herramientas-n.component';
import { ActuExperienciaComponent } from './pages/admin/crud/actu-experiencia/actu-experiencia.component';
import { ActuHabilidadesComponent } from './pages/admin/crud/actu-habilidades/actu-habilidades.component';
import { ActuHerramientasComponent } from './pages/admin/crud/actu-herramientas/actu-herramientas.component';
import { ActuProyectosComponent } from './pages/admin/crud/actu-proyectos/actu-proyectos.component';
import { AddHabilidadesComponent } from './pages/admin/crud/add-habilidades/add-habilidades.component';
import { AddProyectosComponent } from './pages/admin/crud/add-proyectos/add-proyectos.component';
import { AddHerramientasComponent } from './pages/admin/crud/add-herramientas/add-herramientas.component';
import { AddExperienciaComponent } from './pages/admin/crud/add-experiencia/add-experiencia.component';
register();


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    HerramientasComponent,
    PerfilComponent,
    ProyectosComponent,
    ContactoComponent,

    IniciarSesionComponent,
    SignupComponent,
    PerfilNComponent,
    ContactoNComponent,
    ExperienciaNComponent,
    HerramientasNComponent,
    HabilidadesNComponent,
    ProyectosNComponent,
    ActuExperienciaComponent,
    ActuHabilidadesComponent,
    ActuHerramientasComponent,
    ActuProyectosComponent,
    AddHabilidadesComponent,
    AddProyectosComponent,
    AddHerramientasComponent,
    AddExperienciaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule

  ],
  providers: [ PortfolioService, DecimalPipe,
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
],
  bootstrap: [AppComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
