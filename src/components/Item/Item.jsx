import ItemCount from "../Count/ItemCount";

import "./Item.css";

const Item = ({ nombre, img, precio }) => {
  const randomStock = Math.floor(Math.random() * 11);

  const onAdd = (count) => {
    alert(`Has agregado ${count} "${nombre}" al carrito`);
  };

  return (
    <article className="productCard">
      <img className="productCardImg" src={img} alt="" />

      <h3 className="productCardName">{nombre}</h3>
      <span className="productCardName">${precio}</span>

      <ItemCount stock={randomStock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
