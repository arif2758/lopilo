import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongoConnection";
import { OrderCollectionModel } from "@/models/OrdersModel";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, phoneNumber, paymentNumber, transactionId, deliveryAddress } =
    body;

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
    return NextResponse.json({ message: "Order placed successfully", orderId });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to place order", error },
      { status: 500 }
    );
  }
}



export async function GET(request: Request) {
  await connectToMongoDB();

  const url = new URL(request.url);
  const lastOrderId = url.searchParams.get("lastOrderId");

  try {
    let query = {};
    if (lastOrderId) {
      query = { orderId: { $gt: lastOrderId } }; // Fetch orders greater than the lastOrderId
    }

    const orders = await OrderCollectionModel.find(query)
      .sort({ orderId: -1 })
      .lean();

    if (orders.length === 0) {
      return NextResponse.json(
        { message: "No new orders found." },
        { status: 200 }
      );
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred.";
    return NextResponse.json(
      { message: "Failed to fetch orders", error: errorMessage },
      { status: 500 }
    );
  }
}
