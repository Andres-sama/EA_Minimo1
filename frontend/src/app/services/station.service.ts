import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stations } from "../models/stations";
import { Environments } from "./environments"
import { Observable } from "rxjs";
import {Bikes} from "../models/bikes";

@Injectable({
  providedIn: 'root'
})
export class StationService {
  environment: Environments;
  selectedBike: Stations; 

  constructor( private http: HttpClient) { 
 
    this.environment = new Environments();
  }

  getStations() :Observable<Stations[]> {
    return this.http.get<Stations[]>(this.environment.urlStation + "/listaStations");
  }

  //Me borra la bike
  deleteStation(_id: string) {
    return this.http.delete(this.environment.urlStation + "/eliminar" + `/${_id}`);
  }
  deleteBike(stationId: string, bikeId: string) {
    return this.http.delete(this.environment.urlRelation +"/delete"+ `/${stationId}` + `/${bikeId}`);  
  }
  getBikesdeStation(_id: string) :Observable<Stations> {
    return this.http.get<Stations>(this.environment.urlRelation + "/listaBikes" + "/${_id}");
  }
}
