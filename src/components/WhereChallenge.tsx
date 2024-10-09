// src/components/WhereChallenge.tsx
import React from "react";

const WhereChallenge = () => {
  return (
    <div className="mb-8 bg-bgColor2 rounded-lg border-dashed border-b border-green-400 flex flex-col md:flex-row gap-6 mx-4 md:mx-28 px-4 md:px-16 py-6">
      <div className="flex-1 min-w-[250px]">
        <h2 className="text-green-700 font-bold text-center leading-loose ">
          <p className="text-2xl md:text-3xl leading-loose mb-4">
            তাহলে আসলে আমাদের
          </p>
          <p className="text-5xl md:text-7xl leading-10 font-extrabold">
            চ্যালেঞ্জটা
            <span className="block mt-4">কোথায়?</span>
          </p>
        </h2>
      </div>
      <div className="flex-1 min-w-[250px]">
        <p className="text-lg leading-loose">
          আমাদের চারপাশ অনেক বেশি ডিসট্র্যাকশন ও নয়েজে (হাউকাউ – হোক মানুষ বা
          টেকনোলোজি) পরিপূর্ণ। আমরা কখনো সত্যিকার অর্থে বুঝেই উঠতে পারি না, কোনটা
          আসলে আমাদের জন্য ম্যাটার করে (গুরুত্বপূর্ণ) আর কোনটা করে না। আমরা অন্যের
          মতামত, বিগড়ে যাওয়া চিন্তা ও বোকামো আবেগ দ্বারা সর্বদাই দিকভ্রান্তের মতো
          এদিক সেদিক ঘোরাঘুরি করি।
        </p>
      </div>
    </div>
  );
};

export default WhereChallenge;
