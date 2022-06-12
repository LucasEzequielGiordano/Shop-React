import "./Cart.css";
import Formu from "../Form/Form";
import { useCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartList, deleteItem } = useCartContext();

  return (
    <>
      <h2 className="cartTitle">Carrito</h2>
      <div className="cart">
        {cartList.map((cartProduct) => (
          <ul className="cartItem">
            <Link to={`/detail/${cartProduct.id}`}>
              <li>
                <img className="imgCart" src={cartProduct.img}></img>
              </li>
            </Link>
            <li>{cartProduct.name}</li>
            <li>Cantidad: {cartProduct.quantity}</li>
            <li>Precio: ${cartProduct.price * cartProduct.quantity}</li>
            <li>
              <button
                onClick={() => deleteItem(cartProduct.id)}
                className="deleteItem btn btn-danger"
              >
                ➖
              </button>
            </li>
          </ul>
        ))}
        {cartList.length ? (
          <>
            <div className="containerForm">
              <Formu />
            </div>
          </>
        ) : (
          <div className="emptyCart">
            <p>No hay productos en tu carrito</p>
            <Link to={"/"}>
              <p>Ir a la tienda</p>
              <button className="btn btn-dark">Volver al inicio</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
