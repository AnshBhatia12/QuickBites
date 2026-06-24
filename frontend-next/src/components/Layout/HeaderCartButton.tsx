'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import CartContext from '@/store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onClick }: { onClick: () => void }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((sum, item) => sum + item.amount, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className={classes.wrapper}>
      <button className={btnClasses} onClick={onClick}>
        <svg className={classes.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
        <span className={classes.label}>Cart</span>
        {totalItems > 0 && <span className={classes.badge}>{totalItems}</span>}
      </button>
      {totalItems > 0 && (
        <Link href="/cart" className={classes.viewCart}>View Cart</Link>
      )}
    </div>
  );
};

export default HeaderCartButton;
