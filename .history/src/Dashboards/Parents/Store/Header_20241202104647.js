import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = ({ totalItemCount, data }) => {
  return (
    <div className="store-head d-flex">
      <h5 style={{ flexGrow: 1 }}>{data.title}</h5>
      <Link to={"/cart-items"} className="cart-icon">
        <IoCartOutline />
        Cart
        <sup className="cart-count">{totalItemCount}</sup>
      </Link>
    </div>
  );
};
