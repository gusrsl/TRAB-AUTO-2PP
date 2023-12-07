import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private baseUrl = 'http://localhost:3000/cita';

  constructor(private http: HttpClient) {}

  getCitas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCita(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCita(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateCita(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteCita(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
