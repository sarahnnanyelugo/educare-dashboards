import React, { useState } from "react";
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
import { TransportSystem } from "../Dashboards/Parents/TransportSystem/TransportSystem";
import PhotoJournal from "../Dashboards/Parents/Media/PhotoJournals";
import TaggedPost from "../Dashboards/Parents/Media/TaggedPost";
import ChatInterface from "../Dashboards/Parents/ChatInterface/ChatInterface";
import { PaymentGateway } from "../Dashboards/Parents/PaymentGateway/PaymentGateway";
import { CartItems } from "../Dashboards/Parents/Store/CartItems";
import { Desktop, TabletAndBelow } from "../Utils/mediaQueries";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { ProfilePage } from "../Dashboards/Parents/ProfilePage/ProfilePage";
import { AddPhoto } from "../Dashboards/Parents/Media/AddPhoto";

export const ParentsLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productName === item.productName
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.productName === item.productName
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <Desktop>
        {" "}
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
              <Route path="/payment-gateway" element={<PaymentGateway />} />{" "}
              <Route path="/calendar" element={<Event />} />{" "}
              <Route path="/chat-interface" element={<ChatInterface />} />{" "}
              <Route
                path="/transaction-history"
                element={<TransactionHistory />}
              />{" "}
              <Route
                path="/store"
                element={
                  <Store
                    cartItems={cartItems}
                    onAddToCart={handleAddToCart}
                    totalItemCount={getTotalItemCount()}
                  />
                }
              />{" "}
              <Route path="/voting-system" element={<VotingSystem />} />{" "}
              <Route path="/transport-system" element={<TransportSystem />} />{" "}
              <Route path="/photo-journals" element={<PhotoJournal />} />{" "}
              <Route path="/tagged-posts" element={<TaggedPost />} />{" "}
            </Routes>
          </div>
        </div>
      </Desktop>
      <TabletAndBelow>
        <TopNav />

        <Routes>
          {" "}
          <Route path="/" element={<MainView />} />{" "}
          <Route path="/my-children" element={<MyChildren />} />{" "}
          <Route path="/result" element={<Result />} />{" "}
          <Route path="/calendar" element={<Event />} />{" "}
          <Route path="/pastoral-report" element={<PastoralReport />} />{" "}
          <Route path="/voting-system" element={<VotingSystem />} />{" "}
          <Route path="/photo-journals" element={<PhotoJournal />} />{" "}
          <Route path="/tagged-posts" element={<TaggedPost />} />{" "}
          <Route path="/profile-page" element={<ProfilePage />} />{" "}
          <Route path="/add-photo" element={<AddPhoto />} />{" "}
          <Route path="/chat-interface" element={<ChatInterface />} />{" "}
          <Route
            path="/store"
            element={
              <Store
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                totalItemCount={getTotalItemCount()}
              />
            }
          />{" "}
          <Route
            path="/cart-items"
            element={
              <CartItems
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalItemCount={getTotalItemCount()}
              />
            }
          />{" "}
          <Route path="/payment-gateway" element={<PaymentGateway />} />{" "}
        </Routes>

        <BottomNav />
      </TabletAndBelow>
    </>
  );
};
