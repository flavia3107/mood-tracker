import { ComponentFixture, TestBed } from '@angular/core/testing';

import { February } from './february';

describe('February', () => {
  let component: February;
  let fixture: ComponentFixture<February>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [February],
    }).compileComponents();

    fixture = TestBed.createComponent(February);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
