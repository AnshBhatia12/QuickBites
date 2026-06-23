'use client';

import Image from 'next/image';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ onShowCart }: { onShowCart: () => void }) => (
  <>
    <header className={classes.header}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <span className={classes.logoIcon}>🍽️</span>
          <span className={classes.logoText}>QuickBites</span>
        </div>

        <div className={classes.location}>
          <span className={classes.locationIcon}>📍</span>
          <span className={classes.locationText}>New York</span>
          <svg className={classes.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        <div className={classes.searchBar}>
          <svg className={classes.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" className={classes.searchInput} />
        </div>

        <HeaderCartButton onClick={onShowCart} />
      </div>
    </header>

    <div className={classes.hero}>
      <div className={classes.heroOverlay} />
      <Image src="/meals.jpg" alt="Delicious food" fill style={{ objectFit: 'cover' }} priority />
      <div className={classes.heroContent}>
        <h1 className={classes.heroTitle}>Order food & groceries</h1>
        <p className={classes.heroSubtitle}>Discover the best food from restaurants near you</p>
        <div className={classes.heroSearch}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder='Search for "pizza"' />
          <button>Search</button>
        </div>
      </div>
    </div>
  </>
);

export default Header;
