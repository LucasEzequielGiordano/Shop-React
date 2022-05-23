import { useCartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartList, emptyCart } = useCartContext();
  return (
    <div>
      Cart
      <div>
        {cartList.map((prod) => (
          <li key={prod.id}>
            <img src={prod.img} className="imgCart" /> {prod.name} - cant:{" "}
            {prod.quantity}
          </li>
        ))}
        <button onClick={emptyCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
