import React from "react";
import { FileUpload } from "../../../components/FIleUpload/FileUpload";
import Icon from "../../../assets/images/jpg.png";
export const Documents = () => {
  return (
    <div>
      <FileUpload file="Birth Certificate" />
      <FileUpload file="Immunization records" />
      <div className="d-flex documents">
        <img src={Icon} width="34px" height="34px" />
        <div>
          <p>International Passport.jpeg</p>
          <small>200KB</small>
        </div>
      </div>{" "}
      <div className="d-flex documents">
        <img src={Icon} width="34px" height="34px" />
        <div>
          <p>International Passport.jpeg</p>
          <small>200KB</small>
        </div>
      </div>{" "}
      <div className="d-flex documents">
        <img src={Icon} width="34px" height="34px" />
        <div>
          <p>International Passport.jpeg</p>
          <small>200KB</small>
        </div>
      </div>
    </div>
  );
};
