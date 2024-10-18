import React from "react";
import { Link } from "react-router-dom";
import "./my-children.scss";
export const Children = ({ data }) => {
  return (
    <>
      <Link>
        <div className="d-flex children-div">
          <div>
            {" "}
            <img src={data.img} width="34px" height="34px" />
          </div>
          <div>
            <h6>{data.name}</h6>
            <p>{data.class}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
