import "./style.css";
import { WithContext as ReactTags } from "react-tag-input";
import PropTypes from "prop-types";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagsInput = ({ tags, setTags }) => {
  //   console.log(tags);

  const handleDelete = (i) => {
    setTags(tags?.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  return (
    <div className="app">
      <div>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          inputFieldPosition="bottom"
          autocomplete
          editable
        />
      </div>
    </div>
  );
};

TagsInput.propTypes = {
  tags: PropTypes.array,
  setTags: PropTypes.func,
};

export default TagsInput;
