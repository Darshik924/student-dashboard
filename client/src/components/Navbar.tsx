import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiArchiveRegister } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    logout();
    navigate("/login");
  };

  const navItem: string =
    "text-lg flex gap-2 text-white border-yellow-400 hover:border-red-500 hover:text-red-600 transition-duration-600 font-bold p-2 border-3 rounded-2xl bg-purple-700 hover:cursor-pointer hover:bg-purple-900 ";
  const iconStyles: string = "h-6 w-6 font-bold text-white";

  return (
    <nav className="fixed font-sans shadow-xl t-0 l-0 bg-linear-to-r from-purple-700 to-blue-700 h-16 w-full flex justify-between">
      <div className="left ml-20 flex items-center">
        <ul className="flex justify-between gap-6">
          <li>
            <Link className={navItem} to="/">
              <MdDashboard className={iconStyles} />
              DashBoard
            </Link>
          </li>

          {isLoggedIn && user ? (
            <li>
              <Link to="/profile" className={navItem}>
                <img src={user.avatar} className="h-8 w-8 rounded-full" />
                {user.name}
              </Link>
            </li>
          ) : (
            <li>
              <Link className={navItem} to="/profile">
                <ImProfile className={iconStyles} />
                Profile
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link className={navItem} to="/avatars">
                <CgProfile className={iconStyles} />
                Avatars
              </Link>
            </li>
          )}
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
              <li>
                <Link className={navItem} to="/login">
                  <IoLogInOutline className={iconStyles} />
                  Login
                </Link>
              </li>
              <li>
                <Link className={navItem} to="/register">
                  <GiArchiveRegister className={iconStyles} />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
