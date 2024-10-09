// src/components/OfferBanner.tsx
import { FaGift } from "react-icons/fa";

const OfferBanner = () => {
  return (
    <div className="bg-green-50 py-12 text-center relative">
      {/* Top Wave Effect */}
      <div className="absolute top-0 left-0 w-full">
       
      </div> 

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          আপনার ইচ্ছের পরিবর্তন শুরু হোক এখনই
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          ‘সারাদেশে ফ্রি ডেলিভারি’ অফারটি সীমিত সময়ের জন্য। যে কোনো সময় বন্ধ হয়ে
          যাবে। <br />
          তাছাড়া ‘৫০০০ টাকা মূল্যের দুটি অনলাইন সেশন’ অফার সিট ফিলাপ হলেই শেষ
          হয়ে যাবে!
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-8">
          মিস করে আফসোস করতে চাই না
        </h3>

        {/* Call to Action Button */}
        <button className=" bg-green-600 hover:bg-green-700 text-white py-4 px-6 md:py-5 md:px-7 rounded-full inline-flex items-start text-lg font-semibold shadow-lg transition">
          <FaGift className="text-2xl mr-2" /> {/* Increased icon size */}
          <span className="text-lg md:text-2xl font-extrabold">
            ৫০০০ টাকার মূল্যের গিফট পেতে চাই
          </span>
        </button>
      </div>

      {/* Bottom Zigzag Effect */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f381e"
            d="M0,80 L30,70 L60,80 L90,70 L120,80 L150,70 L180,80 L210,70 L240,80 L270,70 L300,80 L330,70 L360,80 L390,70 L420,80 L450,70 L480,80 L510,70 L540,80 L570,70 L600,80 L630,70 L660,80 L690,70 L720,80 L750,70 L780,80 L810,70 L840,80 L870,70 L900,80 L930,70 L960,80 L990,70 L1020,80 L1050,70 L1080,80 L1110,70 L1140,80 L1170,70 L1200,80 L1230,70 L1260,80 L1290,70 L1320,80 L1350,70 L1380,80 L1410,70 L1440,80 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default OfferBanner;
