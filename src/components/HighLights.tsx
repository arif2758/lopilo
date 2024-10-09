// src/components/HighLights.tsx
import {
  FaRegCommentDots,
  FaRegHandPointUp,
  FaRegClipboard,
  FaRegUser,
  FaRegThumbsUp,
} from "react-icons/fa";

const highLightData = [
  {
    id: "1",
    icon: <FaRegCommentDots />,
    titleB: "প্র্যাকটিক্যাল এক্সপ্ল্যানেশন",
    titleE: "Practical Explanation",
    description:
      "বই আলোচনায় সবকিছু বিস্তারিতভাবে প্র্যাকটিক্যালি বোঝানোর চেষ্টা করা হয়েছে। যেন এখনই জীবনের সঙ্গে মিলিয়ে বুঝে নিতে পারেন।",
  },
  {
    id: "2",
    icon: <FaRegHandPointUp />,
    titleB: "রিলেটেবল এক্সাম্পল",
    titleE: "Relatable Example",
    description:
      "সকল উদাহরণ আমাদের খুব কাছাকাছি রাখা হয়েছে, যাতে কারো বোঝার ক্ষেত্রে গ্যাপ তৈরি না হয়।",
  },
  {
    id: "3",
    icon: <FaRegClipboard />,
    titleB: "ইন্সপাইরেশনাল স্টোরি",
    titleE: "Inspirational Stories",
    description:
      "অনেক সুন্দর সুন্দর গল্পের মাধ্যমে সবকিছু ফুটিয়ে তুলতে চেষ্টা করা হয়েছে।",
  },
  {
    id: "4",
    icon: <FaRegUser />,
    titleB: "ভিজ্যুয়াল ক্যারেক্টার",
    titleE: "Visual Character",
    description:
      "বাস্তবতার সঙ্গে মেলাতে বা বিষয়বস্তু বোঝাতে ভিজ্যুয়াল ইমেজ এর সাহায্য নেওয়া হয়েছে, যা বইটিকে অন্য মাত্রা যোগ করেছে।",
  },
  {
    id: "5",
    icon: <FaRegThumbsUp />,
    titleB: "ক্লিয়ার এন্ড ফ্রেশ ল্যাঙ্গুয়েজ",
    titleE: "Clear and Concise Language",
    description:
      "ভাষার ক্ষেত্রে বইটিকে সর্বদাই খুব সেন্সিটিভ রাখা হয়েছে, যাতে কিছু বুঝতে কারো বিন্দুমাত্র কষ্ট না হয় এবং নিজের মতো করে সবাই বইটি ইনজয় করতে পারে।",
  },
];

const HighLights = () => {
  return (
    <div className="my-12 text-center relative mx-2 md:mx-[5%]">
      <h2 className="text-4xl font-bold text-blueTextColor"> হাইলাইটস </h2>

      <svg
        className="absolute left-1/2 transform -translate-x-1/2 mt-2"
        width="200"
        height="20"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10 T140 10 T160 10 T180 10 T200 10"
          stroke="#34D399"
          strokeWidth="4"
          fill="transparent"
          className="animate-draw"
        />
      </svg>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center overflow-hidden mt-16">
        {highLightData.map((item) => (
          <div
            key={item.id}
            className="bg-green-300 rounded-md mb-2 p-4 border-b-orange-400"
          >
            <div className="flex justify-center items-center text-5xl mb-4">
              {item.icon}
            </div>
            <div className="text-xl font-semibold">{item.titleB}</div>
            <div className="text-xl font-semibold">
              ({item.titleE})
            </div>
            <div className="mt-4 text-base">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighLights;
