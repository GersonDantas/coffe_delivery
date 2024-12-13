import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cart/reducer';
import { OrderInfo } from '../pages/Cart';
import { Cart } from '@/domain/Cart';
import { Product } from '@/domain/Product';
import { Order } from '@/domain/Order';
import { ActionType } from '@/reducers/cart/actions';

interface CartContextType {
  cart: Cart;
  orders: Order[];
  addItem: (item: Product) => void;
  removeItem: (itemId: string) => void;
  decrementItemQuantity: (itemId: string) => void;
  incrementItemQuantity: (itemId: string) => void;
  checkout: (order: OrderInfo) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initial) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      );

      if (storedStateAsJSON) {
        const parsedState = JSON.parse(storedStateAsJSON);
        return {
          cart: Cart.fromJSON(parsedState.cart),
          orders: parsedState.orders.map(Order.fromJSON),
        };
      }

      return initial;
    },
  );

  function addItem(item: Product) {
    dispatch({ type: ActionType.ADD_PRODUCT, payload: item });
  }

  function removeItem(itemId: string) {
    dispatch({ type: ActionType.REMOVE_PRODUCT, payload: itemId });
  }

  function checkout(order: OrderInfo) {
    dispatch({ type: 'CHECKOUT', payload: order });
  }

  function incrementItemQuantity(itemId: string) {
    dispatch({ type: 'INCREMENT_ITEM', payload: itemId });
  }

  function decrementItemQuantity(itemId: string) {
    dispatch({ type: 'DECREMENT_ITEM', payload: itemId });
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);
      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        orders: cartState.orders,
        addItem,
        removeItem,
        decrementItemQuantity,
        incrementItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
