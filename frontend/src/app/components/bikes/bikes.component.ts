import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { BikesService } from "../../services/bikes.service"
import { Bikes } from "../../models/bikes"

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
      });
  }

  /**
   *
   * @param id
   */
  confirmDelete(id: string, i: number) {
    if(confirm('La bike se borrará')){
      this.bikesService.deleteBike(id)
        .subscribe(
          res =>{
            console.log(res);
            console.log("Se ha borrado correctamente ", i);
    
            //Two way data binding!
            this.bikes.splice(i,1);
            console.log("Se ha borrado correctamente ", this.bikes);

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
