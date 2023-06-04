import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  public listarExpriencia(){
    return this.http.get(`${baserUrl}/experiencia/`);
  }

  public agregarExperiencia(Experiencia:any){
    return this.http.post(`${baserUrl}/experiencia/`,Experiencia);
  }

  public eliminarExperiencia(id:any){
    return this.http.delete(`${baserUrl}/experiencia/${id}`);
  }

  public buscarExperiencia(id:any){
    return this.http.get(`${baserUrl}/experiencia/${id}`);
  }

  public actualizarExperiencia(Experiencia:any){
    return this.http.put(`${baserUrl}/experiencia/`,Experiencia);
  }


}
