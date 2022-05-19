import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greetings={"Online Shop"} />}
          />
          <Route
            path="/categoria/:category"
            element={<ItemListContainer greetings={"Online Shop"} />}
          />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

{
  /* <Route path="/" element={<HomeContent />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/tienda/:categoria" element={<ItemListContainer />} /> 
          <Route path="/detalle/:detailId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Cart />} />

          <Route path="/*" element={<Navigate to="/" replace />} /> */
}

export default App;
