import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const navLinks = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <Navlinks path="/" route="Home" />
      <Navlinks path="/product" route="Product" />
      <Navlinks path="/contact" route="Contact" />
    </div>
  );

  return (
    <div className="navbar bg-base-100">
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
          <p className="uppercase font-bold text-[#0A0826] text-xl md:text-3xl font-playfair">
            Tech
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E76F51] to-violet-500">
              Wave
            </span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn border-none text-lg hover:text-[#E76F51] bg-[#E76F51] text-[#F1EAEA]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
