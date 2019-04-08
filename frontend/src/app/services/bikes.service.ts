import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Bikes } from "../models/bikes";
import { Environments } from "./environments"
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BikesService {  
  environment: Environments;
  selectedBike: Bikes; 

  constructor( private http: HttpClient) {
 
    this.environment = new Environments();
   }
   //recoger los datos en http

  //Me devuelve una lista de las bikes
   getBikes():Observable<Bikes[]> {
    return this.http.get<Bikes[]>(this.environment.urlBike + "/listaBikes");
  }

  //Me borra la bike
   deleteBike(_id: string) {
    return this.http.delete(this.environment.urlBike + "/eliminar" + `/${_id}`);
  }

  getBike(_id: string):Observable<Bikes> {
    return this.http.get<Bikes>(this.environment.urlBike + `/${_id}`);
  }
  addBike(bike: Bikes) {
    return this.http.post(this.environment.urlBike + "/nuevo", bike)
  }
   
}
