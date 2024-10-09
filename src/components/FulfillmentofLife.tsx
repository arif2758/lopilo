import { BiSolidUpArrow } from "react-icons/bi";

const FulfillmentofLife = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-blueTextColor text-3xl font-bold ">
        <p className="mb-8"> সুখ ও সফলতার সিক্রেট ব্লুপ্রিন্ট</p>

        <p className="mb-8">
          {" "}
          ‘Fulfillment of Life’ এর নতুন দিগন্ত উম্মোচন করুন!
        </p>
      </h2>
      <p className="text-black font-semibold">
        (ফ্রি ডেলিভারি ও ৫ হাজার টাকা মূল্যের ২ টি এক্সক্লুসিভ লাইভ
        ‘মাস্টারক্লাস’ বুঝে নিন)
      </p>
      <div className="flex justify-center items-center mb-8">
        <BiSolidUpArrow className="text-blueTextColor icon-size" />
      </div>
    </div>
  );
};

export default FulfillmentofLife;
  