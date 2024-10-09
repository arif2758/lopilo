"use client";
import { FaHandPointRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const RestartCard = ({ text, index }: { text: string; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // ৫০% দৃশ্যমান হলে ট্রিগার হবে
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      // পূর্ববর্তী কার্ডের জন্য একটি timeout সেট করা
      const timer = setTimeout(() => {
        setShow(true);
      }, index * 200); // প্রতিটি কার্ডের জন্য 500ms অপেক্ষা

      // ক্লিন আপ ফাংশন
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  // ১ম কার্ড বাম থেকে আসবে, ২য় ডান থেকে
  const translateDirection =
    index % 2 === 0 ? "translate-x-[-50%]" : "translate-x-[50%]";

  return (
    <div
      ref={ref}
      className={`border border-green-400 border-dashed flex items-start justify-start gap-2 py-2 px-4 rounded-lg transition-transform duration-[2000ms] ease-out ${
        show ? "opacity-100 translate-x-0" : `opacity-0 ${translateDirection}`
      }`}
    >
      <FaHandPointRight className="w-6 h-6 flex-shrink-0" />
      <p className="pl-4">{text}</p>
    </div>
  );
};

export default RestartCard;
