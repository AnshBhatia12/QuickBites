import type { Metadata } from 'next';
import CartProvider from '@/store/CartProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuickBites',
  description: 'Order delicious food online',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="overlays" />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
