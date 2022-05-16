import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return productos.map((product) => (
    <Item key={product.id} product={product} />
  ));
};

export default ItemList;
