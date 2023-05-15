import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  public active : boolean = false 
  
  isLoggedIn = false;
  user:any = null;



  constructor(public login:LoginService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }

    )

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }
  
  setActive() : void {
    this.active = !this.active
  }
  public itemsMenu = [
    {
      nombre: 'Acerca',
      ruta: '/#Perfil',
    },
    {
      nombre: 'Habilidades',
      ruta: '/#Habilidades',
    },
    {
      nombre: 'Experiencias',
      ruta: '/#Experiencia',
    }, 
    {
      nombre: 'Herramientas',
      ruta: '/#Herramientas',
    },
    {
      nombre: 'Proyectos',
      ruta: '/#Proyectos',
    },
    {
      nombre: 'Contacto',
      ruta: '/#Contacto',
    },

    
  ];





}
