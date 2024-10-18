import React from "react";
import { FileUpload } from "../../../components/FIleUpload/FileUpload";

export const Documents = () => {
  return (
    <div>
      <FileUpload file="Birth Certificate" />
      <FileUpload file="Immunization records" />
    </div>
  );
};
