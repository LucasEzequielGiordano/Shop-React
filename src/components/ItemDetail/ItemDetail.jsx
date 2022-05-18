import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto, onAdd }) => {
  return (
    <div className="row">
      <div className="col">
        <img className="imgDetail" src={producto.img} />
      </div>
      <div className="col divDescription">
        <h1>{producto.name}</h1>
        <h3>{producto.category}</h3>
        <p>${producto.price}</p>
        <ItemCount stock={5} onAdd={onAdd} initial={1} />
        <h3>Overview</h3>
        <p>{producto.detail}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
