import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext/CartContext";
import "./App.css";

// A function that returns a JSX element.
const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings={"Bella Vita"} />}
            />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer greetings={"Bella Vita"} />}
            />
            <Route
              path="/detalle/:detailId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />

            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
