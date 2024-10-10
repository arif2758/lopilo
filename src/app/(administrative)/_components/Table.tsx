// src/app/(administrative)/_components/Table.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { connectToMongoDB } from "@/lib/mongoConnection";
import { OrderCollectionModel } from "@/models/OrdersModel";

async function fetchOrders() {
  await connectToMongoDB();
  const orders = await OrderCollectionModel.find().lean();
  return orders;
}

export default async function TableDemo() {
  const orders = await fetchOrders();

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Mobile</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Bkash Number</TableHead>
          <TableHead>Transaction ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.orderId}>
            <TableCell className="font-medium">{order.orderId}</TableCell>
            <TableCell>{order.name}</TableCell>
            <TableCell>{order.mobile}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.bkashNumber}</TableCell>
            <TableCell>{order.transactionId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
