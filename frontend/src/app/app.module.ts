import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations';
import { BikesComponent } from './components/bikes/bikes.component';
import { MainComponent } from './components/main/main.component';
import { NewbikeComponent } from './components/newbike/newbike.component';
import { BikedetalleComponent } from "./components/bikedetalle/bikedetalle.component";


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    BikesComponent,
    MainComponent,
    NewbikeComponent,
    BikedetalleComponent
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
