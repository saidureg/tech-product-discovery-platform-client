import { FaUserCog } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="statistics" />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manageUsers" />
    </>
  );
};

export default AdminMenu;
