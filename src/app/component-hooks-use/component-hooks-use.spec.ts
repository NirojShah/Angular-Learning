import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHooksUse } from './component-hooks-use';

describe('ComponentHooksUse', () => {
  let component: ComponentHooksUse;
  let fixture: ComponentFixture<ComponentHooksUse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentHooksUse],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentHooksUse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
