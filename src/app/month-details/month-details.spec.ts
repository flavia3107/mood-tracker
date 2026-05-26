import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDetails } from './month-details';

describe('MonthDetails', () => {
  let component: MonthDetails;
  let fixture: ComponentFixture<MonthDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
