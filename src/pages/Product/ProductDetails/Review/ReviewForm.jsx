import swal from "sweetalert";
import moment from "moment";
import { useLoaderData } from "react-router-dom";

import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const ReviewForm = () => {
  const { user } = useAuth();
  const product = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { _id, product_name, photoURL } = product;
  const time = moment().format("YYYY-MM-DD");
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const text = form.text.value;
    const review = {
      rating,
      text,
      name: user?.displayName,
      email: user?.email,
      product_id: _id,
      time,
    };

    axiosPublic.post("/reviews", review).then((res) => {
      e.target.reset();
      if (res.data.insertedId) {
        swal("Review successfully!", "Thank you for your comment!", "success");
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <p className="text-center text-xl text-gray-700 my-5">
        Shared you review for this product
      </p>
      <div className="flex gap-8">
        <div className="w-full lg:w-1/2 py-10">
          <img className="w-full h-full" src={photoURL} alt={product_name} />
          <h3 className="text-center mt-4 text-gray-400">{product_name}</h3>
        </div>

        <form
          onSubmit={handleReview}
          className="card-body w-full lg:w-1/2 mt-10"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              defaultValue={user?.photoURL}
              disabled
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating*</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              min={0}
              max={5}
              step={0.1}
              name="rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <textarea
              name="text"
              placeholder="Description"
              required
              className="input input-bordered"
              id=""
              cols="30"
              rows="30"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
