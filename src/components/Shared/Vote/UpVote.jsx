import { BiSolidUpvote } from "react-icons/bi";
import PropTypes from "prop-types";

const UpVote = ({ uVote_count }) => {
  const handleUpVote = () => {
    console.log("upvote");
  };
  return (
    <div className="flex items-center gap-1 border px-2 py-1 rounded-xl hover:bg-base-100">
      <button onClick={handleUpVote} className="text-xl">
        <BiSolidUpvote className="text-blue-500" />
      </button>
      <h2> {uVote_count}</h2>
    </div>
  );
};

UpVote.propTypes = {
  uVote_count: PropTypes.number,
};

export default UpVote;
