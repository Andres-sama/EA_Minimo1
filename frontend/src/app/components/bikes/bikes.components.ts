import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";
declare var M: any

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})export class BikesComponent implements OnInit {

  constructor(private BikesService: BikesService, private router: Router) {

   }

  bikes: Bikes[];
  bikes2: Bikes[];

  ngOnInit() {
    this.getBikes();
  }
  getBikes() {
    this.BikesService.getBikes()
      .subscribe(res => {
        this.bikes = res
        console.log("lista de estaciones  " + this.bikes)
      });
  }
  getBikesnot() {
    this.BikesService.getBikesnot()
      .subscribe(res => {
        this.bikes2 = res
        console.log("lista de estaciones no asignadas " + this.bikes2)
      });
  }

  deleteBike(_id: string){
    if(confirm ('Are you sure you want to delete it?')) {
      this.BikesService.deleteBike(_id)
      //ver respuesta del server
      .subscribe(res => {
        console.log(res)  
        this.getBikes()
        M.toast({html: 'Deleted successfully'})
      })
    }
  }
}
