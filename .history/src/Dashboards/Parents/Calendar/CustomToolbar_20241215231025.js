import React from "react";

const CustomToolbar = ({ onNavigate }) => {
  return (
    <div
      className="custom-toolbar"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      {/* Previous and Next Buttons */}
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          onClick={() => onNavigate("PREV")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
