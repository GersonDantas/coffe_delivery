interface ProductProps {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  categories: string[];
}
export class Product {
  public id: string;
  public name: string;
  public image: string;
  public description: string;
  public price: number;
  public categories: string[];

  constructor ({ id, name, image, description, price, categories }: ProductProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.categories = categories;
  }
}
