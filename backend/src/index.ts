import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { jwt } from "@elysiajs/jwt";
import { mongoPlugin } from "../common/plugins/mongodb.plugin";
import { errorHandlerPlugin } from "../common/plugins/errorHandler.plugin";
import routes from "./routes";

const PORT = process.env.PORT || 5000;

const app = new Elysia()
  .use(mongoPlugin)
  .use(errorHandlerPlugin)
  .use(cors())
  .use(
    swagger({
      path: "/swagger",
      documentation: {
        info: {
          title: "QuickBites API",
          version: "1.0.0",
          description: "QuickBites food ordering service",
        },
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
            },
          },
        },
      },
    })
  )
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET || "default-secret",
      exp: "30d",
    })
  )
  .use(routes)
  .get("/health", () => ({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`🚀 QuickBites API running at http://localhost:${PORT}`);
  console.log(`📚 Swagger docs at http://localhost:${PORT}/swagger`);
});
