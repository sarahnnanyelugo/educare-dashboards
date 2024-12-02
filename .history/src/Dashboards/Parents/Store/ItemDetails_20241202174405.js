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
    <div className="details-modal">
      {" "}
      <div className="modal-overlay ">
        <div className="modal-content ">
          <div className="d-md-flex">
            {" "}
            <div className="col-m-6">
              <img src={item.Photo} alt={item.productName} width="100%" />
            </div>
            <div className="col-md-6 details">
              {" "}
              <h6>{item.productName}</h6>
              <h6>₦{item.amount.toFixed(2)}</h6>
              <hr />
              <p>Size</p>
              <div className="d-flex ">
                <button className="selection-btns">S</button>
                <button className="selection-btns">M</button>
                <button className="selection-btns">L</button>
                <button className="selection-btns">XL</button>
              </div>
              <hr />
              <div className="quantity-control">
                <p>Quantity</p>
                <button onClick={decrement} className="selection-btns">
                  -
                </button>
                <button className="selection-btns">{quantity}</button>
                <button onClick={increment} className="selection-btns">
                  +
                </button>
              </div>
              <div className="d-flex">
                {" "}
                <button className="cancel-cart-btn" onClick={onClose}>
                  Cancel
                </button>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="purchase-info">
            <p>
              Please ensure you select the right size. If you are unsure, kindly
              schedule a sizing appointment Here Items bought in good condition
              cannot be returned or changed due to wrong size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
