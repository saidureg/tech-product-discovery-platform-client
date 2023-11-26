import PropTypes from "prop-types";
import Tags from "./Tags";
import TimeAgo from "timeago-react";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
const ProductCard = ({ product }) => {
  const {
    OwnerName,
    product_name,
    photoURL,
    tags,
    uVote_count,
    dVote_count,
    time,
  } = product;

  const handleUpVote = () => {
    console.log("upvote");
  };

  const handleDownVote = () => {
    console.log("downvote");
  };

  return (
    <div className="card card-compact bg-base-100 hover:bg-base-200 shadow-xl">
      <figure>
        <img className="w-full h-[200px]" src={photoURL} alt={product_name} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-baseline">
          {tags?.slice(0, 3).map((data, idx) => (
            <Tags key={idx} idx={idx} tag={data} />
          ))}
        </div>
        <h2 className="flex-1 card-title">{product_name}</h2>
        <div className="flex items-center gap-2 text-lg">
          <div className="flex items-center gap-1 border px-2 py-1 rounded-xl hover:bg-base-100">
            <button onClick={handleUpVote} className="text-xl">
              <BiSolidUpvote className="text-blue-500" />
            </button>
            <h2> {uVote_count}</h2>
          </div>

          <div className="flex items-center gap-1 border px-2 py-1 rounded-xl hover:bg-base-100">
            <button onClick={handleDownVote} className="text-xl">
              <BiSolidDownvote className="text-red-600" />
            </button>
            <h2> {dVote_count}</h2>
          </div>
        </div>
        <div className="card-actions justify-end">
          <p className="text-[#d8d8d8] font-medium">
            <TimeAgo datetime={time} /> by <span>{OwnerName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
