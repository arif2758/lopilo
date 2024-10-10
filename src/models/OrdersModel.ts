import { Schema, model, models, Document } from "mongoose";


interface IOrder extends Document {
  orderId: string;
  name: string;
  mobile: string;
  address: string;
  bkashNumber: string;
  transactionId: string;
}


const OrderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  bkashNumber: { type: String, required: true },
  transactionId: { type: String, required: true },
});

export const OrderCollectionModel =
  models.Order || model<IOrder>("Order", OrderSchema);
