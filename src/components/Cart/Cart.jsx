import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartList, emptyCart, deleteItem, priceTotal } = useCartContext();

  const generateOrder = () => {
    let order = {};
    order.buyer = {
      name: "Lucas",
      email: "lucasgiordano2219@gmail.com",
      phone: "1155797422",
    };
    order.total = priceTotal();

    order.products = cartList.map((cartProduct) => {
      const id = cartProduct.id;
      const name = cartProduct.name;
      const price = cartProduct.price * cartProduct.quantity;

      return { id, name, price };
    });

    // crear
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => emptyCart());

    // update
    // const queryItem = doc(db, "products", "Fsji3Di0iarbecvbVwNv");
    // updateDoc(queryItem, {
    //   stock: 10,
    // }).then(() => console.log("terminado"));
  };

  // function addDocsFb(){
  //   libros.forEach((testItem) => {
  //   const db = getFirestore();

  //   const queryCollection = collection(db, "productos");

  //   addDoc(queryCollection, testItem)
  //   .then((resp)=> console.log(resp))
  // });}

  // {/* <button onClick={()=>addDocsFb()}> traer datos </button> */}

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
              className="deleteItem"
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
            <button className="delete-button" onClick={generateOrder}>
              comprar
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
