import React, { useEffect, useState } from "react";
import "./store.scss";
import { IoIosSearch } from "react-icons/io";
import Filter from "../../../assets/images/filter.svg";
import Sort from "../../../assets/images/sort.svg";
import { IoIosArrowDown } from "react-icons/io";
import { generateStoreItems } from "../../../Utils/DataUtils";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const avatarList = [Student, Peter];
  useEffect(() => {
    const fb = generateStoreItems(4, avatarList);
    setStoreItems(fb);
    console.log(fb);
  }, []);
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
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <StoreItem data={storeItems} />
        </div>
      </div>
    </>
  );
};
