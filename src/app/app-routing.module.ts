import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './servicios/guard.guard';
import { ContactoComponent } from './pages/admin/contacto/contacto.component';
import { ProyectosComponent } from './pages/admin/proyectos/proyectos.component';
import { PerfilComponent } from './pages/admin/perfil/perfil.component';
import { HerramientasComponent } from './pages/admin/herramientas/herramientas.component';
import { ExperienciaComponent } from './pages/admin/experiencia/experiencia.component';
import { HabilidadesComponent } from './pages/admin/habilidades/habilidades.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }  ,
  
  { 
  path : 'signup',
  component : SignupComponent,
  pathMatch : 'full'
},

{
    path:'iniciar-sesion',
   component:IniciarSesionComponent
  },

  {
    path:'admin',
    component:PortfolioComponent,
    canActivate:[GuardGuard],
    children:[
      {
        path:'contacto',
        component:ContactoComponent
      },
      {
        path : 'experiencia',
        component : ExperienciaComponent
      },
      {
        path:'habiidades',
        component:HabilidadesComponent
      },
      {
        path:'herramientas',
        component:HerramientasComponent
      },
      {
        path:'perfil',
        component:PerfilComponent
      },
      {
        path:'proyectos',
        component:ProyectosComponent
      }
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
