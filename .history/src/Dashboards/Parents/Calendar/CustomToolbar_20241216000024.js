import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CustomToolbar = ({ onNavigate }) => {
  return (
    <div className="custom-toolbar" style={{ display: "flex" }}>
      {/* Previous and Next Buttons */}
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginLeft: "-60px",
          marginBottom: "-60px",
        }}
      >
        <button
          onClick={() => onNavigate("PREV")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <FaLongArrowAltLeft />
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default CustomToolbar;
