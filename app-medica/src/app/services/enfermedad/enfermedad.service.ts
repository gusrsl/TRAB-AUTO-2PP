import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnfermedadService {
  private baseUrl = 'http://localhost:3000/enfermedad';

  constructor(private http: HttpClient) {}

  getEnfermedades(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEnfermedad(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEnfermedad(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateEnfermedad(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteEnfermedad(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
