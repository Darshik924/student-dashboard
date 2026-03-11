import React, { type FC } from "react";
import type { propsType } from "../Types/propsType";

const AvatarSlot: FC<propsType> = ({
  imgSrc,
  onClick,
  isSelected,
  isPremium,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative h-70 w-70 border-7 rounded-full cursor-pointer overflow-hidden transition-all duration-200
      ${
        isPremium
          ? "border-gray-500 opacity-50 cursor-not-allowed"
          : "hover:border-pink-500"
      }

      ${
        isSelected
          ? "border-yellow-400 shadow-xl"
          : "border-purple-950 hover:scale-110"
      }`}
    >
      <img
        className="h-full w-full object-cover"
        src={imgSrc}
        alt="avatar image"
      />
    </div>
  );
};

export default AvatarSlot;
