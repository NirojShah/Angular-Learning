import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details2',
  imports: [],
  templateUrl: './product-details2.html',
  styleUrl: './product-details2.css',
})
export class ProductDetails2 {
  name: string | null = null;
  price: string | null = null;
  quantity: string | null = null;
  vendor: string | null = null;

  constructor(private route: ActivatedRoute) {
    route.queryParamMap.subscribe((query) => {
      this.name = query.get('name');
      this.price = query.get('price');
      this.quantity = query.get('quantity');
      this.vendor = query.get('vendor');
    });
  }
}
