import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/Shared/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoupon = () => {
  const axiosSecure = useAxiosSecure();
  const minDate = moment().format("YYYY-MM-DD");
  const { _id, coupon_code, discount_amount, expiry_date, description } =
    useLoaderData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { coupon_code, discount_amount, expiry_date, description } = data;
    const UpdatedCoupon = {
      coupon_code,
      discount_amount,
      expiry_date,
      description,
    };
    const res = await axiosSecure.patch(`/coupon/${_id}`, UpdatedCoupon);
    console.log(_id);
    console.log(res.data);
    if (res.data.modifiedCount) {
      reset();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `${coupon_code} is updated to the DB!`,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <Helmet>
        <title>Updated Coupon | Dashboard</title>
      </Helmet>
      <SectionTitle title="Updated Coupon" />
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
              defaultValue={coupon_code}
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
              defaultValue={discount_amount}
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
              defaultValue={expiry_date}
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
            defaultValue={description}
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
            Updated Coupon <BsDatabaseFillAdd />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoupon;
