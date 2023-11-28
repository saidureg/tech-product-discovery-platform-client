import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ProductReviewRow = ({ product, idx, handleAccept, handleReject }) => {
  const { _id, product_name, status } = product;
  const axiosSecure = useAxiosSecure();
  const Features_time = moment().format("YYYY-MM-DD h:mm:ss a");

  const handleFeatured = async () => {
    const {
      OwnerName,
      OwnerEmail,
      product_name,
      photoURL,
      description,
      externalLink,
      tags,
      status,
      uVote_count,
      dVote_count,
      time,
    } = product;
    const productInfo = {
      OwnerName,
      OwnerEmail,
      product_name,
      photoURL,
      description,
      externalLink,
      tags,
      status,
      uVote_count,
      dVote_count,
      time,
      Features_time,
    };
    const res = await axiosSecure.post("/products/features", productInfo);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `${product_name} added is featured product!`,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <tr>
      <th>{idx + 1} </th>
      <td>{product_name}</td>
      <td>{status}</td>
      <td>
        {status === "accepted" || status === "rejected" ? (
          <>
            <button disabled className="btn btn-success mb-3">
              Accept
            </button>
            <br />
            <button disabled className="btn btn-danger">
              Reject
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => handleAccept(_id)}
              className="btn btn-success mb-3"
            >
              Accept
            </button>
            <br />
            <button onClick={() => handleReject(_id)} className="btn btn-error">
              Reject
            </button>
          </>
        )}
      </td>
      <td>
        <button onClick={handleFeatured} className="btn btn-warning mb-3">
          Make Featured
        </button>{" "}
        <br />
        <Link to={`/productDetails/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};
ProductReviewRow.propTypes = {
  product: PropTypes.object,
  idx: PropTypes.number,
  handleAccept: PropTypes.func,
  handleReject: PropTypes.func,
};

export default ProductReviewRow;
