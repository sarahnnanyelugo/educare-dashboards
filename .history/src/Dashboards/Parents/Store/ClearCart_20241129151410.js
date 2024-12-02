import React from "react";

export const ClearCart = ({ showModal, onClose, onConfirm }) => {
  if (!showModal) return null; // Don't render the modal if it's not active

  return (
    <div className="clear-cart-modal">
      <div className="modal-overlay">
        <div className="modal-content">
          <center>
            <h5 style={{ color: "#ED2F59" }}>Clear Cart</h5>
            <p>
              Are you sure you want clear to your cart?, all items would be
              deleted from your cart.
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
