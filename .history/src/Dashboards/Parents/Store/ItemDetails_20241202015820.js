import React, { useState } from "react";
import "./store.scss";
export const ItemDetailsModal = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart({ ...item, quantity });
    onClose(); // Optionally close modal after adding
  };
  const { Photo, productName, amount } = item;
  const displayAmount = parseFloat(amount) || 0;
  return (
    <div className="modal-overlay details-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={item.Photo} alt={item.productName} width="100%" />
        <h3>{item.productName}</h3>
        <p>Price: ₦{item.amount.toFixed(2)}</p>
        <div className="quantity-control">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
