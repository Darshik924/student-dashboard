import React, { type FC } from "react";
import type { propsType } from "../Types/propsType";

const AvatarSlot: FC<propsType> = ({ imgSrc, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`h-72 w-60 border-7 rounded-3xl cursor-pointer overflow-hidden transition-all duration-200 hover:border-pink-500
      ${
        isSelected
          ? "border-yellow-400 hover:border-yellow-400 scale-110 shadow-xl"
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
