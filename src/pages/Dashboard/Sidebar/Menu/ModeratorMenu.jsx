import MenuItem from "../MenuItem";
import { MdReport, MdReviews } from "react-icons/md";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdReviews}
        label="Product Review"
        address="productReview"
      />
      <MenuItem icon={MdReport} label="Reported" address="reported" />
    </>
  );
};

export default ModeratorMenu;
