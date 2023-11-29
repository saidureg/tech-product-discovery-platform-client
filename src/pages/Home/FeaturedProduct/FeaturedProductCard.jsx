import PropTypes from "prop-types";
import TimeAgo from "timeago-react";
import { Link } from "react-router-dom";
import Tags from "../../Product/Tags";
import UpVote from "../../../components/Shared/Vote/UpVote";
import DownVote from "../../../components/Shared/Vote/DownVote";

const FeaturedProductCard = ({ product }) => {
  const {
    _id,
    product_name,
    product_id,
    photoURL,
    description,
    tags,
    uVote_count,
    dVote_count,
    Features_time,
  } = product;
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img className="w-full h-[200px]" src={photoURL} alt={product_name} />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6 ">
        <div className="flex gap-2 items-baseline mb-4">
          {tags?.slice(0, 3).map((data, idx) => (
            <Tags key={idx} idx={idx} tag={data} />
          ))}
        </div>

        <div className="flex flex-col">
          <Link to={`/featuresDetails/${_id}`}>
            <h5 className="text-xl antialiased font-medium leading-snug tracking-normal text-gray-900">
              {product_name}
            </h5>
          </Link>

          <p className="md:h-[120px] text-base antialiased font-light leading-relaxed text-gray-700">
            {description.length > 120
              ? description.substring(0, 120) + "..."
              : description}
          </p>
          <div className="flex items-center gap-2 text-lg">
            <UpVote uVote_count={uVote_count} id={product_id} />
            <DownVote dVote_count={dVote_count} />
          </div>

          <p className="text-[#d8d8d8] font-medium my-3">
            <TimeAgo datetime={Features_time} /> make it features
          </p>
        </div>
      </div>
    </div>
  );
};

FeaturedProductCard.propTypes = {
  product: PropTypes.object,
};

export default FeaturedProductCard;
