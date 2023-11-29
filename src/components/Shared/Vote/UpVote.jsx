import { BiSolidUpvote } from "react-icons/bi";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpVote = ({ uVote_count, id }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpVote = async () => {
    const upVoteInfo = {
      product_id: id,
      user_email: user?.email,
    };
    if (user) {
      try {
        const res = await axiosSecure.post("/product/upVote", upVoteInfo);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thanks for your support!",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "You already voted this product!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to vote. Please try again later.",
        });
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex items-center gap-1 border px-2 py-1 rounded-xl hover:bg-base-100">
      <button onClick={handleUpVote} className="text-xl">
        <BiSolidUpvote className="text-blue-500" />
      </button>
      <h2> {uVote_count}</h2>
    </div>
  );
};

UpVote.propTypes = {
  uVote_count: PropTypes.number,
  id: PropTypes.string,
};

export default UpVote;
