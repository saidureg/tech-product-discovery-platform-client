import { Helmet } from "react-helmet-async";
import TagsInput from "./TagsInput/TagsInput";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import moment from "moment/moment";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import swal from "sweetalert";
import SectionTitle from "../../../components/Shared/SectionTitle";

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const OwnerName = user?.displayName;
  const OwnerEmail = user?.email;
  const OwnerImage = user?.photoURL;
  const status = "pending";
  const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const uVote_count = 0;
  const dVote_count = 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [tags, setTags] = useState([]);
  const onSubmit = async (data) => {
    const { product_name, photoURL, externalLink, description } = data;
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
    };
    console.log(productInfo);
    const res = await axiosPublic.post("/products", productInfo);
    if (res.data.insertedId) {
      reset();
      swal(
        "Product successfully send!",
        `${product_name} is added to the DB!`,
        "success"
      );
    }
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | AddProduct</title>
      </Helmet>
      <SectionTitle title="Add Your Product" />

      <div>
        <div className="bg-white mx-10 px-5 py-4 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6 my-6">
              {/*Owner name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Owner name</span>
                </label>
                <input
                  type="text"
                  defaultValue={OwnerName}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              {/* Owner Email */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Owner Email*</span>
                </label>
                <input
                  type="text"
                  defaultValue={OwnerEmail}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            {/* Owner image */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Owner Image*</span>
              </label>
              <input
                type="text"
                defaultValue={OwnerImage}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="flex gap-6 my-6">
              {/* product_name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Product name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Product name"
                  {...register("product_name", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.product_name && (
                  <span className="text-red-600">Product name is required</span>
                )}
              </div>
              {/* image */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Product Image*</span>
                </label>
                <input
                  type="text"
                  placeholder="Product PhotoURL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    Product PhotoURL is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-6 my-6">
              {/* Tags */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Tags</span>
                </label>
                <TagsInput tags={tags} setTags={setTags} />
              </div>
              {/* External Link */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">External Link*</span>
                </label>
                <input
                  type="text"
                  placeholder="External Link"
                  {...register("externalLink", {
                    required: true,
                  })}
                  className="input input-bordered w-full "
                />
                {errors.externalLink && (
                  <span className="text-red-600">
                    External Link is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description*</span>
              </label>
              <textarea
                {...register("description", {
                  required: true,
                  minLength: 20,
                  maxLength: 500,
                })}
                className="textarea textarea-bordered h-24"
                placeholder="Product Description"
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.description?.type === "minLength" && (
                <p className="text-red-600">
                  Description must be 20 characters
                </p>
              )}
              {errors.description?.type === "maxLength" && (
                <p className="text-red-600">
                  Description must be less than 500 characters
                </p>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button className="btn bg-gradient-to-r from-[#835D23] to-[#E76F51] text-white text-lg">
                Submit <BsDatabaseFillAdd />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
