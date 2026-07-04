import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularForms } from './angular-forms';

describe('AngularForms', () => {
  let component: AngularForms;
  let fixture: ComponentFixture<AngularForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularForms],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
