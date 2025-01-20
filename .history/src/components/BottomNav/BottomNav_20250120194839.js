import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardActive from "../../assets/images/dashboard.svg";
import DashboardDefault from "../../assets/images/d-voting.svg";
import ChildrenDefault from "../../assets/images/d-children.svg";
import ChildrenActive from "../../assets/images/d-children.svg";
import ResultDefault from "../../assets/images/d-result.svg";
import ResultActive from "../../assets/images/results.svg";
import ReportDefault from "../../assets/images/d-report.svg";
import ReportActive from "../../assets/images/report.svg";
import ProfileDefault from "../../assets/images/d-profile.svg";
import ProfileActive from "../../assets/images/profile.svg";
import "./bottom-nav.scss";

export const BottomNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        Toggle Collapse
      </button>
    </>
  );
};
