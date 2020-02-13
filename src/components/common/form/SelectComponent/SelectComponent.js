import React from "react";
import Select from "@material-ui/core/Select";
import "./SelectComponent.scss";

const SelectComponent = ({ value, updateState, children }) => {
  const handleChange = e => {
    updateState(e.target.value);
  };

  return (
    <section className="SelectComponent">
      <Select native value={value} variant="outlined" onChange={handleChange}>
        {children}
      </Select>
    </section>
  );
};

export default SelectComponent;
