import React from "react";
import "./store.scss";
import { IoIosSearch } from "react-icons/io";

export const Store = () => {
  return (
    <>
      <div className="store-container">
        <div className="d-md-flex">
          <div>
            <h6>Search</h6>
            <div className="input-div d-flex">
              <IoIosSearch className="icon" />

              <input placeholder="search" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
