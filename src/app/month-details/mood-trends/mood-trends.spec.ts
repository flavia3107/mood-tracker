import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTrends } from './mood-trends';

describe('MoodTrends', () => {
  let component: MoodTrends;
  let fixture: ComponentFixture<MoodTrends>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodTrends],
    }).compileComponents();

    fixture = TestBed.createComponent(MoodTrends);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
