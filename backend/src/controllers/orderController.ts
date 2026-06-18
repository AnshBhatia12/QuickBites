import { Order } from "../../common/db/models/Order";

interface OrderItem {
  mealId: string;
  name: string;
  price: number;
  amount: number;
}

export const getOrders = async () => {
  return await Order.find();
};

export const createOrder = async (body: { items: OrderItem[]; totalAmount: number }) => {
  const order = await Order.create(body);
  return { status: 201, data: order };
};

export const updateOrderStatus = async (id: string, status: string) => {
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  if (!order) throw new Error("Order not found");
  return order;
};
