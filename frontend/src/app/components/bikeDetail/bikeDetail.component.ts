import { Component, OnInit } from '@angular/core';
import {BikesService} from "../../services/bikes.service";
import {ActivatedRoute} from "@angular/router";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-bikeDetail',
  templateUrl: './bikeDetail.component.html',
  styleUrls: ['./bikeDetail.component.css']
})
export class BikedetailComponent implements OnInit {

  bike: Bikes;

  constructor(private activatedRouter: ActivatedRoute, private bikeService: BikesService) {
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
    this.bikeService.getBike(id)
      .subscribe(res =>{
        this.bike = res["bike"];
      });
    console.log(this.bike);
  }

}
