import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment/moment";
const ProductReviewRow = ({ product, idx, handleAccept, handleReject }) => {
  const { _id, product_name, status } = product;
  const utime = moment().format("YYYY-MM-DD h:mm:ss a");
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
        <button className="btn btn-warning mb-3">Make Featured</button> <br />
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
