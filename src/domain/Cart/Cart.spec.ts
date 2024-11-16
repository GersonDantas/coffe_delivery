import Cart from '.';

describe('Cart', () => {
  test('Should Cart have all products in list', () => {
    const product1 = {
      id: '1',
      title: 'Expresso Tradicional',
      image: 'image1.png',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      categories: ['TRADICIONAL'],
    };

    const product2 = {
      id: '2',
      title: 'Latte',
      image: 'image2.png',
      description: 'Café com leite vaporizado e espuma',
      price: 12.5,
      categories: ['TRADICIONAL', 'COM LEITE'],
    }

    const cart = new Cart();

    cart.addProduct(product1);
    cart.addProduct(product2);

    expect(cart.getProducts()).toContain(product1);
    expect(cart.getProducts()).toContain(product2);
    expect(cart.getProducts().length).toBe(2);
  });
});
