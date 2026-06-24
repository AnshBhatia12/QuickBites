'use client';

import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CartContext from '@/store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = ({ onClose }: { onClose: () => void }) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const deliveryFee = hasItems ? 2.99 : 0;
  const taxes = hasItems ? cartCtx.totalAmount * 0.08 : 0;
  const grandTotal = cartCtx.totalAmount + deliveryFee + taxes;

  const content = (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.drawer}>
        <div className={classes.drawerHeader}>
          <div className={classes.drawerTitle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span>Your Cart</span>
            {cartCtx.items.length > 0 && (
              <span className={classes.itemCount}>{cartCtx.items.reduce((s, i) => s + i.amount, 0)} items</span>
            )}
          </div>
          <button className={classes.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={classes.drawerBody}>
          {!hasItems ? (
            <div className={classes.empty}>
              <span className={classes.emptyIcon}>🛒</span>
              <p className={classes.emptyTitle}>Your cart is empty</p>
              <p className={classes.emptySub}>Add items to get started</p>
              <button className={classes.browseBtn} onClick={onClose}>Browse Menu</button>
            </div>
          ) : (
            <>
              <ul className={classes.items}>
                {cartCtx.items.map((item) => (
                  <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={() => cartCtx.removeItem(item.id)}
                    onAdd={() => cartCtx.addItem({ ...item, amount: 1 })}
                  />
                ))}
              </ul>

              <div className={classes.coupon}>
                <span>🏷️</span>
                <input type="text" placeholder="Apply coupon code" />
                <button>Apply</button>
              </div>

              <div className={classes.bill}>
                <h4 className={classes.billTitle}>Bill Details</h4>
                <div className={classes.billRow}>
                  <span>Item Total</span>
                  <span>${cartCtx.totalAmount.toFixed(2)}</span>
                </div>
                <div className={classes.billRow}>
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className={classes.billRow}>
                  <span>Taxes & Charges</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className={`${classes.billRow} ${classes.billTotal}`}>
                  <span>To Pay</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {hasItems && (
          <div className={classes.drawerFooter}>
            <div className={classes.footerInfo}>
              <span className={classes.footerTotal}>${grandTotal.toFixed(2)}</span>
              <span className={classes.footerSub}>Total incl. taxes</span>
            </div>
            <button className={classes.orderBtn}>Place Order →</button>
          </div>
        )}
      </div>
    </>
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return createPortal(content, document.getElementById('overlays')!);
};

export default Cart;
