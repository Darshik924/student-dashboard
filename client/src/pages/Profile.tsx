import React from "react";
import { useAuth } from "../components/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const path = user?.avatar;
  let charName, progress;
  if (path) {
    const fileName = path.split("/").pop();
    const namePart = fileName?.split("_")[1];
    charName = namePart?.split(".")[0];
  }
  if (user) {
    progress = (user.xp / user.maxXp) * 100;
  }

  return (
    <main className="pt-16 min-h-screen bg-linear-to-r from-amber-200/80 to-indigo-500/80 flex justify-center items-center ">
      <div className="profile-contai h-160 w-275 border-5 rounded-3xl bg-linear-to-r from-purple-700/80 to-indigo-700/80 border-white p-12 backdrop-blur-lg shadow-[0_0_40px_rgba(168,85,247,0.6)]">
        <div className="text-center font-bold font-sans text-white mb-10 p-4 text-4xl border-4 border-amber-300 bg-purple-950 w-fit rounded-3xl mx-auto hover:scale-105 transition duration-300 hover:text-amber-300">
          MY PROFILE
        </div>

        <div className="flex gap-35">
          <div className="img-contain flex flex-col gap-3 items-center">
            <img
              src={user?.avatar}
              className="h-72 w-72 rounded-full border-4 border-amber-300 shadow-[0_0_10px_#ec4899,0_0_20px_#ec4899,0_0_40px_#9333ea] hover:scale-105 transition duration-300"
              alt="userAvatar"
            />
            <span className="text-4xl font-sans font-bold p-4 text-white border-3 border-amber-200 bg-indigo-800 rounded-2xl w-fit hover:scale-105 transition duration-300">
              {charName}
            </span>
          </div>

          <div className="info-contain mt-1 flex flex-col gap-8">
            <div className="user-name text-3xl font-bold text-purple-950 p-5 border-4 border-amber-400 bg-white rounded-2xl hover:scale-105 transition duration-300 hover:text-teal-700 cursor-pointer">
              {user?.name}
            </div>

            <div className="level-box flex flex-col gap-8 p-5 bg-white rounded-2xl border-4 border-amber-400 shadow-lg w-120 hover:scale-105 transition duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-purple-900 hover:text-teal-700">
                  Level {user?.level} Developer
                </span>

                <span className="text-2xl font-bold text-indigo-700 hover:text-teal-700">
                  XP: {user?.xp} / {user?.maxXp}
                </span>
              </div>

              <div className="w-full h-6 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-pink-500 to-purple-600 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="stats-cards grid grid-cols-2 gap-6">
              <div className="tasks-done flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-4 border-amber-400 shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
                <span className="text-2xl font-bold text-purple-900">
                  ✅ Tasks Done
                </span>

                <span className="text-4xl font-bold text-indigo-700 mt-2">
                  {42}
                </span>
              </div>

              <div className="curr-streak flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-4 border-amber-400 shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
                <span className="text-2xl font-bold text-purple-900">
                  🔥 Current Streak
                </span>

                <span className="text-4xl font-bold text-indigo-700 mt-2">
                  {user?.streak} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;

/* Navbar
------------------------------------------------

[ Avatar + User Info ]

------------------------------------------------

[ Stats Cards ]

------------------------------------------------

[ Achievements ]

------------------------------------------------

[ Recent Activity ]

------------------------------------------------

[ Task Progress ] */

/*  ------------------------------------------------
| Avatar   |  Darshik Ladhe                     |
| (big)    |  Level 5 Developer                 |
|          |  XP: 450 / 1000                    |
|          |  [Progress Bar]                    |
 ------------------------------------------------
  ---------------------------------
| Tasks Done | Current Streak    |
|    42      |        7 days     |
 ---------------------------------
| Achievements | Rank            |
|      5       |  Gold Explorer  |
 ---------------------------------
 Achievements

🏆 First Task Completed
🔥 7 Day Streak
⚡ Productivity Master
👑 Top Performer

Your Avatar

[ Current Avatar ]

Change Avatar
--------------------------------
🙂 😎 🤖 🧑‍🚀 🐱

Task Progress

Completed Tasks: 12
Pending Tasks: 4

[██████████░░░░] 70%

You could add:

  glowing avatar border

  animated XP progress bar

  hover animation on badges

  glassmorphism cards

  gradient borders*/

/* bg-gradient-to-r
from-purple-700
to-pink-600
shadow-xl
rounded-2xl */
