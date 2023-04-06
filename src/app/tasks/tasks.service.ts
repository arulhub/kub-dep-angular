import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseURL = `http://${environment.tasksApi}`;
  
  constructor(
    private http: HttpClient,
    private localSVC: LocalStorageService,
    ) { }
    
  private setHeader() {
    const token = this.localSVC.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return httpHeaders;
  }

  createTasks(data: any) {    
    return this.http.post(`${this.baseURL}/tasks`, data, {'headers': this.setHeader()});
  }

  viewTasks() {
    return this.http.get(`${this.baseURL}/tasks`, {'headers': this.setHeader()});
  }
}
