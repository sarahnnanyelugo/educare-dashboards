import React, { useEffect, useState } from "react";
import "./store.scss";
import { IoIosSearch } from "react-icons/io";
import Filter from "../../../assets/images/filter.svg";
import Sort from "../../../assets/images/sort.svg";
import { IoIosArrowDown } from "react-icons/io";
import { generateStoreItems } from "../../../Utils/DataUtils";
import { StoreItem } from "./StoreItem";
import Student from "../../../assets/images/student.png";
import Supply from "../../../assets/images/supply1.png";
import Supply2 from "../../../assets/images/supply2.png";
import Supply3 from "../../../assets/images/supply3.jpeg";
import Supply4 from "../../../assets/images/supply4.jpeg";
import Supply5 from "../../../assets/images/supply5.jpg";
import Supply6 from "../../../assets/images/Supply6.png";
import Supply8 from "../../../assets/images/supply8.webp";
import Supply9 from "../../../assets/images/supply9.jpg";
import Supply10 from "../../../assets/images/supply10.jpg";
import Wears1 from "../../../assets/images/uni1.webp";
import Wears2 from "../../../assets/images/uni2.jpeg";
import Wears3 from "../../../assets/images/uni3.jpg";
import Wears4 from "../../../assets/images/uni4.jpeg";
import Wears5 from "../../../assets/images/uni44.jpeg";
import Wears6 from "../../../assets/images/uni5.jpg";
import Wears7 from "../../../assets/images/uni6.jpg";
import Wears8 from "../../../assets/images/uni7.jpeg";
import Wears9 from "../../../assets/images/uni9.webp";
import Wears10 from "../../../assets/images/uni10.jpeg";
import Wears11 from "../../../assets/images/uni11.jpeg";
import Wears12 from "../../../assets/images/uni12.jpeg";
import Wears13 from "../../../assets/images/uni13.jpeg";
import Wears14 from "../../../assets/images/uni14.jpeg";
import Wears15 from "../../../assets/images/uni15.jpeg";
import Wears16 from "../../../assets/images/uni16.jpeg";
import Wears17 from "../../../assets/images/uni17.jpeg";
import Wears18 from "../../../assets/images/uni18.jpeg";
import Wears19 from "../../../assets/images/uni19.png";
import { FaAngleRight } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { ItemDetailModal } from "./ItemDetails";

export const Store = ({ onAddToCart, totalItemCount }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [cartItems, setCartItems] = useState([]);
  const cat = ["All Products", "Uniforms", "Books", "Accessories"];
  const catList = ["Uniforms", "Books", "Accessories"];
  const avatarList = {
    Accessories: [Supply, Supply2, Supply6, Supply8, Supply9, Supply10],
    Books: [Supply3, Supply5, Supply4, Supply],
    Uniforms: [
      Wears1,
      Wears2,
      Wears3,
      Wears4,
      Wears5,
      Wears6,
      Wears7,
      Wears8,
      Wears9,
      Wears10,
      Wears11,
      Wears12,
      Wears13,
      Wears14,
      Wears15,
      Wears16,
      Wears17,
      Wears18,
      Wears19,
    ],
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

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemDetailModal
          showModal={showItemModal}
          onClose={handleCloseModal}
          item={selectedItem}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
    </>
  );
};
