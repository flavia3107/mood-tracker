import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodView } from './mood-view';

describe('MoodView', () => {
  let component: MoodView;
  let fixture: ComponentFixture<MoodView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodView],
    }).compileComponents();

    fixture = TestBed.createComponent(MoodView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
