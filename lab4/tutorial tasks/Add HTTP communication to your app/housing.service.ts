import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private apiUrl = 'http://localhost:3000/housingLocations';

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.apiUrl);
  }

  getHousingLocationById(id: number): Observable<HousingLocation> {
    return this.http.get<HousingLocation>(`${this.apiUrl}/${id}`);
  }
}
