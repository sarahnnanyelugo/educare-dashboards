import React, { useState } from "react";

export const UploadPhoto = () => {
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
    <div
      className={`file-upload ${dragActive ? "drag-active" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file"
        className="file-hidden"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="file-upload-label">
        <span className="file-upload-text">
          {uploadedFileName
            ? `Uploaded: ${uploadedFileName}`
            : `Drag and drop or upload here`}
          <br />
          <small>Upload PNG, JPEG, JPG</small>
        </span>
      </label>
    </div>
  );
};