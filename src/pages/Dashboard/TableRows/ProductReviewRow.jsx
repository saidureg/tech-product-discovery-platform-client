import PropTypes from "prop-types";
const ProductReviewRow = ({ product, idx }) => {
  const { product_name, status } = product;
  return (
    <tr>
      <th>{idx + 1} </th>
      <td>{product_name}</td>
      <td>{status}</td>
      <td>
        <button className="btn btn-success">Accept</button> <br />
        <button className="btn btn-danger">Reject</button>
      </td>
      <td>
        <button className="btn btn-warning">Make Featured</button> <br />
        <button className="btn btn-info">Details</button>
      </td>
    </tr>
  );
};
ProductReviewRow.propTypes = {
  product: PropTypes.object,
  idx: PropTypes.number,
};

export default ProductReviewRow;
