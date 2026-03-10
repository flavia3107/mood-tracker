import { ComponentFixture, TestBed } from '@angular/core/testing';

import { August } from './august';

describe('August', () => {
  let component: August;
  let fixture: ComponentFixture<August>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [August],
    }).compileComponents();

    fixture = TestBed.createComponent(August);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
