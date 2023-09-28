import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySectionComponent } from './city-section.component';

describe('CitySectionComponent', () => {
  let component: CitySectionComponent;
  let fixture: ComponentFixture<CitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
