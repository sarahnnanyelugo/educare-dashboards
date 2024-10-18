import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TopNav } from "../components/TopNav/TopNav";
import Feedbacks from "../Dashboards/Parents/Feedbacks/Feedbacks";
import { MainView } from "../Dashboards/Parents/MainView/MainView";
import { MyChildren } from "../Dashboards/Parents/MyChildren/MyChildren";
import { Result } from "../Dashboards/Parents/Result/Result";
import { SideNav } from "../Dashboards/SideNav/SideNav";
export const ParentsLayout = () => {
  return (
    <>
      <div className="d-md-flex">
        <div className="col-md-">
          <SideNav />
        </div>
        <div className="container-fluid" style={{ padding: "0px 0px" }}>
          <TopNav />
          <Routes>
            <Route path="/" element={<MainView />} />{" "}
            <Route path="/my-children" element={<MyChildren />} />{" "}
            <Route path="/result" element={<Result />} />{" "}
            <Route path="/feedbacks" element={<Feedbacks />} />{" "}
          </Routes>
        </div>
      </div>
    </>
  );
};
