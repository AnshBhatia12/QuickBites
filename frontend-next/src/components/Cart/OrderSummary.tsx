'use client';

import { useContext } from 'react';
import CartContext from '@/store/cart-context';
import classes from './OrderSummary.module.css';

const OrderSummary = () => {
  const { totalAmount } = useContext(CartContext);
  const delivery = 2.99;
  const taxes = totalAmount * 0.08;
  const grandTotal = totalAmount + delivery + taxes;

  return (
    <div className={classes.card}>
      <h3 className={classes.title}>Bill Details</h3>

      <div className={classes.row}><span>Item Total</span><span>${totalAmount.toFixed(2)}</span></div>
      <div className={classes.row}><span>Delivery Fee</span><span>${delivery.toFixed(2)}</span></div>
      <div className={classes.row}><span>Taxes & Charges</span><span>${taxes.toFixed(2)}</span></div>

      <div className={classes.coupon}>
        <input type="text" placeholder="Enter coupon code" />
        <button>Apply</button>
      </div>

      <div className={classes.total}>
        <span>To Pay</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>

      <button className={classes.orderBtn}>Place Order →</button>
    </div>
  );
};

export default OrderSummary;
