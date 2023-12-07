import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultorioService {
  private baseUrl = 'http://localhost:3000/consultorio';

  constructor(private http: HttpClient) {}

  getConsultorios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getConsultorio(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createConsultorio(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateConsultorio(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteConsultorio(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
