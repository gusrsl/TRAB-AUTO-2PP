import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  private baseUrl = 'http://localhost:3000/medicamento';

  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMedicamento(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMedicamento(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateMedicamento(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteMedicamento(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
