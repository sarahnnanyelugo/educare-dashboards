import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ClearCart } from "./ClearCart";
import { Header } from "./Header";

export const CartItems = ({ cartItems, setCartItems, totalItemCount }) => {
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  return (
    <div className="cart-container">
      <Header totalItemCount={totalItemCount} />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.Photo} alt={item.productName} />
                </td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>{item.amount}</td>
                <td>{(item.amount * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: ₦{calculateTotal().toFixed(2)}</h3>
    </div>
    //   <button
    //     className="clear-cart-btn"
    //     onClick={showClearCartModal}
    //     style={{ backgroundColor: "red", color: "white" }}
    //   >
    //     Clear Cart
    //   </button>
    //   <Link to={"/payment-gateway"}>
    //     <button>Check out</button>
    //   </Link>
    //   <ClearCart
    //     showModal={showModal}
    //     onClose={closeModal}
    //     onConfirm={handleClearCart}
    //   />
    // </div>
    // </div>
  );
};
