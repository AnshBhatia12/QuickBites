import Elysia from "elysia";
import { mealRoutes } from "./meals";
import { orderRoutes } from "./orders";

const routes = new Elysia({ prefix: "/api" })
  .use(mealRoutes)
  .use(orderRoutes);

export default routes;
