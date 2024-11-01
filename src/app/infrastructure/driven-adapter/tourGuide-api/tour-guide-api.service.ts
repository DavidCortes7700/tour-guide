import { Injectable } from '@angular/core';
import { TourGuideGateway } from '../../../domain/models/TourGuide/gateway/tourGuide-gateway';
import { Observable } from 'rxjs';
import { TourGuide } from '../../../domain/models/TourGuide/tourGuide';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourGuideApiService extends TourGuideGateway {

  private url = 'https://api-colombia.com/api/v1';

  constructor(private http: HttpClient) {super() }

  getTouristAttractionAll(): Observable<TourGuide> {
    return this.http.get<TourGuide>(`${this.url}/TouristicAttraction`);
  }

  getTouristAttractionById(id:string): Observable<TourGuide> {
    return this.http.get<TourGuide>(`${this.url}/TouristicAttraction/${id}`);
  }

}
