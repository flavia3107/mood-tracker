import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodPicker } from './mood-picker';

describe('MoodPicker', () => {
  let component: MoodPicker;
  let fixture: ComponentFixture<MoodPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(MoodPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
