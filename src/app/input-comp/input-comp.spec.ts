import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComp } from './input-comp';

describe('InputComp', () => {
  let component: InputComp;
  let fixture: ComponentFixture<InputComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComp],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
