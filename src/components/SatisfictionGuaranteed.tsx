// src/components/SatisfictionGuaranteed.tsx
import Image from "next/image";
import SatisfictionBage from "/public/satisfaction-badge.png";

const SatisfictionGuaranteed = () => {
  return (
    <div className="mt-28 relative  mx-4 md:mx-[20%] pt-28 p-8 md:p-12 text-blueTextColor border border-green-500 border-dashed rounded-3xl shadow-2xl leading-loose bg-bgColor6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        SATISFACTION GUARANTEED
      </h2>
      <p className="text-center text-lg md:text-xl">
        30 Days BULLETPROOF No-Question-Asked 100% Refund Policy!
      </p>
      <p className="italic text-sm md:text-base">
        “রিস্টার্ট ইয়োরসেলফ” একটি Action-Oriented সেল্ফ ডেভেলপমেন্ট ক্যাটাগরির
        বই যেখানে আপনি নিজের মাইন্ডসেট ও দৃষ্টিভঙ্গি পরিবর্তনের পাশাপাশি কিভাবে
        একটা সুখী ও সমৃদ্ধির জীবন পরিচালনা করবেন, সেটা জানতে বুঝতে ও জানতে
        পারবেন। যাতে আপনি নিজের কাঙ্ক্ষিত পজিটিভ পরিবর্তন ধরে রেখে সাকসেস অর্জন
        করতে পারেন। নিজের সফলতাকে অন্যভাবে সংজ্ঞায়িত করতে পারেন এন্ড হোপ ফর দ্য
        বেস্ট!
      </p>
      <p className="italic text-sm md:text-base">
        And your satisfaction is fully guaranteed!
      </p>
      <p className="italic text-sm md:text-base">
        যদি কোন কারণে আপনি এই বই পড়ে স্যাটিসফাইড না হন, অথবা যদি কেনার পর মনে হয়
        এই বুক আপনার জন্য না, শুধু ফেসবুক বা ওয়াটসঅ্যাপে এ গিয়ে আমাদেরকে জানালে
        আমরা 100% রিফান্ড করে দেব।
      </p>

      {/* Positioned and rotated Image */}
      <div className="absolute top-0 md:right-0 transform translate-x-1/2 -translate-y-1/3 md:translate-x-1/4 md:-translate-y-1/4 lg:translate-x-1/3 lg:-translate-y-1/3">
        <Image
          src={SatisfictionBage}
          alt="Satisfiction Guaranteed Badge"
          width={160}
          height={120}
        />
      </div>
    </div>
  );
};

export default SatisfictionGuaranteed;
