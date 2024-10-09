// src/components/WholeCountryDelivery.tsx
import { TbTruckDelivery } from "react-icons/tb";
import Image from "next/image";
import CTAArrow from "/public/CTA_arrow_up_02.png";

const WholeCountryDelivery = () => {
  return (
    <div className="bg-bgColor2 my-8 p-6 flex flex-col md:flex-row justify-center items-center gap-4">
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
      <button className="bg-green-400 rounded-full text text-lg font-bold md:text-2xl py-4 px-6 flex items-center justify-center gap-2">
        <TbTruckDelivery className="text-4xl" /> &apos;সারাদেশে ফ্রি ডেলিফারি&apos; তে অর্ডার করতে চাই
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

export default WholeCountryDelivery;
