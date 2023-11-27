import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const ReportForm = () => {
  const { user } = useAuth();
  const product = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { _id, product_name, photoURL } = product;
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const description = form.description.value;
    const report = {
      name: user?.displayName,
      email: user?.email,
      product_id: _id,
      product_name,
      product_image: photoURL,
      description,
      category,
    };

    axiosPublic.post("/reports", report).then((res) => {
      if (res.data.insertedId) {
        e.target.reset();
        swal(
          "Report successfully send!",
          "Thank you for your Feedback!",
          "success"
        );
      }
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto md:my-12">
      <p className="text-center text-xl text-gray-700 my-5">
        Product Feedback and Issue Reporting
      </p>
      <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8 mx-3 lg:mx-0">
        <div className="w-full lg:w-1/2 md:py-10">
          <img className="w-full h-full" src={photoURL} alt={product_name} />
          <h3 className="text-center mt-4 text-gray-400">{product_name}</h3>
        </div>

        <div className=" w-full lg:w-1/2 md:mt-10">
          <form onSubmit={handleReview} className="card-body">
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
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                defaultValue={product_name}
                disabled
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type of Report*</span>
              </label>
              <select
                defaultValue="default"
                name="category"
                required
                className="select select-accent w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="defect">Defect</option>
                <option value="user-experience-issue">
                  User Experience Issue
                </option>
                <option value="feature-request">Feature Request</option>
                <option value="performance-issue">Performance Issue</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description*</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                required
                className="input input-bordered"
                id=""
                cols="30"
                rows="30"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Feedback</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
