import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./my-children.scss";
export const Children = ({
  data,
  handleClick2,
  tabIndex,
  isActive,
  mode,
  linkUrl,
}) => {
  return (
    <>
      <Link className="col">
        <div className={isActive ? "active-component" : ""}>
          {" "}
          <div
            className="d-flex children-div col-md-12"
            onClick={() => handleClick2(tabIndex)}
          >
            <div>
              {" "}
              <img src={data.img} width="34px" height="34px" />
            </div>
            <div>
              <h6>{data.name}</h6>
              <p>{data.class}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
