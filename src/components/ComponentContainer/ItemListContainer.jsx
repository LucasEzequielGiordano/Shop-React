import ItemCount from "../Count/ItemCount";
import "./ItemListContainer.css";
// import "../ItemList/ItemList";
// import "../../data/data";

const ItemListContainer = ({ greetings = "Hola soy un list container" }) => {
  const randomStock = Math.floor(Math.random() * 11);
  return (
    <>
      <h1>{greetings}</h1>
      <ItemCount stock={randomStock} initial={1} />
    </>
  );
};

export default ItemListContainer;
