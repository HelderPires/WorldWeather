import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {
    path: 'weather/:country',
    component: WeatherComponent,
  },
  {
    path: 'countries',
    component: CountriesComponent
  },

  {
    path: '',
    component: CountriesComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
