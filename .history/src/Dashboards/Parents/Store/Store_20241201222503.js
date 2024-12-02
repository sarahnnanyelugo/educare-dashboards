import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { ItemDetailModal } from "./ItemDetails";
import { StoreItem } from "./StoreItem";
import { generateStoreItems } from "../../../Utils/DataUtils";
import "./store.scss";

export const Store = ({ onAddToCart, totalItemCount }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const [category, setCategory] = useState("All Products");
  const cat = ["All Products", "Uniforms", "Books", "Accessories"];

  const avatarList = {
    Accessories: ["supply1.png", "supply2.png"], // Replace with actual paths
    Books: ["book1.png", "book2.png"], // Replace with actual paths
    Uniforms: ["uniform1.png", "uniform2.png"], // Replace with actual paths
  };

  useEffect(() => {
    const items = generateStoreItems(30, avatarList[category] || [], cat);
    setStoreItems(items);
  }, [category]);

  const handleFilterChange = (newCategory) => setCategory(newCategory);

  const handleItemClick = (item) => {
    setSelectedItem({ ...item, quantity: 1 });
    setShowItemModal(true);
  };

  const handleCloseModal = () => setShowItemModal(false);

  const handleIncrement = () => {
    setSelectedItem((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const handleDecrement = () => {
    setSelectedItem((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity - 1),
    }));
  };

  return (
    <>
      <Header totalItemCount={totalItemCount} />
      <div className="store-container">
        <div className="store-filters">
          <ul>
            {cat.map((ct, index) => (
              <li
                key={index}
                className={category === ct ? "active" : ""}
                onClick={() => handleFilterChange(ct)}
              >
                {ct}
              </li>
            ))}
          </ul>
        </div>
        <div className="store-items">
          {storeItems.map((item, index) => (
            <StoreItem
              key={index}
              item={item}
              onAddToCart={onAddToCart}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <ItemDetailModal
          showModal={showItemModal}
          onClose={handleCloseModal}
          item={selectedItem}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
};
