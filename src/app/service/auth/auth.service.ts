import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8080";

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private httpClient: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/register`, {username, password});
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.apiUrl}/login`, {username, password})
    .pipe(
      tap(response => this.storeTokens(response))
    );
  }

  private storeTokens(authResponse: AuthResponse): void {
    localStorage.setItem('accessToken', authResponse.accessToken);
    localStorage.setItem('refreshToken', authResponse.refreshToken);
    this.tokenSubject.next(authResponse.accessToken);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  getToken(): string | null  {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated(): boolean  {
    return this.getToken() != null;
  }
}
