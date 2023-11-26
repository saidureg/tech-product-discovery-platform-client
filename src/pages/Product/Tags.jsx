import PropTypes from "prop-types";

const Tags = ({ tag, idx }) => {
  const getBackgroundColor = () => {
    const COLORS = [
      "bg-[#79C23F33] text-[#79C23F]",
      "bg-[#0052FF33] text-[#0052FF]",
      "bg-[#E76F5133] text-[#E76F51]",
    ];
    return COLORS[idx % COLORS.length];
  };

  const backgroundColor = getBackgroundColor();

  return (
    <div>
      <h3
        className={`inline-block ${backgroundColor} text-xl px-2 text-[10px] rounded-md uppercase font-medium tracking-wide`}
      >
        {tag.text}
      </h3>
    </div>
  );
};
Tags.propTypes = {
  tag: PropTypes.object,
  idx: PropTypes.number,
};
export default Tags;
