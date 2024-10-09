// src/components/FastPaced.tsx
import Image from "next/image";
import RestartYourSelfBook from "/public/restart-your-self-book.jpg";

const FastPaced = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-[10%] justify-center items-center">
      <div>
        <Image src={RestartYourSelfBook} alt="Restart your self book" />
      </div>
      <div className="text-blueTextColor text-lg leading-loose">
        আপনি কি হ্যামস্টার হুইল (ইদুর ধরা মেশিন) এর ফাঁদে পড়েছেন? একই প্যাটার্নে
        বারবার ট্র্যাপড হচ্ছেন? Fast-Paced ওয়ার্ল্ডে দৌঁড়াচ্ছেনও নিজের
        ক্যাপাসিটি থেকে অনেক বেশি গতিতে কিন্তু ছুঁতে পারছেন না কাঙ্খিত সাফল্য!
        <br />
        কেমন হতো যদি আপনি মোবাইলের মতো ‘রিসেট’ বাটন চেপে ধরে নিজের জীবনেরও
        রিস্টার্ট করে নিতে পারতেন! লিমিটলেস ইচ্ছেশক্তি, অসামান্য উদ্যম আর ভরপুর
        এনার্জি দিয়ে সফলতার নতুন পথ আঁকতে পারতেন! খুশির খবর হচ্ছে- ‘রিস্টার্ট
        ইয়োরসেলফ’ বইটি দিয়ে এক্সাক্টলি আপনি এখন সে কাজটিই করবেন!
      </div>
    </div>
  );
};

export default FastPaced;
