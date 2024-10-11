// src/components/order/OrderFormClient.tsx
"use client";

import { createOrderAction } from "@/actions/orderActions";
import { Button } from "../ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FaCheckCircle } from "react-icons/fa";

const OrderFormClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsLoading(true);

    const result = await createOrderAction(formData);

    if (result.success) {
      toast({
        title: "অর্ডার সফলভাবে সাবমিট হয়েছে।",

        action: <FaCheckCircle className="text-green-500" />,
      });
      form.reset();
    }

    setIsLoading(false);
  };

  return (
    <form id="orderForm" onSubmit={handleSubmit}>
      <div className="mb-4 mt-6">
        <input
          type="text"
          name="name"
          placeholder="আপনার নাম"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phoneNumber"
          placeholder="মোবাইল নাম্বার"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="paymentNumber"
          placeholder="যে নাম্বার থেকে বিকাশ করেছেন বা টাকা দিয়েছেন"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="transactionId"
          placeholder="পেমেন্টের ট্রানজেকশন আইডি"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="deliveryAddress"
          placeholder="ডেলিভারির ঠিকানা"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          rows={3}
          required
        />
      </div>
      <Button
        type="submit" // Change to type="submit" for form submission
        disabled={isLoading}
        className="w-full text-2xl"
      >
        {isLoading ? "Processing..." : "Order Now"}
      </Button>
    </form>
  );
};

export default OrderFormClient;
