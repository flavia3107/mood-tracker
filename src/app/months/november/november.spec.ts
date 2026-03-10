import { ComponentFixture, TestBed } from '@angular/core/testing';

import { November } from './november';

describe('November', () => {
  let component: November;
  let fixture: ComponentFixture<November>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [November],
    }).compileComponents();

    fixture = TestBed.createComponent(November);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
