import React from "react";

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
