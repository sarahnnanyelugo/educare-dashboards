import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export const AddPhoto = () => {
  const [dragActive, setDragActive] = useState(false);

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

    // Access dropped files
    const files = e.dataTransfer.files;
    console.log(files); // Process the files here
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Process the files here
  };

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
            Drag and drop or upload here
            <br />
            <small>Upload PNG, JPEG, JPG</small>
          </span>
        </label>
      </div>
    </div>
  );
};
