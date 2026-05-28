import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageFeeling } from './average-feeling';

describe('AverageFeeling', () => {
  let component: AverageFeeling;
  let fixture: ComponentFixture<AverageFeeling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageFeeling],
    }).compileComponents();

    fixture = TestBed.createComponent(AverageFeeling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
