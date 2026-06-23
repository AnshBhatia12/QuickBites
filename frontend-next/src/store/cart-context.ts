'use client';

import { createContext } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
