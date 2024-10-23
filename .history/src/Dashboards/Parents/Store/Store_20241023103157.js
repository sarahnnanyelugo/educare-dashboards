import React from "react";
import "./store.scss";
import { IoIosSearch } from "react-icons/io";
import Filter from "../../../assets/images/filter.svg";
import Sort from "../../../assets/images/sort.svg";
export const Store = () => {
  return (
    <>
      <div className="store-container">
        <div className="d-md-flex">
          <div className="col-md-6">
            <h6>Search</h6>
            <div className="input-div d-flex col-md-12 ">
              <IoIosSearch className="icon" />

              <input placeholder="search" className="col-md-12" />
            </div>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div>
            {" "}
            <button className="filter-btn">
              <img src={Filter} />
              FIlter
            </button>
            <button className="filter-btn">
              {" "}
              <img src={Sort} />
              Sort
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
