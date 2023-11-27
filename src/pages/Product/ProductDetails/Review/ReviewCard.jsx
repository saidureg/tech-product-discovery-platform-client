import PropTypes from "prop-types";
import moment from "moment/moment";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const { name, text, time, rating } = review;
  const date = moment(time, "YYYYMMDD").fromNow();
  return (
    <div>
      <div className="block rounded-lg bg-neutral text-neutral-content shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
        <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white ">
          <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h4 className="mb-4 text-2xl font-semibold">{name}</h4>
            <div>
              <p className="flex items-center gap-2">
                <FaStar className="text-amber-500" /> {rating}
              </p>
              <p>{date}</p>
            </div>
          </div>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            {text.length > 100 ? text.substring(0, 100) + "..." : text}
          </p>
        </div>
      </div>
    </div>
  );
};
ReviewCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewCard;
