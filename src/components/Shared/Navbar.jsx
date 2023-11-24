import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div className=" gap-2 flex flex-col lg:flex-row ">
      <ul className="py-1 relative group">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text-white font-normal text-base bg-[#0f829f] rounded-full   py-1 px-3     "
              : " font-normal text-base  py-2 px-4  "
          }
        >
          Home
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
        </NavLink>
      </ul>

      <ul className="py-1 relative group">
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive
              ? " text-white font-normal text-base bg-[#0f829f] rounded-full   py-2 px-4     "
              : " font-normal text-base  py-2 px-4  "
          }
        >
          Product
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
        </NavLink>
      </ul>
      <ul className="py-1 relative group">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " text-white font-normal text-base bg-[#0f829f] rounded-full   py-2 px-4     "
              : " font-normal text-base  py-2 px-4  "
          }
        >
          Contact
          <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
          <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#0f829f] group-hover:w-1/3 group-hover:transition-all"></span>
        </NavLink>
      </ul>
    </div>
  );

  //   const navLinks = (
  //     <>
  //       <li>
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/">Products</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to="/">Contact</NavLink>
  //       </li>
  //     </>
  //   );
  return (
    <div className="navbar fixed z-20 max-w-screen-xl text-white bg-[#15151580]">
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
        <Link
          className="btn btn-ghost text-xl md:text-3xl font-playfair"
          to="/"
        >
          Gadget
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Vista
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn border-none text-lg hover:text-[#E1BE64] bg-[#E1BE64] text-[#F1EAEA]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
