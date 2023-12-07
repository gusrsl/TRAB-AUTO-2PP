import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  private baseUrl = 'http://localhost:3000/medico';

  constructor(private http: HttpClient) {}

  getMedicos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMedico(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedico(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateMedico(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteMedico(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
