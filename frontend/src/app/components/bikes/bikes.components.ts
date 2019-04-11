import { Component, OnInit } from '@angular/core';
import { StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { Stations } from "../../models/stations"
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";
import { NgIf } from '@angular/common';
declare var M: any

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css'],
  //template: 'The href is: {{href}} The idurl is: {{_idurl}}'
})export class BikesComponent implements OnInit {
  public href: string = "";
  public _idurl: string;
  station: Stations;
  bikes: Bikes[];
  bikes2: Bikes[];
  constructor(private StationService: StationService,private BikesService: BikesService, private router: Router) {
    this.station = new Stations();
   }

  ngOnInit() {
    //obtenemos la url
    this.href = this.router.url;
    //console.log("url is:" + this.router.url);
    //sacamos el _id de la station
    this._idurl = this.href.substr(27);
    //console.log("(27): "+ this.href.substr(27));
    //inciamos la función de listar por id
    //this.station._id = this._idurl;
    this.getBikeId(this._idurl);
    this.getBikesnot();
  }
  getBikeId(_idurl) {
    this.BikesService.getBike(_idurl).subscribe(res =>{
        this.bikes = res;
      });
    console.log(this.bikes);
  }
  getBikes() {

    this.BikesService.getBikes().subscribe(res => {
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
