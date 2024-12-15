import React from "react";
import PropTypes from "prop-types";

const CustomToolbar = ({ label, onNavigate }) => {
  return (
    <div
      className="custom-toolbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      {/* Left Arrow */}
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={() => onNavigate("PREV")}
      >
        ←
      </button>
      {/* Current Month/Label */}
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>{label}</span>
      {/* Right Arrow */}
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
        onClick={() => onNavigate("NEXT")}
      >
        →
      </button>
    </div>
  );
};

CustomToolbar.propTypes = {
  label: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default CustomToolbar;
