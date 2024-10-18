import React from "react";
import { Link } from "react-router-dom";

export const Children = ({ data }) => {
  return (
    <>
      <Link>
        <div className="d-flex">
          <img src={data.img} width="34px" height="34px" />
          <div>
            <h6>{data.name}</h6>
            <p>{data.grade}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
