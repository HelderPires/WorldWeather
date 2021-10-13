import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Country } from '../types/countries';
import { APIService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: any
  constructor(private apiService: APIService) {
    this.countries = this.apiService.getCountries()
   }
}
