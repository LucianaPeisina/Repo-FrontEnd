import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  public listarExpriencia(){
    return this.http.get(`${baserUrl}/Experiencia/`);
  }

  public agregarExperiencia(Experiencia:any){
    return this.http.post(`${baserUrl}/Experiencia/`,Experiencia);
  }

  public eliminarExperiencia(ExperienciaId:any){
    return this.http.delete(`${baserUrl}/Experiencia/${ExperienciaId}`);
  }

  public obtenerExperiencia(ExperienciaId:any){
    return this.http.get(`${baserUrl}/Experiencia/${ExperienciaId}`);
  }

  public actualizarExperiencia(Experiencia:any){
    return this.http.put(`${baserUrl}/Experiencia/`,Experiencia);
  }


}
