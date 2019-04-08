import { Component, OnInit } from '@angular/core';
import {BikesService} from "../../services/bikes.service";
import {ActivatedRoute} from "@angular/router";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-bikedetalle',
  templateUrl: './bikedetalle.component.html',
  styleUrls: ['./bikedetalle.component.css']
})
export class BikedetalleComponent implements OnInit {

  bike: Bikes;

  constructor(private activatedRouter: ActivatedRoute, private bikesService: BikesService) {
    this.bike = new Bikes();
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.bike._id = params['id'];
      } else {
        this.bike._id = '';
      }
    });
    this.getBike(this.bike._id);
  }

  getBike(id: string) {
    this.bikesService.getBike(id)
      .subscribe(res =>{
        this.bike = res["bike"];
      });
    console.log(this.bike);
  }

}
