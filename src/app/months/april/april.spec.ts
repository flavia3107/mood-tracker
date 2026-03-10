import { ComponentFixture, TestBed } from '@angular/core/testing';

import { April } from './april';

describe('April', () => {
  let component: April;
  let fixture: ComponentFixture<April>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [April],
    }).compileComponents();

    fixture = TestBed.createComponent(April);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
