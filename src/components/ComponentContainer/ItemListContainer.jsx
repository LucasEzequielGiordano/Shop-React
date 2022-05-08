import ItemCount from "../Count/ItemCount";
import "./ItemListContainer.css";
import "../List/ItemList";
import "../../data/data";

const ItemListContainer = ({ greetings = "Hola soy un list container" }) => {
  return (
    <>
      <h1>{greetings}</h1>
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
