import mongoose, { Schema, type Document } from "mongoose";

interface IOrderItem {
  mealId: string;
  name: string;
  price: number;
  amount: number;
}

export interface IOrder extends Document {
  items: IOrderItem[];
  totalAmount: number;
  status: "pending" | "confirmed" | "delivered";
}

const OrderItemSchema = new Schema<IOrderItem>({
  mealId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const OrderSchema = new Schema<IOrder>(
  {
    items: { type: [OrderItemSchema], required: true },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model<IOrder>("Order", OrderSchema);
