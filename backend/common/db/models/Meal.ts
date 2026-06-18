import mongoose, { Schema, type Document } from "mongoose";

export interface IMeal extends Document {
  name: string;
  description: string;
  price: number;
}

const MealSchema = new Schema<IMeal>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Meal = mongoose.model<IMeal>("Meal", MealSchema);
