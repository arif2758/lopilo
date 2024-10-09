// src/components/YourQueries.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const YourQueries = () => {
  return (
    <div className="mx-4 md:mx-12 lg:mx-24 mt-24 mb-12">
      <h1 className="text-3xl md:text-4xl text-blueTextColor font-bold">
        আপনার সকল জিজ্ঞাসা
      </h1>
      <div className="mt-8 text-lg font-semibold">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              আমাকে তাহলে কতো টাকা পেমেন্ট করতে হবে?
            </AccordionTrigger>
            <AccordionContent>৩৮০ টাকা</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              বইটি কবে (কতোটুকু সময়ের মধ্যে) ডেলিভারি পাবো?
            </AccordionTrigger>
            <AccordionContent>
              আমরা প্রতিদিন কুরিয়ার করে থাকি। সেক্ষেত্রে ১-২ দিন এর মধ্যেই পেতে
              পারেন। তবে বিভিন্ন সিচুয়েশনে কুরিয়ার কোম্পানি বা এলাকা ভেদে দেরি
              হতে পারে, তাই আমরা সর্বোচ্চ ৫ দিন সময় নিয়ে থাকি।
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>বইয়ের পৃষ্ঠা সংখ্যা কতো?</AccordionTrigger>
            <AccordionContent>
              ১৪৪ পৃষ্ঠা – ৬৫ GSM (কাভার বাদে), কাভার: পেপারব্যাক
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              আমি কি কি এক্সক্লুসিভ ‘গিফট’ পাবো?
            </AccordionTrigger>
            <AccordionContent>
              <p>1. বইটি সারাদেশে ফ্রি ডেলিভারি। </p>
              <p>
                2. 7 Success Factors to Restart Your Life (Online Masterclass)
              </p>
              <p> 3. Q/A Session about the book ‘Restart Yourself’ (Online)</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              গিফটগুলো কি রেকর্ডেড নাকি লাইভ সেশন?
            </AccordionTrigger>
            <AccordionContent>
              দুটোই লাইভ সেশন! আমরা আপনাকে এখন বইটি কিনলেই ইন্সট্যান্ট ফেসবুক ও
              WhatsApp গ্রুপে একসেস দিবো। সেখানে বিস্তারিত জানানো হবে।
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              আমি অনলাইনে কিনতে পারি না বা কিভাবে অনলাইনে টাকা পাঠাবো বা আমার
              বিকাশ নাই ইত্যাদি সমস্যাতে কি করবো?
            </AccordionTrigger>
            <AccordionContent>
              শুধু একটা কল করুন এই নাম্বারে 01798-925566 (সকাল ১০ টা থেকে রাত ১০
              টা)
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default YourQueries;
