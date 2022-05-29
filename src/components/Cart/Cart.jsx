import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";

// const Cart = () => {
//   const { cartList, emptyCart } = useCartContext();
//   return (
//     <div>
//       Cart
//       <div>
//         {cartList.map((prod) => (
//           <li key={prod.id}>
//             <img src={prod.img} className="imgCart" /> {prod.name} - cantidad: {prod.quantity} - Precio: {prod.price}
//           </li>
//         ))}
//         <button onClick={emptyCart}>Vaciar Carrito</button>
//       </div>
//     </div>
//   );
// };

export const Cart = () => {
  const { cartList, emptyCart, deleteItem, priceTotal } = useCartContext();

  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Carrito</h2>
        {cartList.map((product) => (
          <li className="cartItem">
            <Link to={`/detail/${product.id}`}>
              <img className="imgCart" src={product.img}></img>
            </Link>
            <p>{product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio: ${product.price * product.quantity}</p>
            <button
              onClick={() => deleteItem(product.id)}
              className="delete-item"
            >
              ➖
            </button>
          </li>
        ))}
        {cartList.length ? (
          <div>
            <h3 className="totalCompra">Total: ${priceTotal()}</h3>
            <button className="delete-button" onClick={emptyCart}>
              Vaciar Carrito
            </button>
          </div>
        ) : (
          <div className="carritoVacio">
            <p>No hay productos en tu carrito</p>
            <Link to={"/"}>
              <p>Ir a la tienda</p>
              <button>Volver</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
