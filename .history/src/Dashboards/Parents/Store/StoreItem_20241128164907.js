import React from "react";
import { IoCartOutline } from "react-icons/io5";

export const StoreItem = ({ data }) => {
  const { Photo, amount, productName } = data;
  return (
    <div className="store-item col-md-12">
      <img src={Photo} width="100%" />
      <div className="d-flex">
        {" "}
        <small style={{ flexGrow: 1 }}>{productName}</small>
        <h6>{amount}</h6>
      </div>
      <button>
        <IoCartOutline />
        Add to cart
      </button>
    </div>
  );
};
