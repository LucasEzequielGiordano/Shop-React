import { useCartContext } from "../../context/CartContext/CartContext";
import Intercambiabilidad from "../../events/Intercambiabilidad/Intercambiabilidad";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdd }) => {
  const { addToCart } = useCartContext();

  function onAdd(qty) {
    console.log(qty);
    addToCart({ ...product, quantity: qty });
  }

  return (
    <div className="row">
      <div className="col">
        <img className="imgDetail" src={product.img} />
      </div>
      <div className="col divDescription">
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <p>${product.price}</p>
        <h3>Overview</h3>
        <p>{product.detail}</p>
        <Intercambiabilidad />
        <ItemCount stock={5} onAdd={onAdd} initial={1} />
        {/* <button onClick={() => onAdd(2)}>Agregar al carrito</button> */}
      </div>
    </div>
  );
};

export default ItemDetail;
