import { Injectable } from '@angular/core';
import { CitiesGateway } from '../../../domain/models/Cities/gateway/cities-gateway';
import { Observable } from 'rxjs';
import { Cities, City } from '../../../domain/models/Cities/cities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesApiService extends CitiesGateway {

  private url = 'https://api-colombia.com/api/v1';

  constructor(private http: HttpClient) {super() }

  getDepartmentByID(id: string): Observable<Cities> {
    return this.http.get<Cities>(`${this.url}/Department/${id}`);
  }
  getDepartmentAll(): Observable<Array<Cities>> {
    return this.http.get<Array<Cities>>(`${this.url}/Department`);
  }
  getCityByDepartment(id:string): Observable<Cities> {
    return this.http.get<Cities>(`${this.url}/Department/${id}/cities`);
  }

}
