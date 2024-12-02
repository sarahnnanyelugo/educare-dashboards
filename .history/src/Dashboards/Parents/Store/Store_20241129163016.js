import React, { useEffect, useState } from "react";
import { generateStoreItems } from "../../../Utils/DataUtils";
import { StoreItem } from "./StoreItem";
import { Header } from "./Header";
import { ItemDetailModal } from "./ItemDetails";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import "./store.scss";
export const Store = ({ totalItemCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const [storeItems, setStoreItems] = useState([]);
  const [category, setCategory] = useState("All Products");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);

  useEffect(() => {
    const fb = generateStoreItems(30, [], ["Uniforms", "Books", "Accessories"]);
    setStoreItems(fb);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem({ ...item, quantity: 1 }); // Set selected item with initial quantity of 1
    setShowItemModal(true); // Open the modal
  };

  const handleCloseModal = () => {
    setShowItemModal(false); // Close the modal
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
    }
  };

  return (
    <>
      <Header totalItemCount={totalItemCount} />
      <div className="store-container">
        <div className="store-container-inner">
          <div className="d-md-flex">
            <div className="col-md-6">
              <h6>Search</h6>
              {/* Search implementation */}
            </div>
            <div style={{ flexGrow: 1 }} />
            <div>
              <button className="filter-btn">Filter</button>
              <button className="filter-btn">Sort</button>
            </div>
          </div>
          <hr />
          <div className="d-md-flex">
            <div className="col-md-2">
              <h6>Categories</h6>
              <ul className="list-unstyled">{/* Categories list */}</ul>
            </div>
            <div className="items-div col-md-10">
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                {storeItems.map((data, index) => (
                  <StoreItem
                    key={index}
                    data={data}
                    onAddToCart={handleAddToCart} // Pass function to each item
                    onItemClick={handleItemClick} // Pass the function to open modal
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailModal
          showModal={showItemModal}
          onClose={handleCloseModal}
          item={selectedItem}
          onAddToCart={handleAddToCart} // Pass handleAddToCart to modal
        />
      )}
    </>
  );
};
