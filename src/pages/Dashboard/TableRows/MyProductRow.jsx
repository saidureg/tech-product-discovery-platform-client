import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyProductRow = ({ product, idx, handleDeleteItems }) => {
  const { _id, product_name, photoURL, status } = product;

  const axiosPublic = useAxiosPublic();

  const { data: upVote = [] } = useQuery({
    queryKey: ["upVote", _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/upVote/${_id}`);
      return res.data;
    },
  });

  const { data: downVote = [] } = useQuery({
    queryKey: ["downVote", _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/downVote/${_id}`);
      return res.data;
    },
  });

  return (
    <tr>
      <th>{idx + 1} </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt={product_name} />
            </div>
          </div>
        </div>
      </td>
      <td>{product_name}</td>
      <td>
        UpVote: {upVote?.length} <br />
        DownVote: {downVote?.length}
      </td>
      <td>{status}</td>
      <td>
        <Link to={`/dashboard/updatedProduct/${_id}`}>
          <button className="btn bg-[#D1A054] text-white btn-xl">
            <FaEdit className="text-xl" />
          </button>
        </Link>
      </td>
      <td>
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

MyProductRow.propTypes = {
  product: PropTypes.object,
  idx: PropTypes.number,
  handleDeleteItems: PropTypes.func,
};

export default MyProductRow;
