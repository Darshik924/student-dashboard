import { IoHome } from "react-icons/io5";

const Navbar = () => {
  const navItem: string =
    "text-lg flex gap-2 text-white border-yellow-400 hover:border-pink-400 transition-duration-300 font-bold p-2 border-4 rounded-2xl bg-purple-900 hover:cursor-pointer hover:bg-purple-800";

  return (
    <nav className="fixed font-sans shadow-md  t-0 l-0 bg-purple-700 h-18 w-full flex justify-between">
      <div className="left ml-20 flex items-center">
        <ul className="flex justify-between gap-8.5">
          <li className={navItem}>
            <IoHome className="h-6 w-6 font-bold text-white "></IoHome> Home
          </li>
          <li className={navItem}>Profile</li>
          <li className={navItem}>Avatars</li>
        </ul>
      </div>
      <div className="right mr-20 flex flex-col justify-center">
        <ul className="flex justify-between gap-8.5">
          <li className={navItem}>Login</li>
          <li className={navItem}>Sign Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
