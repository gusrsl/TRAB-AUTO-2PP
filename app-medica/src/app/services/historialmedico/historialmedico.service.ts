import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistorialMedicoService {
  private baseUrl = 'http://localhost:3000/historialmedico';

  constructor(private http: HttpClient) {}

  getHistorialesMedicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getHistorialMedico(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHistorialMedico(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateHistorialMedico(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteHistorialMedico(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
