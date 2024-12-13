import { Cart } from '@/domain/Cart';
import { Product } from '@/domain/Product';
import { ActionType, Action } from './actions';

interface CartState {
  cart: Cart;
}

export const initialState: CartState = {
  cart: new Cart(),
};

export const cartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:{
      const productToAdd = new Product(action.payload);
      state.cart.addProduct(productToAdd);
      return { ...state };
    }
    case ActionType.REMOVE_PRODUCT:
      state.cart.removeProduct(action.payload.id);
      return { ...state };

    case ActionType.CLEAR_CART:
      state.cart = new Cart();
      return { ...state };

    default:
      return state;
  }
};
