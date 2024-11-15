import { Product } from './Product';

describe('Product Entity', () => {
  test('Should create a product with essential information', () => {
    const product = new Product({
      id: '1',
      name: 'Expresso Tradicional',
      image: 'any_base64_image',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
      categories: ['TRADICIONAL']
    });

    expect(product.id).toBe('1');
    expect(product.name).toBe('Expresso Tradicional');
    expect(product.image).toBe('any_base64_image');
    expect(product.description).toBe('O tradicional café feito com água quente e grãos moídos');
    expect(product.price).toBe(9.90);
    expect(product.categories).toContain('TRADICIONAL');
  });
});

