import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = ({ totalItemCount }) => {
  return (
    <div className="header">
      <h5>Store</h5>
      <Link to={"/cart-items"} className="cart-icon">
        <IoCartOutline />
        <sup className="cart-count">{totalItemCount}</sup>
      </Link>
    </div>
  );
};
