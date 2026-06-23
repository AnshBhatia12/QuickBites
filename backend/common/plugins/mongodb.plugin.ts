import Elysia from "elysia";
import mongoose from "mongoose";

export const mongoPlugin = new Elysia({ name: "mongo-plugin" }).onStart(
  async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined in .env");
    await mongoose.connect(uri);

    console.log("🍃 MongoDB connected");
  }
);
