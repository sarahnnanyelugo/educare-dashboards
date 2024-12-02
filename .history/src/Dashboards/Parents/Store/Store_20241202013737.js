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
import { ItemDetailsModal } from "./ItemDetails";

export const Store = ({ cartItems, onAddToCart, totalItemCount }) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const [selectedItem, setSelectedItem] = useState(null);
  const [storeItems, setStoreItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All Products"); // Step 1: Create filter state
  const [category, setCategory] = useState("All Products"); // Step 1: Create filter state
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
  function mergeImages() {
    let imgSources = [];
    for (let category in avatarList) {
      imgSources = imgSources.concat(avatarList[category]);
    }
    return imgSources;
  }
  useEffect(() => {
    const fb = generateStoreItems(30, avatarList.Accessories, catList);
    setStoreItems(fb);
    console.log(fb);
  }, []);

  useEffect(() => {
    console.log(category);
    let avt;
    if (category == "All Products") {
      avt = mergeImages();
    } else {
      try {
        avt = avatarList[category];
        if (avt == undefined) avt = avt = [];
        console.log(avt);
      } catch (e) {
        avt = [];
      }
    }
    console.log(avt);
    const fb = generateStoreItems(30, avt, [...[], category]);
    setStoreItems(fb);
    console.log(fb);
  }, [category]);
  const handleFilterChange = (category) => {
    setCategory(category); // Step 3: Update filter state on button click
  };
  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the clicked item as selected
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    setSelectedItem(null); // Clear the selected item
  };
  return (
    <>
      <Header totalItemCount={totalItemCount} />
      <div className="store-container">
        <div className="store-container-inner">
          {" "}
          <div className="d-md-flex">
            <div className="col-md-6">
              <h6>Search</h6>
              <div className="input-div d-flex col-md-12 ">
                <IoIosSearch className="icon col-md-1" />

                <input placeholder="search" className="col-md-11" />
              </div>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div>
              {" "}
              <button className="filter-btn">
                <img src={Filter} />
                FIlter
              </button>
              <button className="filter-btn">
                {" "}
                <img src={Sort} />
                Sort <IoIosArrowDown />
              </button>
            </div>
          </div>{" "}
          <hr />
          <div className="d-md-flex">
            <div className="col-md-2">
              <h6>Categories</h6>
              <ul className="list-unstyled">
                {cat.map((ct, index) => (
                  <li
                    key={index}
                    className={`${category == ct ? "active" : ""}`}
                  >
                    <span
                      onClick={() => handleFilterChange(ct)}
                      className="d-flex"
                    >
                      <span style={{ flexGrow: 1 }}>{ct} </span>
                      <FaAngleRight style={{ marginTop: "5px" }} />
                    </span>{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="items-div col-md-10">
              {" "}
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 ">
                {storeItems.map((data, index) => (
                  <StoreItem
                    data={data}
                    key={index}
                    onAddToCart={() => onAddToCart(data)}
                    onItemClick={() => handleItemClick(data)} // Pass click handler
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={closeModal}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
};
