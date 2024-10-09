// src/components/Reviews.tsx
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import CTAArrow from "/public/CTA_arrow_up_02.png";
import { CarouselReview } from "./CarouselReview";

const Reviews = () => {
  return (
    <div className="bg-bgColor2">
      <div className="bg-bgColor2 my-12 p-6 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Left Arrow */}
        <div className="animate-wiggle">
          <Image
            src={CTAArrow}
            alt="CTA Arrow Left"
            width={70}
            height={70}
            className="mr-5"
          />
        </div>

        <button className=" bg-blueTextColor hover:bg-green-700 text-white py-4 px-6 md:py-5 md:px-7 rounded-full inline-flex items-start text-lg font-semibold shadow-lg transition">
          <FaHandPointRight className="text-4xl " />
          <span className="text-lg md:text-2xl font-extrabold">
            ৯২.৯% স্পেশাল ডিসকাউন্ট কোনভাবেই মিস করতে চাই না
          </span>
        </button>

        {/* Right Arrow (with reflection) */}
        <div className="animate-wiggle">
          <Image
            src={CTAArrow}
            alt="CTA Arrow Right"
            width={70}
            height={70}
            className="transform scale-x-[-1]"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-center text-3xl md:text-4xl text-blueTextColor font-extrabold">
          পাঠকের মতামত
        </h2>
        <CarouselReview />
      </div>
    </div>
  );
};

export default Reviews;
