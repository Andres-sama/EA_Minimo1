import { Component, OnInit } from '@angular/core';
import {Stations} from "../../models/stations";
import {ActivatedRoute} from "@angular/router";
import {StationService} from "../../services/station.service";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-bicisdeestacion',
  templateUrl: './bicisdeestacion.component.html',
  styleUrls: ['./bicisdeestacion.component.css']
})
export class BicisdeestacionComponent implements OnInit {

  station: Stations;
  bike: Bikes;

  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService) {
    this.station = new Stations();
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.station._id = params['id'];
      } else {
        this.station._id = '';
      }
    });
    this.getBike(this.station._id);
  }

  getBike(id: string) {
    this.stationService.getBikesdeStation(id)
      .subscribe(res =>{
        this.bike = res["bike"];
      });
    console.log(this.bike);
  }
}
