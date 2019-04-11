import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private stationService: StationService, private router: Router) {

  }

  stations: Stations[];

  ngOnInit() {
    this.getStations();
  }

  getStations(){
    this.stationService.getStations()
      .subscribe(res =>{
        this.stations = res;
        console.log("lista de stations" + this.stations )

      });
  }
  /**
   *
   * @param id
   */
  confirmDelete(id: string, i: number) {
    if(confirm('La bike se borrará')){
      this.stationService.deleteStation(id)
        .subscribe(
          res =>{
            console.log(res);
            console.log("Se ha borrado correctamente ", i);
            //this.getStudents();

            //Two way data binding!
            this.stations.splice(i,1);
            console.log("Se ha borrado correctamente ", this.stations);
          },
          err => {
            this.handleError(err);
          });
    }
  }
  /**
   *
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    }
  }
}
