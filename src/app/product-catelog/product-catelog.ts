import { Component, inject, signal, Signal } from '@angular/core';
import { ProductStore, ProductType } from '../core/product-store/product-store';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-catelog',
  imports: [RouterLink],
  templateUrl: './product-catelog.html',
  styleUrl: './product-catelog.css',
})
export class ProductCatelog {
  productStore = inject(ProductStore);
  productCatelogItems = this.productStore.productList;

  constructor() {
    const categories = ['Electronics', 'Home', 'Garden', 'Toys', 'Books'];
    const vendors = ['Acme Co', 'Global Goods', 'BrightMart', 'Nova Supply', 'Prime Vendors'];
    const serviceCenters = ['Center A', 'Center B', 'Center C'];

    const makeId = (i: number) => `P-${Date.now().toString().slice(-5)}-${i}`;
    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randPrice = (min: number, max: number) =>
      Math.round((Math.random() * (max - min) + min) * 100) / 100;

    const staticItems: ProductType[] = Array.from({ length: 10 }).map((_, i) => ({
      name: `Product ${String.fromCharCode(65 + (i % 26))} ${i + 1}`,
      category: categories[i % categories.length],
      productId: makeId(i + 1),
      vendor: vendors[i % vendors.length],
      price: randPrice(9.99, 499.99),
      quantity: rand(1, 120),
      serviceCenter: serviceCenters[i % serviceCenters.length],
    }));

    this.productStore.bulkInsertProduct(staticItems);
  }
}
