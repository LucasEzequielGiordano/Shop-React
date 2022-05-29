import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  // const onAdd = (count) =>
  //   alert(`Has agregado ${count} "${product.name}" al carrito`);
  return (
    <div className="itemContainerImg">
      <Link to={`/detalle/${product.id}`}>
        <img src={product.img} alt="" />
      </Link>
      <div className="card bg-dark itemContent text-white">
        <div className="card-header text-white">{`${product.name} ~ ${product.category}`}</div>
        ${product.price}
      </div>
    </div>
  );
};

export default Item;
