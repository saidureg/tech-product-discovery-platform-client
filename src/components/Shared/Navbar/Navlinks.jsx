import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navlinks = ({ path, route }) => {
  return (
    <ul className="py-1 relative group">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? " text-white font-normal text-base bg-[#0f829f] rounded-full py-2 px-4"
            : " font-normal text-base py-2 px-4"
        }
      >
        {route}
        <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-[#E76F51] lg:group-hover:w-1/3 group-hover:transition-all"></span>
        <span className="absolute -bottom-0 right-1/2 w-0 h-0.5 bg-[#E76F51] lg:group-hover:w-1/3 group-hover:transition-all"></span>
      </NavLink>
    </ul>
  );
};

Navlinks.propTypes = {
  path: PropTypes.string,
  route: PropTypes.string,
};

export default Navlinks;
