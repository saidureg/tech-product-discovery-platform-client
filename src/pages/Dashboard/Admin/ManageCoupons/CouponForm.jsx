import { Helmet } from "react-helmet-async";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";

const CouponForm = () => {
  const axiosSecure = useAxiosSecure();
  const minDate = moment().format("YYYY-MM-DD");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { coupon_code, discount_amount, expiry_date, description } = data;
    const couponInfo = {
      coupon_code,
      discount_amount,
      expiry_date,
      description,
    };
    console.log(couponInfo);
    const res = await axiosSecure.post("/coupon", couponInfo);
    if (res.data.insertedId) {
      reset();
      toast.success(`${coupon_code} is added to the DB!`);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | AddProduct</title>
      </Helmet>
      <SectionTitle title="Add New Coupon" />
      <form className="w-1/2 mx-auto my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6 my-6">
          {/*  Coupon Code */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Coupon Code*</span>
            </label>
            <input
              type="text"
              placeholder="Coupon Code"
              {...register("coupon_code", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.coupon_code && (
              <span className="text-red-600">Coupon Code is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-6 my-6">
          {/* Discount Amount */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Discount Amount*</span>
            </label>
            <input
              type="number"
              placeholder="Discount Amount"
              {...register("discount_amount", { required: true })}
              className="input input-bordered w-full "
            />
            {errors.discount_amount && (
              <span className="text-red-600">Discount Amount is required</span>
            )}
          </div>
        </div>
        <div className="flex gap-6 my-6">
          {/* Expiry Date */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Expiry Date*</span>
            </label>
            <input
              type="date"
              min={minDate}
              placeholder="Expiry Date"
              {...register("expiry_date", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.expiry_date && (
              <span className="text-red-600">Expiry Date is required</span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Coupon Code Description*</span>
          </label>
          <textarea
            {...register("description", {
              required: true,
              minLength: 20,
              maxLength: 200,
            })}
            className="textarea textarea-bordered h-24"
            placeholder="Coupon Code Description"
          ></textarea>
          {errors.description?.type === "required" && (
            <p className="text-red-600">Description is required</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-red-600">Description must be 20 characters</p>
          )}
          {errors.description?.type === "maxLength" && (
            <p className="text-red-600">
              Description must be less than 200 characters
            </p>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#E76F51] text-white text-lg">
            Add <BsDatabaseFillAdd />
          </button>
          <button className="btn bg-gradient-to-r from-pink-500 to-[#E76F51] text-white text-lg ml-7">
            View <CiViewList />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
