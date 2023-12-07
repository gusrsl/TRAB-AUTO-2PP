import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetaMedicaService {
  private baseUrl = 'http://localhost:3000/recetamedica';

  constructor(private http: HttpClient) {}

  getRecetasMedicas(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getRecetaMedica(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRecetaMedica(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateRecetaMedica(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteRecetaMedica(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
