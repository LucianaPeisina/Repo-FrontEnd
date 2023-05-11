import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from 'src/app/servicios/autentication.service'


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  

  constructor(private autenticationService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    var currentUser=this.autenticationService.UsuarioAutenticado;
    if (currentUser && currentUser.accessToken)(
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }


      })
    )
    return next.handle(req);
  }
}
