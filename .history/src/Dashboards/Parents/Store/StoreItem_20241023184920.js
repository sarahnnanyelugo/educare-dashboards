import React from "react";
import { IoCartOutline } from "react-icons/io5";

export const StoreItem = ({ data }) => {
  const { Photo, amount, productName } = data;
  return (
    <div className="store-item">
      <img src={Photo} width="150px" height="170px" />
      <p>{productName}</p>
      <h6>{amount}</h6>
      <button>
        <IoCartOutline />
        Add to cart
      </button>
    </div>
  );
};
