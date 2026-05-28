import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayFeeling } from './today-feeling';

describe('TodayFeeling', () => {
  let component: TodayFeeling;
  let fixture: ComponentFixture<TodayFeeling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayFeeling],
    }).compileComponents();

    fixture = TestBed.createComponent(TodayFeeling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
