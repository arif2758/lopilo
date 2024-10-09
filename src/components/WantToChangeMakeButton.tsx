// src/components/WantToChangeMakeButton.tsx
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import CTAArrow from "/public/CTA_arrow_up_02.png";

const WantToChangeMakeButton = () => {
  return (
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

      {/* Button */}
      <button className="font-bold bg-blueTextColor text-green-200 hover:bg-green-400 hover:text-blueTextColor rounded-full text-lg md:text-2xl py-3 md:py-4 px-4 md:px-6 flex items-center justify-center gap-2">
        <FaHandPointRight /> বইটি কিনে চেঞ্জমেকার হতে চাই
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
  );
};

export default WantToChangeMakeButton;
