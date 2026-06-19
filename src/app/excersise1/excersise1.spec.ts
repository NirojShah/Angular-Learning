import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excersise1 } from './excersise1';

describe('Excersise1', () => {
  let component: Excersise1;
  let fixture: ComponentFixture<Excersise1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Excersise1],
    }).compileComponents();

    fixture = TestBed.createComponent(Excersise1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
