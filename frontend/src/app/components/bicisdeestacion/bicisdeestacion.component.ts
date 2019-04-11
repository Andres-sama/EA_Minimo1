import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";
declare var M: any

@Component({
  selector: 'app-bicisdeestacion',
  templateUrl: './bicisdeestacion.component.html',
  styleUrls: ['./bicisdeestacion.component.css']
})export class BicisdeestacionComponent implements OnInit {
  station: Stations;
  bikes: Bikes[];
  bikes2: Bikes[];
  constructor( private stationService: StationService,private activatedRouter: ActivatedRoute, ) {
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
    this.getBikeId(this.station._id);
  }
  getBikeId(id: string) {
    this.stationService.getBikesdeStation(id)
      .subscribe(res =>{
        this.bikes = res["bikes"];
      });
    console.log(this.bikes);
  
    }
  }

