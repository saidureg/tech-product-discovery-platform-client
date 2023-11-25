import MenuItem from "../MenuItem";
import { FcSettings } from "react-icons/fc";
import { FaRegAddressBook, FaList } from "react-icons/fa";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        icon={FcSettings}
        label="Profile"
        address="/dashboard/userProfile"
      />

      <MenuItem
        icon={FaRegAddressBook}
        label="Add Product"
        address="/dashboard/addProduct"
      />

      <MenuItem
        icon={FaList}
        label="My Products"
        address="/dashboard/myProduct"
      />
    </>
  );
};

export default UserMenu;
