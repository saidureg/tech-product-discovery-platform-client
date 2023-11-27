import { BiSolidDownvote } from "react-icons/bi";
import PropTypes from "prop-types";

const DownVote = ({ dVote_count }) => {
  const handleDownVote = () => {
    console.log("downvote");
  };
  return (
    <div className="flex items-center gap-1 border px-2 py-1 rounded-xl hover:bg-base-100">
      <button onClick={handleDownVote} className="text-xl">
        <BiSolidDownvote className="text-red-600" />
      </button>
      <h2> {dVote_count}</h2>
    </div>
  );
};
DownVote.propTypes = {
  dVote_count: PropTypes.number,
};

export default DownVote;
