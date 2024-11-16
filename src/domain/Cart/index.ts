import { ProductProps } from '../models';

class Cart {
  private products: ProductProps[] = [];

  addProduct(product: ProductProps): void {
    this.products.push(product);
  }

  getProducts(): ProductProps[] {
    return this.products;
  }

  removeProduct (productId: string): void {
    this.products = this.products.filter(({id}) => id !== productId)
  }

  getTotal (): number {
    return this.products.reduce((total, {price}) => total + price, 0)
  }
}

export default Cart;
