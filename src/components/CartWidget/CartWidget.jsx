import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";

// This function returns a link to the cart page with a shopping cart icon.
const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <AiOutlineShoppingCart className="iconCart" />
      </Link>
    </>
  );
};

export default CartWidget;
