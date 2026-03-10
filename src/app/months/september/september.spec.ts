import { ComponentFixture, TestBed } from '@angular/core/testing';

import { September } from './september';

describe('September', () => {
  let component: September;
  let fixture: ComponentFixture<September>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [September],
    }).compileComponents();

    fixture = TestBed.createComponent(September);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
