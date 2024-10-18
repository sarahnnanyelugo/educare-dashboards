import React from "react";
import { FileUpload } from "../../../components/FIleUpload/FileUpload";
import Icon from "../../../assets/images/jpg.png";
export const Documents = () => {
  return (
    <div>
      <FileUpload file="Birth Certificate" />
      <FileUpload file="Immunization records" />
      <div className="d-flex">
        <div>
          <p>International Passport.jpeg</p>
          <small>200KB</small>
        </div>
      </div>
    </div>
  );
};
