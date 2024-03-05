import React from "react";
import { Image } from "..";

interface SkillCardProps {
  title: string;
  status: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image, status, title }) => {
  return (
    <div className="relative cursor-pointer transition">
      <Image
        alt={title}
        src={image}
        className="bg-violet-600 rounded-xl hover:scale-110"
      />
      <div className="absolute bottom-1 text-sm left-1 py-1 px-2 rounded-full bg-gray-800/70 text-white font-bold backdrop-blur-md">
        {title} - {status}
      </div>
    </div>
  );
};

export default SkillCard;
