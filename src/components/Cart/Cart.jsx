import "./Cart.css";
import Formu from "../Form/Form";
import { useCartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartList, emptyCart, deleteItem, priceTotal } = useCartContext();

  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Carrito</h2>
        {cartList.map((cartProduct) => (
          <li className="cartItem">
            <Link to={`/detail/${cartProduct.id}`}>
              <img className="imgCart" src={cartProduct.img}></img>
            </Link>
            <p>{cartProduct.name}</p>
            <p>Cantidad: {cartProduct.quantity}</p>
            <p>Precio: ${cartProduct.price * cartProduct.quantity}</p>
            <button
              onClick={() => deleteItem(cartProduct.id)}
              className="deleteItem btn btn-danger"
            >
              ➖
            </button>
          </li>
        ))}
        {cartList.length ? (
          <>
            <div>
              <Formu />
            </div>
            <div>
              <h3 className="totalCompra">Total: ${priceTotal()}</h3>
              <button
                className="delete-button btn btn-danger"
                onClick={emptyCart}
              >
                Vaciar Carrito
              </button>
            </div>
          </>
        ) : (
          <div className="carritoVacio">
            <p>No hay productos en tu carrito</p>
            <Link to={"/"}>
              <p>Ir a la tienda</p>
              <button className="btn btn-dark">Volver</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
