import PropTypes from "prop-types";
import Tags from "./Tags";
import TimeAgo from "timeago-react";
import UpVote from "../../components/Shared/Vote/UpVote";
import DownVote from "../../components/Shared/Vote/DownVote";

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
          <UpVote uVote_count={uVote_count} />
          <DownVote dVote_count={dVote_count} />
        </div>
        <div className="card-actions">
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
