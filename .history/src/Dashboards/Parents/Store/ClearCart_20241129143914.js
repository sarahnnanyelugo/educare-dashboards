import React from "react";

export const ClearCart = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) return null; // Don't render the modal if it's not active

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>Are you sure you want to clear your cart?</h4>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={onConfirm}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};
