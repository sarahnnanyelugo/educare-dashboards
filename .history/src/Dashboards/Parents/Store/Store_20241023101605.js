import React from "react";
import "./store.scss";
export const Store = () => {
  return (
    <>
      <div className="store-container">
        <div className="d-md-flex">
          <div>
            <h6>Search</h6>
            <div className="input-div d-flex">
              <RiSearch2Line className="icon" />

              <input placeholder="search" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
