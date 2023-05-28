import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import baserUrl from './helper';

export const AUTH_HEADER = "Authorization";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(signupDTO: any): Observable<any> {
    return this.http.post<[]>(`${baserUrl}/sign-up`, signupDTO);
  }

  login(username: string, password: string): Observable<any> {
    console.log(username, password);
    return this.http.post<HttpResponse<any>>(`${baserUrl}/authenticate`, { username, password }, { observe: 'response' }).pipe(
      tap(_ => this.log("User Authentication")),
      map((res: HttpResponse<any>) => {
        const authHeader = res.headers.get(AUTH_HEADER);
        const bearerToken = authHeader ? authHeader.substring(7) : '';
        this.isLoggedInSubject.next(true); // Actualiza el estado de isLoggedIn a true
        return { token: bearerToken };
      })
    );
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }
}
