'use client';

import { useState } from 'react';
import Header from '@/components/Layout/Header';
import Meals from '@/components/Meals/Meals';
import Cart from '@/components/Cart/Cart';

export default function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <>
      {cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
      <Header onShowCart={() => setCartIsShown(true)} />
      <main>
        <Meals />
      </main>
    </>
  );
}
