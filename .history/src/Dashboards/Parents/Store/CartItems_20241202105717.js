import { useState } from "react";
import { ClearCart } from "./ClearCart";
import { Header } from "./Header";
import { Table } from "react-bootstrap";
import { ItemDetailsModal } from "./ItemDetails";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const CartItems = ({ cartItems, setCartItems, totalItemCount }) => {
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // To control item details modal
  const navigate = useNavigate();

  const updateQuantity = (productName, change) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.productName === productName
              ? { ...item, quantity: item.quantity + change }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
    );
  };

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.amount * item.quantity, 0);

  const handleClearCart = () => {
    setCartItems([]); // Clear the cart
    setShowModal(false); // Close the modal after clearing
  };
  const handleViewItem = (item) => {
    setSelectedItem(item); // Set the item to trigger modal
  };
  // Function to show modal when clear button is clicked
  const showClearCartModal = () => {
    setShowModal(true);
  };

  // Function to close the modal without clearing the cart
  const closeModal = () => {
    setSelectedItem(null); // Close modal by clearing selected item
  };
  const removeItem = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.productName !== item.productName)
    );
  };
  return (
    <>
      <div className="d-flex">
        <Link to={"/store"}>
          <FaLongArrowAltLeft />
          Back
        </Link>
        <div className="col-md-11">
          {" "}
          <Header totalItemCount={totalItemCount} />
        </div>
      </div>
      <div className="cart-outer">
        {" "}
        <div className="cart-item-div">
          <div className="cart-page">
            <h3> Cart</h3>
            {cartItems.length > 0 ? (
              <table responsive striped hover className="cart-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>No of items</th>
                    <th>Price per unit</th>
                    <th>Total</th>

                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.Photo}
                          alt={item.productName}
                          className="item-image"
                        />
                        <span className="product-name">
                          {" "}
                          {item.productName}
                        </span>
                      </td>
                      <td className="item-btns">
                        <button
                          onClick={() => updateQuantity(item.productName, 1)}
                        >
                          +
                        </button>
                        <button> {item.quantity}</button>
                        <button
                          onClick={() => updateQuantity(item.productName, -1)}
                        >
                          -
                        </button>
                      </td>

                      <td>₦ {Number(item.amount).toFixed(2)}</td>
                      <td>₦ {(item.quantity * item.amount).toFixed(2)}</td>
                      <td className="store-actions">
                        <span onClick={() => handleViewItem(item)}>View</span>{" "}
                        <span
                          onClick={() => removeItem(item)}
                          className="remove"
                        >
                          Remove
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="empty-div" />
            <hr />
            <div className="cart-total">
              <h5>Total: ₦ {calculateTotal(cartItems).toFixed(2)}</h5>
              <button
                className="clear-cart-btn"
                onClick={showClearCartModal}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Clear Cart
              </button>{" "}
              <button
                className="checkout-btn"
                onClick={() => navigate("/payment-gateway")}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Checkout
              </button>
            </div>
          </div>
          <ClearCart
            showModal={showModal}
            onClose={closeModal}
            onConfirm={handleClearCart}
          />
          {selectedItem && (
            <ItemDetailsModal
              item={selectedItem}
              onClose={closeModal}
              onAddToCart={(item) => {
                setCartItems((prevItems) => [...prevItems, item]);
                closeModal();
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
