import { Injectable, signal } from '@angular/core';

export interface ProductType {
  name: string;
  category: string;
  productId: string;
  vendor: string;
  price: number;
  quantity: number;
  serviceCenter: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  productList = signal<ProductType[]>([]);

  bulkInsertProduct(products: ProductType[]): void {
    this.productList.set(products);
  }

  allProducts(): ProductType[] {
    return this.productList();
  }

  productDetailById(productId: string): ProductType | null {
    const product: ProductType | undefined = this.productList().find(
      (item) => item.productId == productId,
    );

    if (product == undefined) {
      return null;
    }

    return product;
  }

  removeProduct(productId: string): boolean {
    console.log(productId);
    this.productList.update((products) => products.filter((val) => val.productId !== productId));
    return true;
  }
}
