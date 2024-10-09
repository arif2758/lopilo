// src/components/YouLearnCard.tsx
import { GiCheckMark } from "react-icons/gi";

const YouLearnCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center py-2 px-3 border-b mb-4 bg-white border-b-orange-300">
      <span className="bg-black rounded-full p-1 text-white mr-4">
        <GiCheckMark />
      </span>
      <p>
        <span className="font-bold">{title}: </span>
        <span>{description}</span>
      </p>
    </div>
  );
};

export default YouLearnCard;
