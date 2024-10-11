import { FaHandPointRight } from "react-icons/fa";

import OrderFormClient from "./oreder/OrderFormClient";

const OrderForm = async () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-bgColor2">
      <div className="my-4 border border-green-500 rounded-lg p-6 w-full max-w-md bg-white shadow-lg">
        <h2 className="text-3xl font-bold text-blueTextColor text-center mb-4">
          বইয়ের অর্ডার ফরম
        </h2>
        <div className="flex items-center gap-2 leading-loose mb-2">
          <FaHandPointRight className="text-blueTextColor" />
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
          <FaHandPointRight className="text-blueTextColor" />
          <p>নিচের বক্সগুলো ফিলাপ করুন</p>
        </div>

        <OrderFormClient />
      </div>
    </div>
  );
};

export default OrderForm;
