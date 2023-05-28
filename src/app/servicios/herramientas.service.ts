import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HerramientasService {

  constructor(private http: HttpClient) { }

  public crearDesarrollo(desarrollo: any) {
    return this.http.post(`${baseUrl}/desarrollo/`, desarrollo);
  }

  public buscarDesarrollo(id: any) {
    return this.http.get(`${baseUrl}/desarrollo/${id}`);
  }

  public borrarDesarrollo(id: any) {
    return this.http.delete(`${baseUrl}/desarrollo/${id}`);
  }

  public verDesarrollo() {
    return this.http.get(`${baseUrl}/desarrollo/`);
  }

  public actualizarDesarrollo(desarrollo: any) {
    return this.http.put(`${baseUrl}/desarrollo/`, desarrollo);
  }


  public agregarSkills(skills: any) {
    return this.http.post(`${baseUrl}/skills/`, skills);
  }

  public verSkills() {
    return this.http.get(`${baseUrl}/skills/`);
  }

  public borrarSkills(id: any) {
    return this.http.delete(`${baseUrl}/skills/${id}`);
  }

  public buscarSkills(id: any) {
    return this.http.get(`${baseUrl}/skills/${id}`);
  }

  public actualizarSkills(skills: any) {
    return this.http.put(`${baseUrl}/skills/`, skills);
  }
}
