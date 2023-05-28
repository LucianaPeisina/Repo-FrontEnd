import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthGuard } from './servicios/auth.guard';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ActuExperienciaComponent } from './pages/admin/crud/actu-experiencia/actu-experiencia.component';
import { ActuHabilidadesComponent } from './pages/admin/crud/actu-habilidades/actu-habilidades.component';
import { ActuHerramientasComponent } from './pages/admin/crud/actu-herramientas/actu-herramientas.component';
import { ActuProyectosComponent } from './pages/admin/crud/actu-proyectos/actu-proyectos.component';
import { AddHabilidadesComponent } from './pages/admin/crud/add-habilidades/add-habilidades.component';
import { AddProyectosComponent } from './pages/admin/crud/add-proyectos/add-proyectos.component';
import { AddHerramientasComponent } from './pages/admin/crud/add-herramientas/add-herramientas.component';
import { AddExperienciaComponent } from './pages/admin/crud/add-experiencia/add-experiencia.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent
  },
  {
    path: 'actu-experiencia',
    component: ActuExperienciaComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'actu-habilidades',
    component: ActuHabilidadesComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'actu-herramientas',
    component: ActuHerramientasComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'actu-proyectos',
    component: ActuProyectosComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'add-habilidades',
    component: AddHabilidadesComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'add-proyectos',
    component: AddProyectosComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'add-herramientas',
    component: AddHerramientasComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: 'add-experiencia',
    component: AddExperienciaComponent,
    canActivate: [AuthGuard] // Protege la ruta, solo accesible si el usuario está logueado
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
