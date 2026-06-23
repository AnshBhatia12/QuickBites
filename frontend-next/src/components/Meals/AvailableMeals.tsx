import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

interface Meal {
  _id: string;
  name: string;
  description: string;
  price: number;
}

const DUMMY_MEALS: Meal[] = [
  { _id: 'm1', name: 'Sushi Platter', description: 'Finest fish and fresh veggies', price: 22.99 },
  { _id: 'm2', name: 'Schnitzel', description: 'A classic German specialty', price: 16.50 },
  { _id: 'm3', name: 'Barbecue Burger', description: 'Juicy American beef patty', price: 12.99 },
  { _id: 'm4', name: 'Green Bowl', description: 'Healthy greens and grains', price: 18.99 },
  { _id: 'm5', name: 'Margherita Pizza', description: 'Wood-fired with fresh mozzarella', price: 14.99 },
  { _id: 'm6', name: 'Pad Thai', description: 'Classic Thai stir-fried noodles', price: 13.50 },
  { _id: 'm7', name: 'Chicken Tacos', description: 'Soft tortillas with grilled chicken', price: 11.99 },
  { _id: 'm8', name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: 8.99 },
];

const MEAL_EMOJIS: Record<string, string> = {
  'm1': '🍣', 'm2': '🥩', 'm3': '🍔', 'm4': '🥗',
  'm5': '🍕', 'm6': '🍜', 'm7': '🌮', 'm8': '🍰',
};

const getMeals = async (): Promise<Meal[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meals`, { next: { revalidate: 60 } });
    if (!res.ok) return DUMMY_MEALS;
    return res.json();
  } catch {
    return DUMMY_MEALS;
  }
};

const AvailableMeals = async () => {
  const meals = await getMeals();

  return (
    <section className={classes.section}>
      <div className={classes.inner}>
        <div className={classes.sectionHeader}>
          <h2 className={classes.sectionTitle}>Order Again</h2>
          <p className={classes.sectionSub}>Your favourites, reordered in seconds</p>
        </div>
        <ul className={classes.grid}>
          {meals.map((meal) => (
            <MealItem
              key={meal._id}
              id={meal._id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              emoji={MEAL_EMOJIS[meal._id] ?? '🍽️'}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AvailableMeals;
