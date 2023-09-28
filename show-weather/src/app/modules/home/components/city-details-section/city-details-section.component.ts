import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICityDataResponse } from '../../pages/home-page/home-page.component';
import { faXmark, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"

export interface dayData {
  day: string;
  min: number;
  max: number;
}

@Component({
  selector: 'app-city-details-section',
  templateUrl: './city-details-section.component.html',
  styleUrls: ['./city-details-section.component.scss']
})
export class CityDetailsSectionComponent {
  @Input() city!: ICityDataResponse;
  @Output() clearSelected: EventEmitter<void> = new EventEmitter<void>();
  public closeIcon = faXmark;
  public arrowUp = faArrowUp;
  public arrowDown = faArrowDown;

  public dailyPrevision: dayData[] = [
    {
      day: "Terça",
      min: 20,
      max: 22,
    },
    {
      day: "Quarta",
      min: 12,
      max: 18,
    },
    {
      day: "Quinta",
      min: 21,
      max: 26,
    },
    {
      day: "Sexta",
      min: 20,
      max: 30,
    }
  ]

  public upperFisrtLetter(txt: string): string {
    return txt[0]?.toUpperCase() + txt.substring(1)
  }

  public closeDetails() {
    this.clearSelected.emit();
  }
}
