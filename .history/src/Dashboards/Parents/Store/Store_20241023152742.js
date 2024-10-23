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

  const avatarList = [
    { name: "Supply", category: "Uniforms", image: Supply },
    { name: "Supply2", category: "Books", image: Supply2 },
    { name: "Supply3", category: "Accessories", image: Supply3 },
    { name: "Supply4", category: "Uniforms", image: Supply4 },
    { name: "Supply6", category: "Books", image: Supply6 },
    { name: "Supply8", category: "Accessories", image: Supply8 },
    { name: "Supply9", category: "Books", image: Supply9 },
    { name: "Supply10", category: "Accessories", image: Supply10 },
  ];
  useEffect(() => {
    const fb = generateStoreItems(10, avatarList);
    setStoreItems(fb);
    console.log(fb);
  }, []);
  const handleFilterChange = (category) => {
    setFilterCategory(category); // Update the filter category based on button click
  };

  // Filter items based on the selected filterCategory
  const filteredItems = storeItems.filter((item) => {
    if (filterCategory === "All Products") return true; // Show all if 'All Products' is selected
    return item.Purpose === filterCategory; // Filter by 'Purpose' field
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
              <li>
                <button onClick={() => handleFilterChange("All Products")}>
                  All Products
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Uniforms")}>
                  Uniforms
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Books")}>
                  Books
                </button>
              </li>
              <li>
                <button onClick={() => handleFilterChange("Accessories")}>
                  Others
                </button>
              </li>
            </ul>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 col-md-9">
            {filteredItems.map((data, index) => (
              <div key={index}>
                <p>Purpose: {data.Purpose}</p>
                <p>Amount: {data.amount}</p>

                <img
                  src={data.Photo}
                  alt="avatar"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
