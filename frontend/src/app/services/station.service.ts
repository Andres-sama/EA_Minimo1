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
    this.selectedBike = new Stations("","","");
    
    this.environment = new Environments();
  }

  addStation(station: Stations) {
    return this.http.post(this.environment.urlStation + "/nueva" , station)
  }

  getStations() :Observable<Stations[]> {
    return this.http.get<Stations[]>(this.environment.urlStation + "/listaStations");
  }

  //Me borra la bike
  deleteStation(_id: string) {
    return this.http.delete(this.environment.urlStation + "/eliminar" + `/${_id}`);
  }

  getStation(_id: string) :Observable<Stations> {
    return this.http.get<Stations>(this.environment.urlStation + `/${_id}`);
  }

}
