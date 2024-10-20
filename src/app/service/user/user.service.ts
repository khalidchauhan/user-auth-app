import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users'; // Update to your API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> { // Replace 'any' with your User model
    return this.http.get<User[]>(this.apiUrl);
  }
}
