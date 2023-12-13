import { BiDownvote, BiSolidDownvote } from "react-icons/bi";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useProduct from "../../../hooks/useProduct";
import useDownVote from "../../../hooks/useDownVote";

const DownVote = ({ dVote_count, refetch, id }) => {
  const axiosSecure = useAxiosSecure();
  const [products] = useProduct();
  const { user } = useAuth();
  const [downVote, setRF] = useDownVote();
  const navigate = useNavigate();

  const [findUser, setFindUser] = useState(true);
  const [findDownVotes, setFindDownVotes] = useState();
  useEffect(() => {
    const filterProduct = products?.filter((product) => product._id === id);
    if (filterProduct[0]?.OwnerEmail === user?.email) {
      setFindUser(false);
    }
    const findDownVotes = downVote?.find((item) => item.product_id === id);
    setFindDownVotes(findDownVotes);
  }, [products, id, user, downVote]);

  const handleDownVote = async () => {
    const downVoteInfo = {
      product_id: id,
      user_email: user?.email,
    };
    if (user) {
      try {
        const res = await axiosSecure.post("/product/downVote", downVoteInfo);
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "If your any suggest please provide!",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          setRF(new Date().getTime());
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
      {findUser ? (
        findDownVotes ? (
          <button onClick={handleDownVote} className="text-xl">
            <BiSolidDownvote className="text-red-600" />
          </button>
        ) : (
          <button onClick={handleDownVote} className="text-xl">
            <BiDownvote className="text-green-600" />
          </button>
        )
      ) : (
        <button disabled className="text-xl">
          <BiDownvote className="text-red-600 cursor-not-allowed" />
        </button>
      )}

      <h2> {dVote_count}</h2>
    </div>
  );
};
DownVote.propTypes = {
  dVote_count: PropTypes.number,
  refetch: PropTypes.func,
  id: PropTypes.string,
};

export default DownVote;
