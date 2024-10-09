// src/components/WhateverYouLearn.tsx
import Image from "next/image";
import RestartYourSelfBook from "/public/restart-your-self-book.jpg";
import YouLearnCard from "./YouLearnCard";
import { PiLineVerticalBold } from "react-icons/pi";

const WhateverYouLearnText = [
  {
    id: "1",
    title: "রি-ডিসকাভার ইয়োরসেলফ",
    description:
      " নিজেকে নতুনভাবে চিনতে পারবেন। নিজের আসল পরিচয় ও রিয়েল purpose খুঁজে পাবেন।",
  },
  {
    id: "2",
    title: "মাস্টার ইয়োর মাইন্ড",
    description:
      " পাওয়ারফুল টেকনিক শিখে নিজের চিন্তা ও আবেগের কন্ট্রোল নিতে পারবেন। অপটিমাইজ ইয়োর টাইম : গোল অ্যাচিভ করতে সময়কে প্রায়োরিটি দেওয়া শিখবেন।",
  },
  {
    id: "3",
    title: "সফলতার নতুন সংজ্ঞা",
    description:
      " নিজের ডিজায়ারের সঙ্গে মিলিয়ে প্রতি ধাপে ধাপে কিভাবে সফল হওয়া যায়, সেটা বুঝবেন।",
  },
  {
    id: "4",
    title: "বাঁধা দূর করার ফর্মুলা",
    description:
      "ধৈর্য ধরে রেখে সকল Obstacles রোধ করে কিভাবে বাউন্স ব্যাক করতে হয়, সেটাও আয়ত্ব করবেন। ",
  },
];

const WhateverYouLearn = () => {
  return (
    <div className="mt-12  md:mx-[5%] grid grid-cols-1 md:grid-cols-2 gap-6 justify-center drop-shadow-xl rounded-2xl overflow-hidden bg-blue-100">
      <div className="bg-bgColor3">
        <Image
          src={RestartYourSelfBook}
          alt="Restart your self book"
          className="py-10 md:py-20 w-full h-auto" // Ensure image is responsive
        />
      </div>

      <div className="leading-loose">
        <h2 className="py-6 text-3xl md:text-4xl font-bold flex items-center">
          <PiLineVerticalBold className="mr-2" /> যা যা শিখবেন
        </h2>

        <div className="mx-3">
          {WhateverYouLearnText.map((item) => (
            <YouLearnCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhateverYouLearn;
