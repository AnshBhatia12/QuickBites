import Elysia from "elysia";

export const errorHandlerPlugin = new Elysia({ name: "error-handler" }).onError(
  ({ code, error, set }) => {
    console.error(`[${code}]`, error);

    if (code === "NOT_FOUND") {
      set.status = 404;
      return { error: "Route not found" };
    }

    if (code === "VALIDATION") {
      set.status = 422;
      return { error: "Validation failed", details: error.message };
    }

    set.status = 500;
    return { error: error instanceof Error ? error.message : "Internal server error" };
  }
);
