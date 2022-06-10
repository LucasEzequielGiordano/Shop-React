import "./ItemDetail.css";
import Intercambiability from "../Intercambiabilidad/Intercambiabilidad";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext/CartContext";
import { useState } from "react";

const ItemDetail = ({ product }) => {
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
    <div className="cardDetail">
      <div className="cardImg">
        <img className="imgDetail" src={product.img} />
      </div>
      <div className="col divDescription">
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <p>${product.price}</p>
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
