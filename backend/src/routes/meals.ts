import Elysia, { t } from "elysia";
import { getMeals, createMeal, deleteMeal } from "../controllers/mealController";

export const mealRoutes = new Elysia({ prefix: "/meals" })
  .get("/", getMeals, {
    detail: { summary: "Get all meals", tags: ["Meals"] },
  })
  .post("/", ({ body }) => createMeal(body), {
    body: t.Object({
      name: t.String(),
      description: t.String(),
      price: t.Number(),
    }),
    detail: { summary: "Create a meal", tags: ["Meals"] },
  })
  .delete("/:id", ({ params }) => deleteMeal(params.id), {
    detail: { summary: "Delete a meal", tags: ["Meals"] },
  });
