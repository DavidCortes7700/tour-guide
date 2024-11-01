import { Injectable } from "@angular/core";
import { TourGuideGateway } from "../models/TourGuide/gateway/tourGuide-gateway";
import { Observable } from "rxjs";
import { TourGuide } from "../models/TourGuide/tourGuide";



@Injectable({
  providedIn:'root'
})


export class GetTourGuideUseCase {
  constructor(private _tourGuideGateway: TourGuideGateway){}

  getAllTouristAttraction(): Observable <TourGuide>{
    return this._tourGuideGateway.getTouristAttractionAll();
  }

  getTouristAttractionById(id:string): Observable <TourGuide>{
    return this._tourGuideGateway.getTouristAttractionById(id);
  }

}
