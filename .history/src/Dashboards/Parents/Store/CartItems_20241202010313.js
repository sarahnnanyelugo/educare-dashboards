export const CartItems = ({ cartItems, setCartItems }) => {
  const updateQuantity = (productName, change) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.productName === productName
              ? { ...item, quantity: item.quantity + change }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.amount * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Total Price</th>
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
                </td>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>₦ {Number(item.amount).toFixed(2)}</td>
                <td>₦ {(item.quantity * item.amount).toFixed(2)}</td>
                <td>
                  <button onClick={() => updateQuantity(item.productName, 1)}>
                    +
                  </button>
                  <button onClick={() => updateQuantity(item.productName, -1)}>
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <h3>Total Amount: ₦ {calculateTotal(cartItems).toFixed(2)}</h3>
      </div>
    </div>
  );
};
