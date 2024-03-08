import React from "react";
import { Image } from "..";
import { SkillItemProps } from "@/interfaces/skills.interface";
import { api } from "@/api.json";

const SkillCard: React.FC<SkillItemProps> = ({ image, name }) => {
  return (
    <div className="relative cursor-pointer transition">
      <Image alt={name} src={`${api}${image}`} className="hover:scale-110 " />
      <div className="absolute hidden md:block bottom-1 text-lg left-1 px-2 rounded-md bg-white/80 text-primary font-bold backdrop-blur-sm">
        {name}
      </div>
    </div>
  );
};

export default SkillCard;
