import { Component} from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: any
  constructor(public apiService: APIService) {
    this.countries = this.apiService.getCountries()
   }
}
