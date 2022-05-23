import { useCartContext } from "../../context/CartContext/CartContext";

const Cart = () => {
  const { cartList, emptyCart } = useCartContext();
  return (
    <div>
      Cart
      <div>
        {cartList.map((prod) => (
          <li key={prod.id}>
            {prod.name} - cant: {prod.quantity}
          </li>
        ))}
        <button onClick={emptyCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;
