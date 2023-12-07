import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LicenciaService {
  private baseUrl = 'http://localhost:3000/licencia';

  constructor(private http: HttpClient) {}

  getLicencias(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLicencia(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLicencia(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateLicencia(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteLicencia(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
