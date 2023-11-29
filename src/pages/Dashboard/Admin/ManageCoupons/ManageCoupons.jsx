import { Link } from "react-router-dom";
import BtnBrand from "../../../../components/Shared/Button/BtnBrand";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import CouponRow from "../../TableRows/CouponRow";
import { Helmet } from "react-helmet-async";
import useCoupon from "../../../../hooks/useCoupon";

const ManageCoupons = () => {
  const [coupon, refetch] = useCoupon();

  return (
    <div className="mx-10">
      <Helmet>
        <title>Manage Coupon | Dashboard</title>
      </Helmet>
      <SectionTitle title="Manage Coupons" />
      <div className="border bg-blue-500 mb-4 mt-12 w-3/4 lg:w-3/5 mx-auto"></div>
      <div className="flex justify-evenly items-center">
        <p className="md:text-3xl font-playfair font-semibold">
          Add New Coupon{" "}
        </p>
        <Link to="/dashboard/addCoupons">
          <BtnBrand text="Add Coupon" />
        </Link>
      </div>
      <div className="border bg-blue-500 mt-4 mb-12 w-3/4 lg:w-3/5 mx-auto"></div>
      <h3 className="text-2xl mx-12 my-4 font-medium">
        Total Coupon: {coupon?.length}
      </h3>
      <div className="overflow-x-auto lg:mx-12">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Coupon Code</th>
              <th> Expiry Date</th>
              <th>View</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {coupon?.map((item, idx) => (
              <CouponRow
                key={item._id}
                item={item}
                idx={idx}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCoupons;
