import PropTypes from "prop-types";
const SectionTitle = ({ title }) => {
  return (
    <h3 className="text-4xl font-playfair font-bold text-center mt-8">
      {title}
    </h3>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default SectionTitle;
