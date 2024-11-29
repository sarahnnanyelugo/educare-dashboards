import React from "react";

export const ClearCart = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) return null; // Don't render the modal if it's not active

  return (
    <div className="clear-cart-modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <center>
            <p>
              Are you sure you want clear your cart?, all items would be deleted
              from your cart.
            </p>
          </center>
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
    </div>
  );
};
