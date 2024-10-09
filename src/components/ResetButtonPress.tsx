// src/components/ResetButtonPress.tsx
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import CTAArrow from "/public/CTA_arrow_up_02.png";

const ResetButtonPress = () => {
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
      <button className="bg-green-400 rounded-full text text-lg md:text-2xl py-4 px-6 flex items-center justify-center gap-2">
        <FaHandPointRight /> রিসেট বাটন চেপে ধরে নতুন জীবন শুরু করেতে চাই
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

export default ResetButtonPress;
