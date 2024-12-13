import { ProductProps } from '../models';

export class Product {
  public id: string;
  public title: string;
  public image: string;
  public description: string;
  public price: number;
  public categories: string[];

  constructor({ id, title, image, description, price, categories }: ProductProps) {
    if (!id) throw new Error('Product must have a valid ID');
    if (!title || title.length < 3) throw new Error('Product title must have at least 3 characters');
    if (!image) throw new Error('Product must have a valid image');
    if (!description || description.length < 10) throw new Error('Product description must have at least 10 characters');
    if (price <= 0) throw new Error('Product price must be greater than zero');
    if (!categories || categories.length === 0) throw new Error('Product must have at least one category');

    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
    this.categories = categories;
  }
}
