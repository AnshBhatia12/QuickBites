'use client';

import { useReducer } from 'react';
import CartContext, { type CartItem } from './cart-context';

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; id: string };

const defaultCartState: CartState = { items: [], totalAmount: 0 };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingIndex = state.items.findIndex((i) => i.id === action.item.id);
    const existingItem = state.items[existingIndex];

    let updatedItems: CartItem[];
    if (existingItem) {
      const updatedItem = { ...existingItem, amount: existingItem.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'REMOVE') {
    const existingIndex = state.items.findIndex((i) => i.id === action.id);
    const existingItem = state.items[existingIndex]!;
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems: CartItem[];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((i) => i.id !== action.id);
    } else {
      updatedItems = [...state.items];
      updatedItems[existingIndex] = { ...existingItem, amount: existingItem.amount - 1 };
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item: CartItem) => dispatch({ type: 'ADD', item }),
    removeItem: (id: string) => dispatch({ type: 'REMOVE', id }),
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
