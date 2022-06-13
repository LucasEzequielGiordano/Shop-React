import "./ItemDetail.css";
import Intercambiability from "../Intercambiability/Intercambiability";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useState } from "react";

// It's a function that renders a component that has a button that when clicked, it renders another component.
const ItemDetail = ({ product }) => {
  const [inputType, setInputType] = useState("ItemCount");
  const { addToCart } = useCartContext();

  function onAdd(qty) {
    addToCart({ ...product, quantity: qty });
    handleInputType();
  }

  function handleInputType() {
    setInputType("Intercambiability");
  }

  return (
    <div className="cardDetail">
      <div className="cardImg">
        <img className="imgDetail" src={product.img} />
      </div>
      <div className="col divDescription">
        <h1>{product.name}</h1>
        <h4>Categoria: {product.category}</h4>
        <p>${product.price}</p>
        {inputType === "ItemCount" ? (
          <ItemCount
            stock={product.stock}
            onAdd={onAdd}
            initial={1}
            handleInputType={handleInputType}
          />
        ) : (
          <Intercambiability />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
