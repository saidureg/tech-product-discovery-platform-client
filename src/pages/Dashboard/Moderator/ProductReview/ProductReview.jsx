import SectionTitle from "../../../../components/Shared/SectionTitle";
import useProduct from "../../../../hooks/useProduct";
import ProductReviewRow from "../../TableRows/ProductReviewRow";

const ProductReview = () => {
  const [products, , refetch] = useProduct();
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
              <ProductReviewRow key={product._id} idx={idx} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductReview;
