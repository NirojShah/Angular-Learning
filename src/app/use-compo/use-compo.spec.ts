import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCompo } from './use-compo';

describe('UseCompo', () => {
  let component: UseCompo;
  let fixture: ComponentFixture<UseCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseCompo],
    }).compileComponents();

    fixture = TestBed.createComponent(UseCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
