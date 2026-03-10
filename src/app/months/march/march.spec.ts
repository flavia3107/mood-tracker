import { ComponentFixture, TestBed } from '@angular/core/testing';

import { March } from './march';

describe('March', () => {
  let component: March;
  let fixture: ComponentFixture<March>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [March],
    }).compileComponents();

    fixture = TestBed.createComponent(March);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
