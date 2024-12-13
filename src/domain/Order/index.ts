import { Product } from '../Product';

export class Order {
  id: string;
  products: Product[];
  total: number;
  status: string;

  constructor({ id, products, total, status }: any) {
    this.id = id;
    this.products = products.map((p: any) => new Product(p));
    this.total = total;
    this.status = status;
  }

  static fromJSON(json: any): Order {
    return new Order(json);
  }
}
