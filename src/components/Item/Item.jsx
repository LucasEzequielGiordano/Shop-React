import "./item.css";
import { Link } from "react-router-dom";

// A function that returns a JSX element.
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
    </div>
  );
};

export default Item;
