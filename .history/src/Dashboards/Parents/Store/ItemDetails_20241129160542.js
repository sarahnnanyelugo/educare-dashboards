import React from "react";

export const ItemDetailModal = ({
  showModal,
  onClose,
  item,
  onIncrement,
  onDecrement,
}) => {
  if (!showModal) return null; // Don't render the modal if it's not active

  return (
    <div className="item-details">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="d-flex">
            <img
              src={item.Photo}
              alt={item.productName}
              style={{ width: "150px", height: "150px" }}
            />
            <div className="modal-item-details" style={{ marginLeft: "20px" }}>
              <h4>{item.productName}</h4>
              <p>{item.amount}</p>
              <div className="quantity-controls">
                <button onClick={onDecrement}>-</button>
                <span>{item.quantity}</span>
                <button onClick={onIncrement}>+</button>
              </div>
            </div>
          </div>
          <div className="modal-actions">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};
