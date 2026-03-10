import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarSlot from "../components/AvatarSlot";
import I1killua from "../assets/avatars/1_killua.jpg";
import I2ai from "../assets/avatars/2_ai.jpg";
import I3hyouka from "../assets/avatars/3_hyouka.jpg";
import I4jinwoo from "../assets/avatars/4_jinwoo.jpg";
import I5tanjiro from "../assets/avatars/5_tanjiro.jpg";
import I6gojo from "../assets/avatars/6_gojo.jpg";
import I7senku from "../assets/avatars/7_senku.jpg";
import I8mikasa from "../assets/avatars/8_mikasa.jpg";
import I9eren from "../assets/avatars/9_eren.jpg";
import I0ayano from "../assets/avatars/0_ayano.jpg";

const Avatars = () => {
  const [selectedAvatar, setAvatar] = useState<string | null>(null);

  const navigate = useNavigate();
  const avatarsArr = [
    I1killua,
    I2ai,
    I3hyouka,
    I4jinwoo,
    I5tanjiro,
    I6gojo,
    I7senku,
    I8mikasa,
    I9eren,
    I0ayano,
  ];

  const handleAvatarSelection = (avatar: string): void => {
    setAvatar(avatar);
    localStorage.setItem("selectedAvatar", avatar);
    console.log(localStorage.getItem("selectedAvatar"));

    setTimeout(() => {
      navigate("/register");
    }, 350);
  };

  return (
    <main className="pt-16 min-h-screen bg-linear-to-r from-pink-400/80 to-indigo-500/80 flex justify-center items-center ">
      <div className="flex mt-2 mb-15 flex-col gap-3 justify-between">
        <h2 className="text-5xl text-white text-center font-bold font-sans border-3 p-4 rounded-3xl border-indigo-400 hover:text-red-500 transition-duration-300 bg-purple-900 shadow-lg shadow-pink-500/40 w-fit mx-auto">
          Choose An Avatar
        </h2>

        <div className="avaContainer p-2 grid gap-8 grid-cols-5 grid-rows-2">
          {avatarsArr.map((avatarImgEle, idx) => (
            <AvatarSlot
              key={idx}
              imgSrc={avatarImgEle}
              onClick={() => handleAvatarSelection(avatarImgEle)}
              isSelected={selectedAvatar === avatarImgEle}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Avatars;
