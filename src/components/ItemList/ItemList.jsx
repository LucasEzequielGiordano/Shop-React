import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="containerCards">
      {products.map((product) => (
        <div className="itemChildListClass">
          <Item key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
