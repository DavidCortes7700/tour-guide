import { Observable } from "rxjs";
import { Cities, City } from "../cities";


export abstract class CitiesGateway {
    abstract getDepartmentByID(id:string): Observable<Cities>;
    abstract getDepartmentAll(): Observable<Array<Cities>>;
    abstract getCityByDepartment(id:string): Observable<Cities>;
}
