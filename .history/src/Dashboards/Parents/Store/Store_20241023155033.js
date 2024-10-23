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
import Supply6 from "../../../assets/images/supply6.jpg";
import Supply8 from "../../../assets/images/supply8.webp";
import Supply9 from "../../../assets/images/supply9.jpg";
import Supply10 from "../../../assets/images/supply10.jpg";
export const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All Products"); // Step 1: Create filter state
  const cat = ["All Products", "Uniforms", "Books", "Accessories"];
  const catList = ["Uniforms", "Books", "Accessories"];
  const avatarList = [
    Supply,
    Supply2,
    Supply3,
    Supply4,
    Supply6,
    Supply8,
    Supply9,
    Supply10,
  ];
  useEffect(() => {
    const fb = generateStoreItems(10, avatarList);
    setStoreItems(fb);
    console.log(fb);
  }, []);
  const handleFilterChange = (category) => {
    setFilterCategory(category); // Step 3: Update filter state on button click
  };

  const filteredItems = storeItems.filter((item) => {
    if (filterCategory === "All Products") return true; // Show all if 'All Products'
    return item.category === filterCategory; // Step 2: Filter items by category
  });
  return (
    <>
      <div className="store-container">
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
        </div>
        <div className="d-md-flex">
          <div className="col-md-3">
            <ul className="list-unstyled">
              {cat.map((ct, index) => (
                <li key={index}>
                  <button onClick={() => handleFilterChange("All Products")}>
                    {ct}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-9">
            {storeItems.map((data, index) => (
              <StoreItem data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
