import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Bikes } from "../models/bikes";
import { Environments } from "./environments"
import {Observable} from "rxjs";
import { Stations } from '../models/stations';

@Injectable({
  providedIn: 'root'
})
export class BikesService {  
  environment: Environments;
  selectedBikes: Bikes; 

  constructor( private http: HttpClient) {
    this.selectedBikes = new Bikes("","","");
    this.environment = new Environments();
   }
   //recoger los datos en http

  //Me devuelve una lista de las bikes
   getBikes():Observable<Bikes[]> {
    return this.http.get<Bikes[]>(this.environment.urlBike + "/listaBikes");
  }
  getBike(_id: string):Observable<Bikes> {
    return this.http.get<Bikes>(this.environment.urlBike + `/${_id}`);
  }

  listAdd(id: string):Observable<Stations>{
    return this.http.get<Stations>(this.environment.urlStation + "/add" + `/${id}`)
  }
}
