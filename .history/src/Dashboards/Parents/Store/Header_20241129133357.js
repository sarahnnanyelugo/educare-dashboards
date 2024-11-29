import { IoCartOutline } from "react-icons/io5";

export const Header = ({ totalItemCount }) => {
  return (
    <div className="header">
      <h5>Store</h5>
      <div className="cart-icon">
        <IoCartOutline />
        <sup className="cart-count">{totalItemCount}</sup>
      </div>
    </div>
  );
};
