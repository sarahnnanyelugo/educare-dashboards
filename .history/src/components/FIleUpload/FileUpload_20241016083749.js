import React from "react";
import "./file-upload.scss";
export const FileUpload = () => {
  return (
    <>
      <div className="file-upload-div">
        <input type="file" id="actual-btn" />

        <label for="actual-btn">Choose File</label>
      </div>
    </>
  );
};
