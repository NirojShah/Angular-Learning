import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithStore } from './signals-with-store';

describe('SignalsWithStore', () => {
  let component: SignalsWithStore;
  let fixture: ComponentFixture<SignalsWithStore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsWithStore],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsWithStore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
