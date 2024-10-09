// src/components/IWillOrder.tsx
import TimerCountdown from "./TimerCountdown";

const IWillOrder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center my-4 bg-bgColor1 p-1 md:p-2">
      <p className="text-blueTextColor text-lg font-bold text-center mb-4 md:mb-0">
        আপনার স্বপ্নযাত্রা শুরু হোক এখনই।
      </p>

      <div className="flex justify-center mb-4">
        <button className="bg-blueTextColor text-white hover:bg-green-500 hover:text-gray-950 rounded-lg py-2 px-6">
          <p className="text-xl md:text-2xl">অর্ডার করবো</p>
          <p className="text-sm">(৫,৪৮০ টাকার ভ্যালু পাচ্ছেন মাত্র ৩৮০ টাকা)</p>
        </button>
      </div>

      <div className="flex justify-center mb-4 md:mb-0">
        <TimerCountdown />
      </div>
    </div>
  );
};

export default IWillOrder;
