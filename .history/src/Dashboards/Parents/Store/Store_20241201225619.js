import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { generateStoreItems } from "../../../Utils/DataUtils";
import { StoreItem } from "./StoreItem";
import { Header } from "./Header";
import { ItemDetailModal } from "./ItemDetails";
import "./store.scss";

export const Store = ({ onAddToCart, totalItemCount }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [cartItems, setCartItems] = useState([]);

  const categories = ["All Products", "Uniforms", "Books", "Accessories"];
  const images = {
    Accessories: [
      "/images/supply1.png",
      "/images/supply2.png",
      "/images/supply3.jpeg",
    ],
    Books: ["/images/book1.png", "/images/book2.png"],
    Uniforms: ["/images/uniform1.png", "/images/uniform2.png"],
  };

  const mergeImages = () => {
    return Object.values(images).flat();
  };

  const handleFilterChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleItemClick = (item) => {
    setSelectedItem({ ...item, quantity: 1 });
    setShowItemModal(true);
  };

  const handleCloseModal = () => {
    setShowItemModal(false);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const currentImages =
      category === "All Products" ? mergeImages() : images[category] || [];
    const generatedItems = generateStoreItems(30, currentImages, categories);
    setStoreItems(generatedItems);
  }, [category]);

  return (
    <>
      <Header totalItemCount={totalItemCount} />
      <div className="store-container">
        <div className="filters">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={category === cat ? "active" : ""}
              onClick={() => handleFilterChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="store-items">
          {storeItems.map((item) => (
            <StoreItem
              key={item.id}
              data={item}
              onAddToCart={handleAddToCart}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>
      {showItemModal && selectedItem && (
        <ItemDetailModal
          item={selectedItem}
          showModal={showItemModal}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
