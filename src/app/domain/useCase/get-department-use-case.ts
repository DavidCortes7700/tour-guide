import { Injectable } from "@angular/core";
import { CitiesGateway } from "../models/Cities/gateway/cities-gateway";
import { Observable } from "rxjs";
import { Cities, City } from "../models/Cities/cities";

@Injectable({
  providedIn:'root'
})

export class GetDepartmentUseCases {
  constructor(private _citiesGateway: CitiesGateway){}

  getAllDepartment(): Observable<Array<Cities>>{
    return this._citiesGateway.getDepartmentAll();
  }

  getCityByDepartment(id:string): Observable<Cities>{
    return this._citiesGateway.getCityByDepartment(id);
  }

}
