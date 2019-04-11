import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationsComponent } from './components/stations/stations.components';
import { MainComponent } from "./components/main/main.component";
import { NewbikeComponent } from "./components/newbike/newbike.component";
import { DeletebikeComponent } from "./components/deletebike/deletebike.component";
import { BikesComponent } from "./components/bikes/bikes.components";

const routes: Routes = [

  {path: 'api/stations', component: StationsComponent},
  {path: 'api/stations/list', component: StationsComponent},
  {path: 'api/relacion/add', component: NewbikeComponent},
  {path: 'api/relacion/delete/:id', component: DeletebikeComponent},
  {path: 'stationslist', component: StationsComponent},
  {path: 'bikesList', component: BikesComponent},
  {path: 'stationslist/stationBikes/:id', component: BikesComponent},
  {path: '', component: MainComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
