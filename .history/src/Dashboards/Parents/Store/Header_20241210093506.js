import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = ({ totalItemCount }) => {
  return (
    <div className="store-head d-flex">
      <h5 style={{ flexGrow: 1 }}>Store</h5>
      <Link to={"/cart-items"} className="cart-icon">
        <IoCartOutline />
      
        <sup className="cart-count">{totalItemCount}</sup>  Cart
      </Link>
    </div>
  );
};
