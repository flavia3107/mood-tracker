import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May } from './may';

describe('May', () => {
  let component: May;
  let fixture: ComponentFixture<May>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [May],
    }).compileComponents();

    fixture = TestBed.createComponent(May);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
