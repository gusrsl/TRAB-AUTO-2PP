import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultadoExamenService {
  private baseUrl = 'http://localhost:3000/resultadoexamen';

  constructor(private http: HttpClient) {}

  getResultadosExamenes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getResultadoExamen(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createResultadoExamen(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateResultadoExamen(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteResultadoExamen(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
