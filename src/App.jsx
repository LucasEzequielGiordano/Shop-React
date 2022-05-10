import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings="Bienvenido a Bella Vita" />
    </>
  );
}
