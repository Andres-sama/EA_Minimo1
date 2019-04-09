import { Component, OnInit } from '@angular/core';import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import { StationService } from '../../services/station.service';
import { BikesService } from '../../services/bikes.service';
import { Stations } from '../../models/stations';
import { Bikes } from '../../models/bikes';

@Component({
  selector: 'app-deletebike',
  templateUrl: './deletebike.component.html',
  styleUrls: ['./deletebike.component.css']
})
export class DeletebikeComponent implements OnInit { 
  
  constructor(private activatedRouter: ActivatedRoute, private bikeService: BikesService, private stationService: StationService) { }
  stations = new Stations;
  bike =  Array(); 

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.stations._id = params['id'];
    });
   this.listAdd(this.stations._id)
   console.log("id station " + this.stations._id)
  }
  listAdd(id: string){
    this.bikeService.listAdd(id).subscribe(res => {
      this.stations.bikes =res.bikes;
      this.bike = this.stations.bikes;
      console.log("detalle de la station   " + this.bike)
      
    })
  }
  deleteBike(bikeId: string){    
    this.stationService.deleteBike(this.stations._id, bikeId).subscribe(res =>{
      console.log("station a eliminar   " +this.stations._id +"bike que elimino" +bikeId);
      console.log(res);
    })
  }

}