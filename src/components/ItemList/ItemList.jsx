import Item from "../Item/Item";
import "./ItemList.css";

/**
 * It takes in an array of products and returns a div.
 * Inside this, it maps through the array of products and returns a div.
 * Inside the div, it returns an Item component with a key of product.id and a product prop of product.
 */
const ItemList = ({ products }) => {
  return (
    <div className="containerCards">
      {products.map((product) => (
        <div key={product.id} className="itemChildListClass">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
