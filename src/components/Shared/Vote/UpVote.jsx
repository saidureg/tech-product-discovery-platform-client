import { BiSolidUpvote, BiUpvote } from "react-icons/bi";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useProduct from "../../../hooks/useProduct";
import { useState } from "react";
import useUpVote from "../../../hooks/useUpVote";

const UpVote = ({ uVote_count, refetch, id }) => {
  const axiosSecure = useAxiosSecure();
  const [products] = useProduct();
  const [upVotes, setRF] = useUpVote();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [findUser, setFindUser] = useState(true);
  const [findUpVotes, setFindUpVotes] = useState();
  useEffect(() => {
    const filterProduct = products?.filter((product) => product._id === id);
    if (filterProduct[0]?.OwnerEmail === user?.email) {
      setFindUser(false);
    }
    const findUpVotes = upVotes?.find((item) => item.product_id === id);
    setFindUpVotes(findUpVotes);
  }, [products, id, user, upVotes]);

  const handleUpVote = async () => {
    const upVoteInfo = {
      product_id: id,
      user_email: user?.email,
    };
    if (user) {
      try {
        const res = await axiosSecure.post("/product/upVote", upVoteInfo);
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Thanks for your support!",
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
        findUpVotes ? (
          <button onClick={handleUpVote} className="text-xl">
            <BiSolidUpvote className="text-green-600" />
          </button>
        ) : (
          <button onClick={handleUpVote} className="text-xl">
            <BiUpvote className="text-green-600" />
          </button>
        )
      ) : (
        <button disabled className="text-xl">
          <BiUpvote className="text-red-600 cursor-not-allowed" />
        </button>
      )}
      <h2> {uVote_count}</h2>
    </div>
  );
};

UpVote.propTypes = {
  uVote_count: PropTypes.number,
  refetch: PropTypes.func,
  id: PropTypes.string,
};

export default UpVote;
