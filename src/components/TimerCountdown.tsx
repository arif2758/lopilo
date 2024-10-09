"use client";
import React, { useEffect, useState } from "react";

const TimerCountdown: React.FC = () => { 
  const initialTime = 25 * 24 * 60 * 60; // 25 days in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div>
      <div className="flex space-x-6 text-gray-700 text-xl">
        <div className="flex flex-col items-center bg-green-500 text-white rounded-lg p-4 shadow-md">
          <span className="font-semibold">{String(days).padStart(2, "0")}</span>
          <span className="text-sm">দিন</span>
        </div>
        <div className="flex flex-col items-center bg-blue-500 text-white rounded-lg p-4 shadow-md">
          <span className="font-semibold">
            {String(hours).padStart(2, "0")}
          </span>
          <span className="text-sm"> ঘন্টা </span>
        </div>
        <div className="flex flex-col items-center bg-yellow-500 text-white rounded-lg p-4 shadow-md">
          <span className="font-semibold">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-sm">মিনিট</span>
        </div>
        <div className="flex flex-col items-center bg-red-500 text-white rounded-lg p-4 shadow-md">
          <span className="font-semibold">{String(secs).padStart(2, "0")}</span>
          <span className="text-sm">সেকেন্ড</span>
        </div>
      </div>
      {timeLeft === 0 && (
        <div className="mt-6 text-xl text-red-600 font-semibold">
          Time&apos;s up!
        </div>
      )}
    </div>
  );
};

export default TimerCountdown;
