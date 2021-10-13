import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';

import { WeatherComponent } from './weather/weather.component';
import { CountriesComponent } from './countries/countries.component';
import { APIService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
