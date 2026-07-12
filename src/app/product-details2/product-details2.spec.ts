import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetails2 } from './product-details2';

describe('ProductDetails2', () => {
  let component: ProductDetails2;
  let fixture: ComponentFixture<ProductDetails2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetails2],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetails2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
