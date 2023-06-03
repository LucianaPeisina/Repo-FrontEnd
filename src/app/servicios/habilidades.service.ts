import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  public buscarDura(id: number) {
    return this.http.get(`${baserUrl}/duras/${id}`);
  }
  
  public buscarBlanda(id: number) {
    return this.http.get(`${baserUrl}/blandas/${id}`);
  }
  

  public agregarDuras(habilidad: any) {
    return this.http.post(`${baserUrl}/duras/`, habilidad);
  }

  public agregarBlandas(habilidad: any) {
    return this.http.post(`${baserUrl}/blandas/`, habilidad);
  }

  public borrarDura(habilidadId: any) {
    return this.http.delete(`${baserUrl}/duras/${habilidadId}`);
  }

  public borrarBlanda(habilidadId: any) {
    return this.http.delete(`${baserUrl}/blandas/${habilidadId}`);
  }

  public actualizarDuras(habilidad: any) {
    return this.http.put(`${baserUrl}/duras/`, habilidad);
  }

  public actualizarBlandas(habilidad: any) {
    return this.http.put(`${baserUrl}/blandas/`, habilidad);
  }
}
