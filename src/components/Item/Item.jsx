import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const randomStock = Math.floor(Math.random() * 11);

  const onAdd = (count) => {
    alert(`Has agregado ${count} "${product.name}" al carrito`);
  };
  return (
    <div className="col-md-4">
      <div className="card w-100 mt-5">
        <Link to={`/detalle/${product.id}`}>
          <div className="card-header">{`${product.name}`}</div>
          <div className="card-body">
            <img src={product.img} alt="" className="w-50" />
          </div>
          ${product.price}
        </Link>
        <div className="card-footer">
          <ItemCount stock={randomStock} onAdd={onAdd} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default Item;
