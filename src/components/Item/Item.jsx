import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="itemCard">
      <div className="itemContainerImg">
        <Link to={`/detalle/${product.id}`}>
          <img src={product.img} alt="" />
        </Link>
      </div>
      <div className="card-header text-white bg-black text-center p-3">
        {`${product.name} ~ ${product.category}`}
        <div className="bg-black text-center">${product.price}</div>
      </div>
      {/* <div className="card bg-dark itemContent text-white"></div> */}
    </div>
  );
};

export default Item;
