import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private bikesService: BikesService, private router: Router) {

  }

  bikes: Bikes[];

  ngOnInit() {
    this.getBikes();
  }

  getBikes(){
    this.bikesService.getBikes()
      .subscribe(res =>{
        this.bikes = res;
        console.log("lista de bikes" + this.bikes )

      });
  }
  

}
