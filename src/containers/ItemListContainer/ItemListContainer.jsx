import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = ({ greetings = "Hola soy un list container" }) => {
  return (
    <>
      <h1>{greetings}</h1>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
