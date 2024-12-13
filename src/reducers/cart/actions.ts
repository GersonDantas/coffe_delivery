export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

interface AddProductAction {
  type: ActionType.ADD_PRODUCT;
  payload: {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    categories: string[];
  };
}

interface RemoveProductAction {
  type: ActionType.REMOVE_PRODUCT;
  payload: {
    id: string;
  };
}

interface ClearCartAction {
  type: ActionType.CLEAR_CART;
}

export type Action = AddProductAction | RemoveProductAction | ClearCartAction;
