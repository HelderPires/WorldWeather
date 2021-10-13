import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public country: any;
  constructor(private http: HttpClient) { }

  getCountries() {
    const oldURL = 'https://restcountries.eu/rest/v2/all' // URL Provided
    const countryAPIKey = '47ca91377e33d4241e8094aef9b98be0' // API Link provided was broken, I've created this key for this exercise
    const url = 'http://api.countrylayer.com/v2/all'; // After some attempts the URL provided to be broken. Removing HTTPS for HTTP fixes the call
    return this.http.get(url, {params: {'access_key': countryAPIKey}});
  }

  getWeather(units: string = 'metric') {
    const url = 'http://api.openweathermap.org/data/2.5/weather';
    const APPID = '794ee95e63c5a32aaf88cd813fa2e425'
    return this.http.get(url, {params: {'q': `${this.country.capital},${this.country.alpha2Code}`, 'APPID': APPID, units: units}})}
}
