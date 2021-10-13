import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './types/countries';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getCountries() {
    const oldURL = 'https://restcountries.eu/rest/v2/all' // URL Provided
    const countryAPIKey = '47ca91377e33d4241e8094aef9b98be0' // API Link provided was broken, I've created this key for this exercise
    const url = 'http://api.countrylayer.com/v2/all'; // After some attempts the URL provided to be broken. Removing HTTPS for HTTP fixes the call
    return this.http.get(url, {params: {'access_key': countryAPIKey}});
  }
  parseCountryData(countryArray: Array<any>): Array<Country> {
    return countryArray.map(country => ({'name': country.name, 'abbreviation':country.alpha2Code, 'capital': country.capital}));
  }
  getWeather(countryId: string) {
    //TODO get Weather
  }
}
