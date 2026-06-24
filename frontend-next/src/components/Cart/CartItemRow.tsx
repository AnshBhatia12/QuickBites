'use client';

import { useContext } from 'react';
import CartContext from '@/store/cart-context';
import classes from './CartItemRow.module.css';

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
}

const CartItemRow = ({ id, name, price, amount }: Props) => {
  const cartCtx = useContext(CartContext);

  const removeAll = () => {
    for (let i = 0; i < amount; i++) cartCtx.removeItem(id);
  };

  return (
    <li className={classes.row}>
      <div className={classes.info}>
        <span className={classes.veg}>🟢</span>
        <div>
          <p className={classes.name}>{name}</p>
          <p className={classes.unit}>${price.toFixed(2)} each</p>
        </div>
      </div>

      <div className={classes.counter}>
        <button onClick={() => cartCtx.removeItem(id)}>−</button>
        <span>{amount}</span>
        <button onClick={() => cartCtx.addItem({ id, name, price, amount: 1 })}>+</button>
      </div>

      <p className={classes.total}>${(price * amount).toFixed(2)}</p>

      <button className={classes.remove} onClick={removeAll}>🗑️</button>
    </li>
  );
};

export default CartItemRow;
