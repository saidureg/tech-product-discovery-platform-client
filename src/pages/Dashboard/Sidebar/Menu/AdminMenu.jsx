import { FaUserCog } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manageUsers" />
      <MenuItem
        icon={BiSolidOffer}
        label="Manage Coupons"
        address="manageCoupons"
      />
    </>
  );
};

export default AdminMenu;
