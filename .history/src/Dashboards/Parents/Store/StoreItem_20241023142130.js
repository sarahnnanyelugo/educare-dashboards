import React from "react";

export const StoreItem = ({ data }) => {
  const { Photo, amount, productName } = data;
  return (
    <div className="store-item">
      <img src={Photo} width="100%" />
      <p>{productName}</p>
      <h6>{amount}</h6>
    </div>
  );
};
