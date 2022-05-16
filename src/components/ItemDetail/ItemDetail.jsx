import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ producto, randomStock, onAdd }) => {
  return (
    <div className="row">
      <div className="col">
        <img className="imgDetail" src={producto.img} />
      </div>
      <div className="col divDescription">
        <h1>{producto.name}</h1>
        <p>${producto.price}</p>
        <ItemCount stock={5} onAdd={onAdd} initial={1} />
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil
          explicabo sunt minima, inventore, nobis aspernatur, quam iure delectus
          excepturi cupiditate velit harum omnis nostrum id assumenda vitae?
          Dolorem, laudantium.
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
