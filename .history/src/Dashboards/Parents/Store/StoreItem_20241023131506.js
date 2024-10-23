import React from "react";

export const StoreItem = ({ data }) => {
  const { productPhoto, amount, productName } = data;
  return (
    <div className="store-item">
      <img src={productPhoto} />
      <p>{productName}</p>
      <h6>{amount}</h6>
    </div>
  );
};
