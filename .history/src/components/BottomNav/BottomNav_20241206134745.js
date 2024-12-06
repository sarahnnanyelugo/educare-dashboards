import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { LiaIdCardSolid } from "react-icons/lia";

import {
  IoStatsChartSharp,
  IoStorefrontOutline,
  IoCalendarNumberOutline,
} from "react-icons/io5";
import "./bottom-nav.scss";
export const BottomNav = () => {
  return (
    <div className="bottom-nav col-12">
      <ul className="list-inline list-unstyled">
        <li className="list-inline-item">
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Dashboard
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
            <SlPeople />
            <br />
            My Children
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
            <LiaIdCardSolid />
            <br />
            Results
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Reports
          </NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink>
            <IoStatsChartSharp />
            <br />
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};