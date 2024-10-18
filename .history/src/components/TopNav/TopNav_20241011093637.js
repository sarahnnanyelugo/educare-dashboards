import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";

export const TopNav = () => {
  return (
    <div className="top-nav-container">
      <ul className="list-inline">
        <li className="list-inline-item">
          <LuCalendarCheck />
        </li>
        <li className="list-inline-item">
          <LuCalendarCheck />
        </li>
      </ul>
    </div>
  );
};
