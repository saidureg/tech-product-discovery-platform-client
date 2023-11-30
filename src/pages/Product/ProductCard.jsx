import PropTypes from "prop-types";
import Tags from "./Tags";
import TimeAgo from "timeago-react";
import UpVote from "../../components/Shared/Vote/UpVote";
import DownVote from "../../components/Shared/Vote/DownVote";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { _id, OwnerName, product_name, photoURL, tags, time } = product;

  const axiosPublic = useAxiosPublic();

  const { data: upVote = [], refetch: upVoteRefetch } = useQuery({
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
    <div className="card card-compact bg-base-100 hover:bg-base-200 shadow-xl">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{
          scale: 0.7,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
        <figure>
          <img
            className="w-full h-[200px] rounded-lg"
            src={photoURL}
            alt={product_name}
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2 items-baseline">
            {tags?.slice(0, 3).map((data, idx) => (
              <Tags key={idx} idx={idx} tag={data} />
            ))}
          </div>
          <Link className="flex-1" to={`/productDetails/${_id}`}>
            <h2 className="card-title">{product_name}</h2>
          </Link>
          <div className="flex items-center gap-2 text-lg">
            <UpVote
              uVote_count={upVote?.length}
              refetch={upVoteRefetch}
              id={_id}
            />
            <DownVote
              dVote_count={downVote?.length}
              refetch={downVoteRefetch}
              id={_id}
            />
          </div>
          <div className="card-actions">
            <p className="text-[#d8d8d8] font-medium">
              <TimeAgo datetime={time} /> by <span>{OwnerName}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
