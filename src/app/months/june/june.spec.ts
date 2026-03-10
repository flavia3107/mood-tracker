import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June } from './june';

describe('June', () => {
  let component: June;
  let fixture: ComponentFixture<June>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [June],
    }).compileComponents();

    fixture = TestBed.createComponent(June);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
