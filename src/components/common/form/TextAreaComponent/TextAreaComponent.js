import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./TextAreaComponent.scss";

const TextAreaComponent = ({ value, updateState, placeholder, rows }) => {
  const handleChange = e => {
    updateState(e.target.value);
  };

  return (
    <section className="TextAreaComponent">
      <TextareaAutosize
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
      />
    </section>
  );
};

TextAreaComponent.defaultProps = {
  rows: 10
};

export default TextAreaComponent;
