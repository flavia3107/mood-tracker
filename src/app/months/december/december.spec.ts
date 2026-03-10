import { ComponentFixture, TestBed } from '@angular/core/testing';

import { December } from './december';

describe('December', () => {
  let component: December;
  let fixture: ComponentFixture<December>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [December],
    }).compileComponents();

    fixture = TestBed.createComponent(December);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
