import React from "react";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <div style={{ background: "red", height: "600px" }}>
      <Link to={"/"}>Dashboards</Link>
      <Link to={"/My children"}>My Children</Link>
    </div>
  );
};
