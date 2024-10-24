import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { TopNav } from "../components/TopNav/TopNav";
import Feedbacks from "../Dashboards/Parents/Feedbacks/Feedbacks";
import { MainView } from "../Dashboards/Parents/MainView/MainView";
import { MyChildren } from "../Dashboards/Parents/MyChildren/MyChildren";
import ExeatRequests from "../Dashboards/Parents/Pastoral/ExeatRequests";
import HostelReport from "../Dashboards/Parents/Pastoral/HostelReport";
import PastoralReport from "../Dashboards/Parents/Pastoral/PastoralReport";
import { Result } from "../Dashboards/Parents/Result/Result";
import { SideNav } from "../components/SideNav/SideNav";
import { Wallet } from "../Dashboards/Parents/Finance/Wallet";
import { PocketMoney } from "../Dashboards/Parents/Finance/PocketMoney";
import { Invoices } from "../Dashboards/Parents/Finance/Invoices";
import { TransactionHistory } from "../Dashboards/Parents/Finance/TransactionHistory";
import { Store } from "../Dashboards/Parents/Store/Store";
import Event from "../Dashboards/Parents/Calendar/Calendar";
import { VotingSystem } from "../Dashboards/Parents/VotingSystem/VotingSystem";
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
            <Route path="/pastoral-report" element={<PastoralReport />} />{" "}
            <Route path="/exeat-requests" element={<ExeatRequests />} />{" "}
            <Route path="/hostel-report" element={<HostelReport />} />{" "}
            <Route path="/wallet" element={<Wallet />} />{" "}
            <Route path="/pocket-money" element={<PocketMoney />} />{" "}
            <Route path="/invoices" element={<Invoices />} />{" "}
            <Route path="/store" element={<Store />} />{" "}
            <Route path="/calendar" element={<Event />} />{" "}
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />{" "}
            <Route path="/voting-system" element={<VotingSystem />} />{" "}
          </Routes>
        </div>
      </div>
    </>
  );
};
