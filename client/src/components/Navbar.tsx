import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navItem: string =
    "text-lg flex gap-2 text-white border-yellow-400 hover:border-red-500 hover:text-red-600 transition-duration-600 font-bold p-2 border-3 rounded-2xl bg-purple-700 hover:cursor-pointer hover:bg-purple-900 h-full";
  const iconStyles: string = "h-6 w-6 font-bold text-white";

  return (
    <nav className="fixed font-sans shadow-xl t-0 l-0 bg-linear-to-r from-purple-700 to-blue-700 h-16 w-full flex justify-between">
      <div className="left ml-20 flex items-center">
        <ul className="flex justify-between gap-6">
          <Link to="/">
            <li className={navItem}>
              <IoHome className={iconStyles} />
              Home
            </li>
          </Link>
          <li className={navItem}>
            <ImProfile className={iconStyles} />
            Profile
          </li>
          <Link to="/avatars">
            <li className={navItem}>
              <CgProfile className={iconStyles} />
              Avatars
            </li>
          </Link>
        </ul>
      </div>
      <div className="right mr-20 flex flex-col justify-center">
        <ul className="flex justify-between gap-6">
          {isLoggedIn ? (
            <li onClick={handleLogout} className={navItem}>
              <IoLogOutOutline className={iconStyles} />
              Logout
            </li>
          ) : (
            <>
              <Link to="/login">
                <li className={navItem}>
                  <IoLogInOutline className={iconStyles} />
                  Login
                </li>
              </Link>
              <Link to="/register">
                <li className={navItem}>
                  <GiArchiveRegister className={iconStyles} />
                  Register
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
