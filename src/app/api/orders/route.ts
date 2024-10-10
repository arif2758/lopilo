import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongoConnection";
import { OrderCollectionModel } from "@/models/OrdersModel";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, phoneNumber, paymentNumber, transactionId, deliveryAddress } =
    body;

  await connectToMongoDB();

  // Find the last orderId in the database
  const lastOrder = await OrderCollectionModel.findOne().sort({ orderId: -1 });

  // Determine the new orderId based on the last one found
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
    return NextResponse.json({ message: "Order placed successfully", orderId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to place order", error },
      { status: 500 }
    );
  }
}
