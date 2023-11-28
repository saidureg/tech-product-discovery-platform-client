import Swal from "sweetalert2";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useProduct from "../../../../hooks/useProduct";
import ProductReviewRow from "../../TableRows/ProductReviewRow";

const ProductReview = () => {
  const [products, , refetch] = useProduct();
  const axiosSecure = useAxiosSecure();

  const handleAccept = async (_id) => {
    const findProduct = products.find((product) => product._id === _id);
    const { product_name, photoURL, description, externalLink, tags, time } =
      findProduct;
    const UpdatedProduct = {
      product_name,
      photoURL,
      description,
      externalLink,
      tags,
      time,
      status: "accepted",
    };
    const res = await axiosSecure.patch(`/products/${_id}`, UpdatedProduct);
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `${product_name} status is updated!`,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handleReject = async (_id) => {
    const findProduct = products.find((product) => product._id === _id);
    const { product_name, photoURL, description, externalLink, tags, time } =
      findProduct;
    const UpdatedProduct = {
      product_name,
      photoURL,
      description,
      externalLink,
      tags,
      time,
      status: "rejected",
    };
    const res = await axiosSecure.patch(`/products/${_id}`, UpdatedProduct);
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `${product_name} status is updated!`,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <SectionTitle title="Product Review" />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Accept/Reject</th>
              <th>Details/Featured</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <ProductReviewRow
                key={product._id}
                idx={idx}
                product={product}
                handleAccept={handleAccept}
                handleReject={handleReject}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReview;
