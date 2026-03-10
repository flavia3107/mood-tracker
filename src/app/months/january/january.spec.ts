import { ComponentFixture, TestBed } from '@angular/core/testing';

import { January } from './january';

describe('January', () => {
  let component: January;
  let fixture: ComponentFixture<January>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [January],
    }).compileComponents();

    fixture = TestBed.createComponent(January);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
