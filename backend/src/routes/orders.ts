import Elysia, { t } from "elysia";
import { getOrders, createOrder, updateOrderStatus } from "../controllers/orderController";

export const orderRoutes = new Elysia({ prefix: "/orders" })
  .get("/", getOrders, {
    detail: { summary: "Get all orders", tags: ["Orders"] },
  })
  .post("/", ({ body }) => createOrder(body), {
    body: t.Object({
      items: t.Array(
        t.Object({
          mealId: t.String(),
          name: t.String(),
          price: t.Number(),
          amount: t.Number(),
        })
      ),
      totalAmount: t.Number(),
    }),
    detail: { summary: "Place an order", tags: ["Orders"] },
  })
  .patch("/:id", ({ params, body }) => updateOrderStatus(params.id, body.status), {
    body: t.Object({
      status: t.Union([t.Literal("pending"), t.Literal("confirmed"), t.Literal("delivered")]),
    }),
    detail: { summary: "Update order status", tags: ["Orders"] },
  });
