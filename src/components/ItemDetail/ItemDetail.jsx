import { useState } from "react";
import { useCartContext } from "../../context/CartContext/CartContext";
import Intercambiability from "../Intercambiabilidad/Intercambiabilidad";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product, onAdded }) => {
  const [inputType, setInputType] = useState("ItemCount");
  const { addToCart } = useCartContext();

  function onAdd(qty) {
    addToCart({ ...product, quantity: qty });
    handleInputType();
  }

  function handleInputType() {
    setInputType("Intercambiabilidad");
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
        {inputType === "ItemCount" ? (
          <ItemCount
            stock={5}
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
