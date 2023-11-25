import { FaUserCog } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
    </>
  );
};

export default AdminMenu;
