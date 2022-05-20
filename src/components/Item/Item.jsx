import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ product }) => {
  const onAdd = (count) =>
    alert(`Has agregado ${count} "${product.name}" al carrito`);
  return (
    <div className="d-flex justify-content-evenly align-center w-25 flex-wrap ItemContainer">
      <div className="card w-100 mt-5 bg-dark itemStyle w-75 d-flex justify-content-between align-center">
        <Link to={`/detalle/${product.id}`}>
          <div className="card-header">{`${product.name} ~ ${product.category}`}</div>
          <div className="card-body itemImgStyle w-100">
            <img src={product.img} alt="" className="w-100" />
          </div>
          ${product.price}
        </Link>
        {/* <div className="card-footer"> */}
        {/* <ItemCount stock={5} onAdd={onAdd} initial={1} /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Item;
