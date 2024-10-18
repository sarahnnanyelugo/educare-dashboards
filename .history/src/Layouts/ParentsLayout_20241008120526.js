import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainView } from "../Dashboards/Parents/MainView/MainView";
import { MyChildren } from "../Dashboards/Parents/MyChildren/MyChildren";
import { SideNav } from "../Dashboards/Parents/SideNav";
export const ParentsLayout = () => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col-md-10" style={{ padding: "0px 20px" }}>
          <Routes>
            <Route path="/" element={<MainView />} />{" "}
            <Route path="/my-children" element={<MyChildren />} />{" "}
          </Routes>
        </div>
      </div>
    </>
  );
};
