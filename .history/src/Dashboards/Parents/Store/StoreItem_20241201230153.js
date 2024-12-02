import React from "react";
import { IoCartOutline } from "react-icons/io5";

export const StoreItem = ({ data, onAddToCart, onItemClick }) => {
  const { Photo, productName, amount } = data;

  return (
    <div className="store-item" onClick={() => onItemClick(data)}>
      <img src={Photo} alt={productName} />
      <h4>{productName}</h4>
      <p>₦{amount}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(data);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
