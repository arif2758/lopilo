
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
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle } from "react-icons/fa";

interface IOrder {
  orderId: string;
  name: string;
  mobile: string;
  address: string;
  bkashNumber: string;
  transactionId: string;
}

interface TableDemoProps {
  orders: IOrder[];
}

export default function TableDemo({ orders }: TableDemoProps) {
  const { toast } = useToast();
  const [orderCount, setOrderCount] = useState<number>(orders.length);

  useEffect(() => {
    const newOrderCount = orders.length;
    if (newOrderCount > orderCount) {
      toast({
        title: "নতুন অর্ডার যুক্ত হয়েছে!",
        description: `মোট অর্ডার সংখ্যা: ${newOrderCount}`,
        action: <FaCheckCircle className="text-green-500" />,
      });
    }
    setOrderCount(newOrderCount);
  }, [orders, orderCount, toast]); // dependencies

  // মোট টাকার পরিমাণ (টাকা) নির্ধারণ
  const totalAmount = orderCount * 280;

  return (
    <div>
      <Badge>{orderCount} অর্ডার</Badge>
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
          {orders
            .sort((a, b) => (a.orderId < b.orderId ? 1 : -1))
            .map((order) => (
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
            <TableCell className="text-right">{`টাকা ${totalAmount.toLocaleString()}`}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
