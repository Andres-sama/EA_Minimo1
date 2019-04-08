import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationsComponent } from './components/stations/stations';
import { BikesComponent } from './components/bikes/bikes.component';
import { MainComponent } from "./components/main/main.component";
import { NewbikeComponent } from "./components/newbike/newbike.component";
import { BikedetalleComponent } from "./components/bikedetalle/bikedetalle.component";

const routes: Routes = [

  {path: 'api/stations/:id', component: StationsComponent},
  {path: 'api/stations/:id', component: StationsComponent},
  {path: 'api/bike/:id', component: BikesComponent},

  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'add_bike', component: NewbikeComponent},
  {path: 'stationList', component: StationsComponent},
  {path: 'bikeList', component: BikesComponent},
  {path:'bikeList/bikeDetail/:id', component: BikedetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
