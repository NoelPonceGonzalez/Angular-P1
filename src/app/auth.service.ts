import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:5502'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.baseUrl}/auth/login`, loginData);
  }

  register(name: string, email: string, password: string): Observable<any> {
    const registerData = { name, email, password };
    return this.http.post(`${this.baseUrl}/auth/register`, registerData);
  }
}
