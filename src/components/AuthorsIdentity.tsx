// src/components/AuthorsIdentity.tsx
import Image from "next/image";
import Author from "/public/Zaved-bhai-png.png";
import Image1 from "/public/Picture1.png";
import Image2 from "/public/Picture2.png";
import Image3 from "/public/Picture3.png";

const AuthorsIdentity = () => {
  return (
    <div className="border border-green-900 rounded-3xl mx-2 md:mx-[5%] my-8 p-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blueTextColor">
        লেখক পরিচয়
      </h2>

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center my-4">
        <div className="flex justify-center">
          <Image src={Author} alt="Zaved Parvaze" />
        </div>
        <div className="text-lg">
          <p>লাইফ এন্ড বিজনেস কোচ, রিস্টার্ট ইয়োরসেলফ</p>
          <p>হেড অব পিপল, অগমেটিক্স বাংলাদেশ</p>
          <p>ফাউন্ডার, ড্রিমস ফর টুমরো</p>
          <p>কর্পোরেট ট্রেইনার</p>
          <p>ফ্যাকাল্টি</p>
          <p className="font-extrabold text-2xl mt-3">জাভেদ পারভেজ</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-1 border-blueTextColor my-8" />

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
        <div>
          <h2 className="text-lg mb-4 text-center">লেখক যেখান থেকে শিখেছেন</h2>
          <Image src={Image1} alt="লেখক যেখান থেকে শিখেছেন" />
        </div>
        <div>
          <h2 className="text-lg mb-4 text-center">
            লেখক যেসব জায়গায় কাজ করেছেন{" "}
          </h2>
          <Image src={Image2} alt="লেখক যেসব জায়গায় কাজ করেছেন" />
        </div>
        <div>
          <h2 className="text-lg mb-4 text-center"> লেখকের অন্যান্য বইগুলো</h2>
          <Image src={Image3} alt="লেখকের অন্যান্য বইগুলো" />
        </div>
      </div>
    </div>
  );
};

export default AuthorsIdentity;
