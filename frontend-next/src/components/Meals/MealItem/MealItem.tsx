'use client';

import { useContext, useState } from 'react';
import CartContext from '@/store/cart-context';
import classes from './MealItem.module.css';

interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
}

const MealItem = ({ id, name, description, price, emoji }: MealItemProps) => {
  const cartCtx = useContext(CartContext);
  const [count, setCount] = useState(0);

  const existingItem = cartCtx.items.find((i) => i.id === id);
  const cartCount = existingItem?.amount ?? 0;

  const addHandler = () => {
    cartCtx.addItem({ id, name, price, amount: 1 });
  };

  const removeHandler = () => {
    cartCtx.removeItem(id);
  };

  return (
    <li className={classes.card}>
      <div className={classes.cardImage}>
        <span className={classes.emoji}>{emoji}</span>
        <span className={classes.vegBadge}>🟢</span>
      </div>

      <div className={classes.cardBody}>
        <div className={classes.meta}>
          <span className={classes.rating}>⭐ {(4.0 + Math.random() * 0.9).toFixed(1)}</span>
          <span className={classes.dot}>·</span>
          <span className={classes.time}>25–35 min</span>
        </div>

        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>

        <div className={classes.footer}>
          <span className={classes.price}>${price.toFixed(2)}</span>

          {cartCount === 0 ? (
            <button className={classes.addBtn} onClick={addHandler}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              ADD
            </button>
          ) : (
            <div className={classes.counter}>
              <button className={classes.counterBtn} onClick={removeHandler}>−</button>
              <span className={classes.counterVal}>{cartCount}</span>
              <button className={classes.counterBtn} onClick={addHandler}>+</button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MealItem;
