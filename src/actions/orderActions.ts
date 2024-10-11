// src/actions/orderActions.ts
"use server";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/lib/mongoConnection";
import { OrderCollectionModel } from "@/models/OrdersModel";

export async function createOrderAction(formData: FormData) {
  const name = formData.get("name") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const paymentNumber = formData.get("paymentNumber") as string;
  const transactionId = formData.get("transactionId") as string;
  const deliveryAddress = formData.get("deliveryAddress") as string;

  await connectToMongoDB();

  const lastOrder = await OrderCollectionModel.findOne().sort({ orderId: -1 });

  const orderId = lastOrder
    ? (parseInt(lastOrder.orderId) + 1).toString()
    : "100001";

  const newOrder = new OrderCollectionModel({
    orderId,
    name,
    mobile: phoneNumber,
    address: deliveryAddress,
    bkashNumber: paymentNumber,
    transactionId,
  });

  try {
    await newOrder.save();
    revalidatePath("/orders");

    return { success: true }; // Return success status
  } catch (error) {
    console.error(error);
    return { success: false }; // Return failure status if error occurs
  }
}
