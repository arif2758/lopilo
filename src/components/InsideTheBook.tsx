// src\components\InsideTheBook.tsx
import React from "react";
import { inSideBookData } from "../utils/inSideBookData";
import { IoRemoveOutline } from "react-icons/io5";

const InsideTheBook = () => {
  return (
    <div className="mt-8 md:mx-[5%]">
      <div className="flex flex-col md:flex-row justify-center items-center text-4xl mb-12 font-bold">
        <div className="my-12 text-center relative">
          <h2 className="text-4xl font-bold text-blueTextColor">
            Inside the book,
          </h2>

          <svg
            className="absolute left-1/2 transform -translate-x-1/2 mt-2"
            width="200"
            height="20"
            viewBox="0 0 200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10 T140 10 T160 10 T180 10 T200 10"
              stroke="#34D399"
              strokeWidth="4"
              fill="transparent"
              className="animate-draw"
            />
          </svg>
        </div>
        <div className="text-center mt-4 md:mt-0 md:ml-4">
          আপনি যা যা এক্সপ্লোর করবেন!{" "}
        </div>
      </div>

      <div className=" md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-16">
        {inSideBookData.map((data, index) => (
          <div
            key={data.id}
            className={`p-4 rounded-lg shadow-md relative mt-16 mb-16 md:mb-1 ${
              index === 0 || index === 1 || index === 6
                ? "bg-bgColor4"
                : "bg-bgColor5"
            } ${index === 6 ? "col-span-2" : ""}`}
          >
            {/* Display the ID as a badge at the top center of each card */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-green-500 text-green-500 bg-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-4xl">
              {data.id}
            </div>

            {/* Title block with Bengali and English titles */}
            <div className="mt-10 text-2xl font-bold text-center">
              <div>{data.titleB}</div>
              <div>({data.titleE})</div>
            </div>

            <div className="flex justify-center my-3 text-4xl">
              <IoRemoveOutline style={{ transform: "scale(2, 1)" }} />
            </div>
            {/* Description */}
            <p className="mt-2">{data.description}</p>

            {data.extraContentList?.map((extra) => (
              <div key={extra.extraContentListId}>
                {extra?.extraContent?.map((item) => {
                  const hasTitle = "extraContentTitle" in item;

                  return (
                    <div
                      key={item.extraContentId}
                      className="flex items-start py-2 "
                    >
                      <span className="mr-2 text-2xl leading-none">•</span>
                      <div className="flex flex-col">
                        {hasTitle && (
                          <span className="font-bold  whitespace-nowrap">
                            {item.extraContentTitle}:
                          </span>
                        )}
                        <span>{item.extraContentDescription}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsideTheBook;
