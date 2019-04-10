import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations.components';
import { MainComponent } from './components/main/main.component';
import { NewbikeComponent } from './components/newbike/newbike.component';
import { DeletebikeComponent } from './components/deletebike/deletebike.component';
import { BikesComponent } from './components/bikes/bikes.components';
import { BicisdeestacionComponent } from './components/bicisdeestacion/bicisdeestacion.component';
import { BikedetailComponent } from './components/bikeDetail/bikeDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    MainComponent,
    NewbikeComponent,
    BikesComponent,
    BicisdeestacionComponent,
    BikedetailComponent,
    DeletebikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
