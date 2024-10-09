// src/components/OfferTime.tsx
import TimerCountdown from "./TimerCountdown";

const OfferTime = () => {
  return (
    <div className="mx-2 md:mx-[25%] flex flex-col items-center justify-center mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        অফার শেষ হতে আর বাকি
      </h1>
      <TimerCountdown />
    </div>
  );
};

export default OfferTime;
 