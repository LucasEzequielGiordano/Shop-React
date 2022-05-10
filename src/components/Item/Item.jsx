import ItemCount from "../Count/ItemCount";

import "./Item.css";

const Item = ({ nombre, img, precio }) => {
  const randomStock = Math.floor(Math.random() * 11);

  const onAdd = (count) => {
    alert(`Has agregado ${count} "${nombre}" al carrito`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={img} alt="" />

      <h3 className="product-card__name">{nombre}</h3>
      <span className="product-card__name">${precio}</span>

      <ItemCount stock={randomStock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
