// src/components/OrderForm.tsx
"use client";
import React, { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    paymentNumber: "",
    transactionId: "",
    deliveryAddress: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send a POST request to the API to create a new order
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(`Order placed successfully! Order ID: ${data.orderId}`);
    } else {
      alert(`Failed to place order: ${data.message}`);
    }

    // Reset form fields
    setFormData({
      name: "",
      phoneNumber: "",
      paymentNumber: "",
      transactionId: "",
      deliveryAddress: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-bgColor2">
      <div className="my-4 border border-green-500 rounded-lg p-6 w-full max-w-md bg-white shadow-lg">
        <h2 className="text-3xl font-bold text-blueTextColor text-center mb-4">
          বইয়ের অর্ডার ফরম
        </h2>
        <div className="flex items-center gap-2 leading-loose mb-2">
          <FaHandPointRight className="text-blueTextColor" />{" "}
          <p>বইয়ের দাম ৩৮০ টাকা</p>
        </div>
        <div className="flex items-start gap-2 leading-loose mb-2">
          <div className="pt-2">
            <FaHandPointRight className="text-blueTextColor flex-shrink-0" />
          </div>
          <p>
            01608433453 (এটা বিকাশ মার্চেন্ট নাম্বার) আপনি অ্যাপ এর
            &apos;পেমেন্ট&apos; অপশন থেকে এ নাম্বারে বিকাশ করুন
          </p>
        </div>
        <div className="flex items-center gap-2 leading-loose mb-2">
          <FaHandPointRight className="text-blueTextColor" />{" "}
          <p>নিচের বক্সগুলো ফিলাপ করুন</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-6">
            <input
              type="text"
              name="name"
              placeholder="আপনার নাম"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="মোবাইল নাম্বার"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="paymentNumber"
              placeholder="যে নাম্বার থেকে বিকাশ করেছেন বা টাকা দিয়েছেন"
              value={formData.paymentNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="transactionId"
              placeholder="পেমেন্টের ট্রানজেকশন আইডি"
              value={formData.transactionId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="deliveryAddress"
              placeholder="ডেলিভিরির ঠিকানা"
              value={formData.deliveryAddress}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-3 rounded-lg text-2xl font-semibold hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
