import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { APIService } from '../api.service';
import { Weather } from '../types/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {
  weather: any;
  isImperial = false;

  constructor(
    public apiService: APIService,
    ) {
      this.setWeather(this.apiService.getWeather());
  }
  toggleUnits() {
     this.isImperial = !this.isImperial;
     this.isImperial? this.setWeather(this.apiService.getWeather('imperial')) : this.setWeather(this.apiService.getWeather('metric'))
  }
  setWeather(weatherResponse: Observable<any>) {
    weatherResponse.subscribe(v => {
      this.weather = {
        description: v.weather[0].description,
        icon: v.weather[0].icon,
        temperature:  v.main.temp,
        windDirection: v.wind.deg,
        windSpeed: v.wind.speed,
        cloudPercentage: v.clouds['all']
      }
    })
  }
}
