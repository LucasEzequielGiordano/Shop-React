import "./CartWidget.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/all";

const CartWidget = () => {
  return (
    <>
      <AiOutlineSearch className="iconSearch" />
      <AiOutlineShoppingCart className="iconCart" />
    </>
  );
};

export default CartWidget;
