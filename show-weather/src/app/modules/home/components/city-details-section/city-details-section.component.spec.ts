import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsSectionComponent } from './city-details-section.component';

describe('CityDetailsSectionComponent', () => {
  let component: CityDetailsSectionComponent;
  let fixture: ComponentFixture<CityDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
