import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Input.scss";

const Input = ({ label, updateState, required, value, maxLength, type }) => {
  const handleChange = e => {
    updateState(e.target.value);
  };

  return (
    <section className="Input">
      <TextField
        required={required}
        label={label}
        variant="outlined"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        type={type}
        fullWidth
      />
    </section>
  );
};

Input.defaultProps = {
  type: "text"
};

export default Input;
