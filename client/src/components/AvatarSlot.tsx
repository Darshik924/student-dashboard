import React, { type FC } from "react";
import type { propsType } from "../Types/propsType";

const AvatarSlot: FC<propsType> = ({ imgSrc }) => {
  return (
    <div className="h-72 w-60 border-4 border-purple-950 bg-white rounded-3xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 hover:border-pink-500">
      <img
        className="h-full w-full object-cover"
        src={imgSrc}
        alt="avatar image"
      />
    </div>
  );
};

export default AvatarSlot;
