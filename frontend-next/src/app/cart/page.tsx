'use client';

import { useContext } from 'react';
import Link from 'next/link';
import CartContext from '@/store/cart-context';
import CartItemRow from '@/components/Cart/CartItemRow';
import OrderSummary from '@/components/Cart/OrderSummary';
import classes from '@/components/Cart/CartPage.module.css';

export default function CartPage() {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  if (!hasItems) {
    return (
      <div className={classes.empty}>
        <span>🛒</span>
        <h2>Your cart is empty</h2>
        <p>Add some delicious items from our menu</p>
        <Link href="/" className={classes.backBtn}>Browse Menu</Link>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.inner}>
        <div className={classes.left}>
          <h2 className={classes.heading}>Your Cart</h2>
          <ul>
            {cartCtx.items.map((item) => (
              <CartItemRow
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </ul>
        </div>
        <div className={classes.right}>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
