import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsingSignals } from './input-using-signals';

describe('InputUsingSignals', () => {
  let component: InputUsingSignals;
  let fixture: ComponentFixture<InputUsingSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUsingSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(InputUsingSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
