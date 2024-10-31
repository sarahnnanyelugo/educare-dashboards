import React from "react";
import "./search.scss";
import { RiSearch2Line } from "react-icons/ri";

export const Search = () => {
  return (
    <div className=" col-md-12 ">
      <h6>Search</h6>
      <div className="input-div d-flex">
        <RiSearch2Line className="icon" />

        <input placeholder="search" />
      </div>
    </div>
  );
};
