'use client';

import classes from './MealsSummary.module.css';

const CATEGORIES = [
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍔', label: 'Burgers' },
  { emoji: '🍣', label: 'Sushi' },
  { emoji: '🥗', label: 'Healthy' },
  { emoji: '🍜', label: 'Noodles' },
  { emoji: '🌮', label: 'Mexican' },
  { emoji: '🍗', label: 'Chicken' },
  { emoji: '🍦', label: 'Desserts' },
];

const MealsSummary = () => (
  <section className={classes.wrapper}>
    <div className={classes.inner}>
      <h2 className={classes.heading}>What&apos;s on your mind?</h2>
      <div className={classes.chips}>
        {CATEGORIES.map((cat) => (
          <button key={cat.label} className={classes.chip}>
            <span className={classes.chipEmoji}>{cat.emoji}</span>
            <span className={classes.chipLabel}>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default MealsSummary;
