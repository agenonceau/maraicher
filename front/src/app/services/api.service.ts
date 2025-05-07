import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParcelleDetails } from '../models/parcelle.details';
import { Parcelle } from '../models/parcelle';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getParcelles(): Observable<Parcelle[]> {
    return this.http.get<Parcelle[]>(`${this.apiUrl}/parcelles`);
  }

  getParcelleDetails(parcelleId: number): Observable<ParcelleDetails> {
    return this.http.get<ParcelleDetails>(`${this.apiUrl}/parcelles/${parcelleId}/bandes`);
  }

  createParcelle(parcelle: Omit<Parcelle, 'id' | 'nombreBandes'>): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/parcelles`, parcelle);
  }
}