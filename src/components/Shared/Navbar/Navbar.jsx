import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import useAuth from "../../../hooks/useAuth";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import swal from "sweetalert";
import Logo from "../Logo";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navLinks = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <Navlinks path="/" route="Home" />
      <Navlinks path="/product" route="Product" />
      <Navlinks path="/contact" route="Contact" />
    </div>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return swal(
          "Thanks for visiting the site",
          "Log-out successful",
          "warning"
        );
      })
      .catch(() => {
        return swal("Oops!", "Something went wrong", "error");
      });
  };

  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost -ml-5 lg:ml-0" to="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end md:mr-5">
              <div className="flex items-center gap-1">
                <label tabIndex={0} className="avatar rounded-full">
                  <div className="w-[50px] ">
                    <img
                      className="w-full rounded-full bg-white"
                      src={user?.photoURL}
                    />
                  </div>
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-1 divide-y-2 space-y-4 md:p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-48 md:w-52 lg:w-56"
              >
                <li>
                  <a className="gap-3 text-sm md:text-base lg:text-lg">
                    <CgProfile /> {user?.displayName}
                  </a>
                </li>
                <li>
                  <Link
                    className="gap-3 text-base md:text-lg lg:text-xl"
                    to="/dashboard/userProfile"
                  >
                    <AiOutlineHome /> Dashboard
                  </Link>
                </li>
                <div className=" px-3 pt-2 text-base md:text-lg lg:text-xl">
                  <button
                    onClick={handleLogOut}
                    className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]"
                  >
                    <TbLogout className="text-xl" /> Log Out
                  </button>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn border-none text-lg hover:text-[#E76F51] bg-[#E76F51] text-[#F1EAEA]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
