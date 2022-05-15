import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/all";
import { Link } from "react-router-dom";

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
