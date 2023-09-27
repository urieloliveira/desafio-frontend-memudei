import { Component, Input } from '@angular/core';
import { ICapitalDataResponse } from '../../pages/home-page/home-page.component';

@Component({
  selector: 'app-city-section',
  templateUrl: './city-section.component.html',
  styleUrls: ['./city-section.component.scss']
})
export class CitySectionComponent {
  @Input() city!: ICapitalDataResponse;

  constructor() { }
}
