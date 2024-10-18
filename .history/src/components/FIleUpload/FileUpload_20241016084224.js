import React from "react";
import "./file-upload.scss";
export const FileUpload = (props) => {
  return (
    <>
      <div className="file-upload-div d-flex">
        <p style={{ flexGrow: 1 }}>{props.file}</p>
        <div>
          {" "}
          <input type="file" id="actual-btn" hidden />
          <label for="actual-btn">Upload</label>
        </div>
      </div>
    </>
  );
};
