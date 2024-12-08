import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export const AddPhoto = () => {
  return (
    <div className="add-photo-div">
      <Link to={"/photo-journal"}>
        {" "}
        <GoArrowLeft /> Back
      </Link>
      <h5>Create Album</h5>

      <h6>Enter title</h6>
      <input placeholder="Give a title" />
      <h6>Add caption / description</h6>
      <input placeholder="Caption here" />
      <h6>Upload Photo / Video</h6>
      <div className="upload-image-div">
        <input type="file" />
      </div>
    </div>
  );
};
