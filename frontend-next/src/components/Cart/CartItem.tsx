'use client';

import classes from './CartItem.module.css';

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem = ({ name, price, amount, onRemove, onAdd }: CartItemProps) => (
  <li className={classes.item}>
    <div className={classes.info}>
      <span className={classes.vegDot}>🟢</span>
      <div>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
    </div>
    <div className={classes.counter}>
      <button className={classes.counterBtn} onClick={onRemove}>−</button>
      <span className={classes.amount}>{amount}</span>
      <button className={classes.counterBtn} onClick={onAdd}>+</button>
    </div>
  </li>
);

export default CartItem;
