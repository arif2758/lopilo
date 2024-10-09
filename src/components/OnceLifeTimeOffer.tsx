// src/components/OnceLifeTimeOffer.tsx
import React from "react";

// Define props interface for the TableRow component
interface TableRowProps {
  index: number;
  description: string;
  price: string;
}

// Row component to represent each table row
const TableRow: React.FC<TableRowProps> = ({ index, description, price }) => {
  const cellClass = "border border-gray-100 border-opacity-25 px-4 py-2";

  return (
    <tr>
      <td className={cellClass}>{index}</td>
      <td className={cellClass}>{description}</td>
      <td className={cellClass}>{price}</td>
    </tr>
  );
};

const OnceLifeTimeOffer: React.FC = () => { 
  // Sample data for the table
  const tableData = [
    { description: "রিস্টার্ট ইয়োরসেলফ বই :", price: "৩৮০ টাকা" },
    {
      description: "7 Success Factors to Restart Your Life (Online)",
      price: "৩০০০ টাকা",
    },
    {
      description: "Q/A Session about the book ‘Restart Yourself’ (Online)",
      price: "২০০০ টাকা",
    },
    { description: "ফ্রি ডেলিভারি", price: "১০০ টাকা (এভারেজ)" },
    { description: "RY Alumni Access", price: "(Value Unlimited)" },
  ];

  return (
    <div className="mt-12 px-2 md:mx-[10%]">
      <h2 className="text-blueTextColor text-4xl mb-8 font-bold text-center ">
        এটা Once in a Lifetime অফার।
      </h2>
      <h2 className="text-blueTextColor text-2xl mb-8 text-center">
        এই অফার আগে কখনো আসে নাই এবং ভবিষ্যতেও হয়তো আসবে না!
      </h2>
      <h2 className="text-blueTextColor text-2xl mb-8 font-bold text-center">
        ৫৪৮০ টাকার ভ্যালু পাচ্ছেন মাত্র ৩৮০ টাকায়
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse text-lg">
          <thead className="bg-[#268549] text-[#97FFA6]">
            <tr>
              <th className="border border-gray-100 border-opacity-25 px-4 py-2">
                নং
              </th>
              <th className="border border-gray-100 border-opacity-25 px-4 py-2">
                বিবরণ
              </th>
              <th className="border border-gray-100 border-opacity-25 px-4 py-2">
                মূল্য
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#004920] text-[#97FFA6]">
            {tableData.map((item, index) => (
              <TableRow
                key={index}
                index={index + 1}
                description={item.description}
                price={item.price}
              />
            ))}
          </tbody>
        </table>

        {/* ৭ম রো (একটি কলামের) */}
        <div className="mt-1">
          <div className="text-3xl font-bold border border-gray-100 border-opacity-25 p-4 bg-[#97FFA6] text-[#004920] text-center">
            টোটাল ভ্যালু : ৫৪৮০ টাকা
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnceLifeTimeOffer;
