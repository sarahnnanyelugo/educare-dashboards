import React from "react";
import { IoCartOutline } from "react-icons/io5";

export const CartItems = ({ cartItems }) => {
  return (
    <div>
      <div className="d-flex store-head">
        {" "}
        <h5 style={{ flexGrow: 1 }}>Store</h5>
        <p to={"/cart-items"}>
          {" "}
          <IoCartOutline />
          <sup className="cart-count">1</sup> Cart
        </p>
      </div>
    </div>
  );
};
