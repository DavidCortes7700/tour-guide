import { Observable } from "rxjs";
import { TourGuide } from "../tourGuide";

export abstract class TourGuideGateway {
  abstract getTouristAttractionAll(): Observable<TourGuide>;
  abstract getTouristAttractionById(id:string): Observable<TourGuide>;
}
