import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaboratorioService {
  private baseUrl = 'http://localhost:3000/laboratorio';

  constructor(private http: HttpClient) {}

  getLaboratorios(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLaboratorio(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLaboratorio(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateLaboratorio(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteLaboratorio(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
