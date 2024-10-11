"use client";
import Link from "next/link";
import TableDemo from "../_components/Table";
import { useEffect, useState, useRef } from "react";
import { AnimatedSkeleton } from "@/components/ui/AnimatedSkeleton";


interface IOrder {
  orderId: string;
  name: string;
  mobile: string;
  address: string;
  bkashNumber: string;
  transactionId: string;
}

async function fetchOrders(lastOrderId?: string): Promise<IOrder[]> {
  const url = lastOrderId
    ? `/api/orders?lastOrderId=${lastOrderId}`
    : "/api/orders";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  const orders: IOrder[] = await response.json();
  return orders;
}

export default function DashboardHomePage() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const lastOrderId = useRef<string | null>(null);

  useEffect(() => {
    const fetchAndSetOrders = async () => {
      try {
        const fetchedOrders = await fetchOrders(
          lastOrderId.current || undefined
        );

        if (fetchedOrders.length > 0) {
          const latestOrderId = fetchedOrders[0].orderId;

          if (latestOrderId !== lastOrderId.current) {
            setOrders((prevOrders) => [...fetchedOrders, ...prevOrders]);
            lastOrderId.current = latestOrderId;
          }
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetOrders();

    const interval = setInterval(fetchAndSetOrders, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-4">
      <h1 className="text-center text-4xl mt-4">Admin Dashboard Panel</h1>
      <div>
        <div className="text-center">
          All Order List
          <Link href={"/"} className="pl-5">
            {" "}
            Home{" "}
          </Link>
        </div>
        <div>
          {loading ? (
            <AnimatedSkeleton className="h-8 w-full" /> 
          ) : (
            <TableDemo orders={orders} />
          )}
        </div>
      </div>
    </div>
  );
}
