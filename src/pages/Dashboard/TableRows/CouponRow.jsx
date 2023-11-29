import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TbEyeDiscount } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CouponRow = ({ item, idx, refetch }) => {
  const { _id, coupon_code, expiry_date } = item;
  const axiosSecure = useAxiosSecure();

  const handleDeleteItems = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/coupon/${id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Coupon has been deleted.",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{coupon_code}</td>
      <td>{expiry_date}</td>
      <td>
        <Link to={`/dashboard/viewCoupon/${_id}`}>
          <button className="btn bg-[#916a2f] text-white btn-xl">
            <TbEyeDiscount className="text-2xl" />
          </button>
        </Link>
      </td>
      <td>
        <Link to={`/dashboard/updatedCoupon/${_id}`}>
          <button className="btn bg-[#D1A054] text-white btn-xl">
            <FaEdit className="text-xl" />
          </button>
        </Link>
        <br />
        <button
          onClick={() => handleDeleteItems(_id)}
          className="btn bg-[#B91C1C] text-white btn-xl"
        >
          <FaTrash className="text-lg" />
        </button>
      </td>
    </tr>
  );
};
CouponRow.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
  refetch: PropTypes.func,
};

export default CouponRow;
