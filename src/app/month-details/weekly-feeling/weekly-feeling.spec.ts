import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFeeling } from './weekly-feeling';

describe('WeeklyFeeling', () => {
  let component: WeeklyFeeling;
  let fixture: ComponentFixture<WeeklyFeeling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyFeeling],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyFeeling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
