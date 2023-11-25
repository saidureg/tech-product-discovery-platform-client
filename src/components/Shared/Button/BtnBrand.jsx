import PropTypes from "prop-types";
const BtnBrand = ({ text }) => {
  return (
    <button className="btn border-none text-lg hover:text-[#E76F51] bg-[#E76F51] text-[#F1EAEA]">
      {text}
    </button>
  );
};

BtnBrand.propTypes = {
  text: PropTypes.string,
};

export default BtnBrand;
