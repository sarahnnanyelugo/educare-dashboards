import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { UploadPhoto } from "../../../components/UploadPhoto/UploadPhoto";

export const AddPhoto = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const fileName = files[0].name;
      setUploadedFileName(fileName);
      alert(`File "${fileName}" has been successfully uploaded!`);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const fileName = files[0].name;
      setUploadedFileName(fileName);
      alert(`File "${fileName}" has been successfully uploaded!`);
    }
  };

  return (
    <div className="add-photo-div">
      <Link to={"/photo-journal"}>
        {" "}
        <GoArrowLeft /> Back
      </Link>
      <h5>Create Album</h5>
      <form>
        <h6>Enter title</h6>
        <input placeholder="Give a title" />
        <h6>Add caption / description</h6>
        <input placeholder="Caption here" />
        <h6>Upload Photo / Video</h6>
        <UploadPhoto />
        <div className="upload-btns">
          {" "}
          <center>
            <button className="app-btn col-5">Cancel</button>
            <button className="app-btn col-5">Upload</button>
          </center>
        </div>
      </form>
    </div>
  );
};
