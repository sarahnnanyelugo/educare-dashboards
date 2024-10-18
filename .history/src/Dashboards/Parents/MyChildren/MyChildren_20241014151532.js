import React from "react";
import "./my-children.scss";
export const MyChildren = () => {
  return (
    <div className="my-children-view">
      <h6 style={{ fontSize: "18px", marginTop: "20px" }}>My Children</h6>
      <div className="d-md-flex">
        <div className="col-md-8 card">
          <div className="col-md-flex">
            <button>Time Table</button>
            <button>Subjects</button>
            <button>Assignments</button>
            <button>Assignments</button>
          </div>
        </div>
      </div>
    </div>
  );
};
