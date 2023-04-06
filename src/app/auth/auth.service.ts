import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = `http://${environment.usersApi}`;
  constructor(
    private http: HttpClient
  ) { }

  signin(data: any) {
    return this.http.post(`${this.baseURL}/login`, data);
  }

  signup(data: any) {
    return this.http.post(`${this.baseURL}/signup`, data);
  }
}
