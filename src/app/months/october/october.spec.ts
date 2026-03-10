import { ComponentFixture, TestBed } from '@angular/core/testing';

import { October } from './october';

describe('October', () => {
  let component: October;
  let fixture: ComponentFixture<October>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [October],
    }).compileComponents();

    fixture = TestBed.createComponent(October);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
