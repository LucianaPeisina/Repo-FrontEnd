import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url: string = 'https://portfoliobackend-c8ht.onrender.com/';

  constructor(private http: HttpClient) { }

  obtenerPersona(): Observable<any> {
    return this.http.get(this.url + 'persona');
  }

  obtenerExperiencia(): Observable<any> {
    return this.http.get(this.url + 'experiencia');
  }

  obtenerBlandas(): Observable<any> {
    return this.http.get(this.url + 'blandas');
  }

  obtenerDuras(): Observable<any> {
    return this.http.get(this.url + 'duras');
  }

  obtenerProyectos(): Observable<any> {
    return this.http.get(this.url + 'proyectos');
  }

  obtenerSkills(): Observable<any> {
    return this.http.get(this.url + 'skills');
  }

  obtenerDesarrollo(): Observable<any> {
    return this.http.get(this.url + 'desarrollo');
  }
}
