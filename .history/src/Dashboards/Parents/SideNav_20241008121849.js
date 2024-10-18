import React from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div style={{ background: "red", height: "600px" }}>
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Dashboard</Link>
        </li>{" "}
        <li>
          {" "}
          <Link to={"/my-children"}>My Children</Link>
        </li>
      </ul>
    </div>
  );
};
