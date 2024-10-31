import React from "react";
import "./select.scss";
import { BiCalendar } from "react-icons/bi";

const Select = ({
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
    <div className={`select-container card ${className}`} style={style}>
      <p>
        <BiCalendar />{" "}
        {label && <label className="select-label">{label}</label>}
      </p>
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
  );
};

export default Select;
