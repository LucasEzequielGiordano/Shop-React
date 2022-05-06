import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/componentContainer/ItemContainer";


export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenido a Bella Vita" />
    </>
  );
}
