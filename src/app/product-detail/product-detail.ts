import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductStore, ProductType } from '../core/product-store/product-store';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  productId = signal<string>('');
  productDetails = signal<ProductType | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prodcutStore: ProductStore,
  ) {
    this.route.paramMap.subscribe((val) => {
      this.productId.set(val.get('productId') || '');
    });

    effect(() => {
      this.productDetails.set(this.prodcutStore.productDetailById(this.productId()));
    });
  }

  handleProductRemove(productId: string): void {
    const isRemoved: boolean = this.prodcutStore.removeProduct(productId);
    if (isRemoved) {
      this.router.navigate(['/']);
    }
  }
}
