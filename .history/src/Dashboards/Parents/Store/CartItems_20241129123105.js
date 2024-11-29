import React from "react";

export const CartItems = () => {
  return (
    <div>
      <div className="d-flex store-head">
        {" "}
        <h5 style={{ flexGrow: 1 }}>Store</h5>
        <Link to={"/cart-items"}>
          {" "}
          <IoCartOutline />
          <sup className="cart-count">{cartCount}</sup> Cart
        </Link>
      </div>
    </div>
  );
};
