import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import UpVote from "../../../components/Shared/Vote/UpVote";
import DownVote from "../../../components/Shared/Vote/DownVote";
import { FaFlag, FaCircleInfo } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import Tags from "../Tags";
import ReviewForProduct from "./Review/ReviewForProduct";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const product = useLoaderData();

  const { _id, product_name, photoURL, tags, description, externalLink } =
    product;

  const axiosPublic = useAxiosPublic();

  const { data: upVote = [], refetch } = useQuery({
    queryKey: ["upVote", _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/upVote/${_id}`);
      return res.data;
    },
  });

  const { data: downVote = [], refetch: downVoteRefetch } = useQuery({
    queryKey: ["downVote", _id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/product/downVote/${_id}`);
      return res.data;
    },
  });

  return (
    <div className="my-12">
      <Helmet>
        <title>ProductDetails: {_id}</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        <div className="col-span-4 h-[300px] lg:h-[450px] shadow-xl rounded-lg">
          <img
            className="w-full h-5/6 rounded-lg"
            src={photoURL}
            alt={product_name}
          />
          <div className=" flex items-center justify-between my-5 mx-4">
            <div className="flex items-center gap-2">
              <UpVote uVote_count={upVote?.length} refetch={refetch} id={_id} />
              <DownVote
                dVote_count={downVote?.length}
                refetch={downVoteRefetch}
                id={_id}
              />
            </div>
            <div className="flex items-center gap-5">
              <Link to={`/report/${_id}`}>
                <p className="flex items-center gap-3 border px-2 py-1 rounded-md cursor-pointer">
                  <FaFlag /> Report this
                </p>
              </Link>
              <a
                className="text-blue-500 underline border px-2 py-1 rounded-md flex items-center gap-2"
                href={externalLink}
              >
                <FaCircleInfo /> Visit this
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-4">
          <h3 className="text-2xl md:text-3xl lg:text-5xl text-[#151515] font-playfair font-semibold">
            {product_name}
          </h3>
          <div className="flex gap-2 items-baseline my-5">
            {tags?.slice(0, 3).map((data, idx) => (
              <Tags key={idx} idx={idx} tag={data} />
            ))}
          </div>
          <p className="my-5 text-base antialiased font-light leading-relaxed text-gray-400">
            {description?.length > 950
              ? description.substring(0, 950) + "..." + " Read More"
              : description}
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-playfair text-4xl text-center my-10">
          What people are saying
        </h3>
        <div className="w-1/2 mx-auto">
          <ReviewForProduct id={_id} />
        </div>
        <div className="flex justify-center">
          <Link to={`/review/${_id}`}>
            <button className="btn bg-[#deaa86] text-white text-lg hover:text-[#ff881e]">
              Leave a Review <MdReviews />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
