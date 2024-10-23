import React from "react";

export const StoreItem = () => {
  return (
    <div className="store-item">
      <img src={props.product} />
      <p>{props.productName}</p>
    </div>
  );
};
