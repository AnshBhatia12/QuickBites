import { Meal } from "../../common/db/models/Meal";

export const getMeals = async () => {
  return await Meal.find();
};

export const createMeal = async (body: { name: string; description: string; price: number }) => {
  const meal = await Meal.create(body);
  return { status: 201, data: meal };
};

export const deleteMeal = async (id: string) => {
  await Meal.findByIdAndDelete(id);
  return { message: "Meal deleted" };
};
