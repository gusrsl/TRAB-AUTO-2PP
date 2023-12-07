import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private baseUrl = 'http://localhost:3000/pacientes';

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPaciente(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPaciente(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updatePaciente(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deletePaciente(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
