import { ProductProps } from '../models';

class Cart {
  private products: ProductProps[] = [];

  addProduct(product: ProductProps): void {
    this.products.push(product);
  }

  getProducts(): ProductProps[] {
    return this.products;
  }
}

export default Cart;
