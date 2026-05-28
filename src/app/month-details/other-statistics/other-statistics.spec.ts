import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStatistics } from './other-statistics';

describe('OtherStatistics', () => {
  let component: OtherStatistics;
  let fixture: ComponentFixture<OtherStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherStatistics],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherStatistics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
