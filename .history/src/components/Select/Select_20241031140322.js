import React from "react";
import "./select.scss";
import { BiCalendar } from "react-icons/bi";

const Select = ({
  props,
  options = [], // Array of options to display
  value = "", // Current selected value
  onChange = () => {}, // Handler for when an option is selected
  label = "", // Optional label for the select input
  placeholder = "Select an option...", // Placeholder text
  disabled = false, // Disable select if true
  style = {}, // Optional custom styles
  className = "", // Optional custom className
}) => {
  return (
    <div className="d-flex select-container">
      {" "}
      <img src={props.Icon} />
      <div className={`col-md-11 ${className}`} style={style}>
        <div className="d-flex">
          {label && <label className="select-label">{label}</label>}
        </div>
        <select
          className="select-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
