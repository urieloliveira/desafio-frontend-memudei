import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CitySectionComponent } from './home/components/city-section/city-section.component';
import { CityDetailsSectionComponent } from './home/components/city-details-section/city-details-section.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CitySectionComponent,
    CityDetailsSectionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ModulesModule { }