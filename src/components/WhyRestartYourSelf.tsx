import { BiSolidDownArrow } from "react-icons/bi";
import RestartCard from "./RestartCard";

const restartYourSelf = [
  {
    id: 1,
    text: "‘রিস্টার্ট ইয়োরসেলফ’ আপনার নতুন transformative জার্নির রোডম্যাপ তৈরি করে দেবে। ",
  },
  {
    id: 2,
    text: "আপনাকে প্রোপার গাইড প্রোভাইড করবে যাতে আপনি আপনার শরীর (Body), আবেগ (Emotion) ও মনের (Mind) কারসাজি ধরতে ও বুঝতে পারেন।",
  },
  { id: 3, text: "নিজেকে সমস্যামুক্ত করার ‘সিক্রেট সস’ হাতে তুলে দেবে।" },
  { id: 4, text: "জীবনের কন্ট্রোল আবার নিজের দখলে নেওয়ার টেকনিক শেয়ার করবে।" },
  {
    id: 5,
    text: "হ্যাপিনেস ধরে রেখে self-development-এ ফোকাস বাড়ানোর ফর্মুলা শেখাবে।",
  },
  {
    id: 6,
    text: "সর্বোপরি বইটির মাধ্যমে আপনি নিজের জীবনের ‘সিইও’ হতে পারবেন আর ‘পিয়ন বা দারোয়ানের’ কথায় জীবন চালাতে হবে না!",
  },
];

const WhyRestartYourSelf = () => {
  return (
    <div className="relative m-2 border shadow-2xl rounded-lg mt-12 p-4 md:mx-[5%] lg:p-8">
      <BiSolidDownArrow className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 top-0 text-3xl text-blueTextColor" />
      <div className="md:px-[6%]">
        <div className="text-center pt-8 text leading-loose">
          <h2 className="text-green-700 font-bold text-2xl lg:text-4xl mb-2">
            কেন ‘রিস্টার্ট ইয়োরসেলফ’ একমাত্র সমাধান!
          </h2>
          <p className="text-base lg:text-lg px-4">
            আপনিও যদি এই চ্যালেঞ্জ ফেস করে থাকেন, আপাতত আর ভয়ের কিছু নেই। আপনি
            যেমন একা নন তেমনি আমাদের চ্যালেঞ্জ মোকাবেলার আলটিমেট সমাধানও এখন
            হাতের নাগালে!
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 text-base lg:text-lg font-semibold mt-8 lg:mt-12 pb-8">
          {restartYourSelf.map((item, index) => (
            <RestartCard key={item.id} text={item.text} index={index} />
          ))}
        </div>

        {/* Bottom Arrow */}
        <BiSolidDownArrow className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 bottom-0 text-3xl text-blueTextColor scale-y-[-1]" />
      </div>
    </div>
  );
};

export default WhyRestartYourSelf;
