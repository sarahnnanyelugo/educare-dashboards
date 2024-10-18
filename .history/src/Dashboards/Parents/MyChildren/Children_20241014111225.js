import React from "react";
import { Link } from "react-router-dom";

export const Children = ({ data }) => {
  return (
    <>
      <Link>
        <div className="d-flex">
          <img src={data.img} width="" />
        </div>
      </Link>
    </>
  );
};
