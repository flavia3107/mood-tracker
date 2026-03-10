import { ComponentFixture, TestBed } from '@angular/core/testing';

import { July } from './july';

describe('July', () => {
  let component: July;
  let fixture: ComponentFixture<July>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [July],
    }).compileComponents();

    fixture = TestBed.createComponent(July);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
