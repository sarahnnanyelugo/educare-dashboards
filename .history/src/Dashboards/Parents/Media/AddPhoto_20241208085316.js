import React from "react";
import { GoArrowLeft } from "react-icons/go";

export const AddPhoto = () => {
  return (
    <div className="add-photo-div">
      <Link to={"/photo-journal"}>
        {" "}
        <GoArrowLeft /> Back
      </Link>
    </div>
  );
};
