import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = `${baseUrl}/proyectos`;

  constructor(private http: HttpClient) { }

  agregarProyecto(proyecto: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/`, proyecto);
  }

  verProyectos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`);
  }

  borrarProyecto(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  buscarProyecto(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  actualizarProyecto(proyecto: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/`, proyecto);
  }
}
