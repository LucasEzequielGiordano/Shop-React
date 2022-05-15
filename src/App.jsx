// import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";

// export default function App() {
//   return (
//     <>
//       <NavBar />
//       <ItemListContainer greetings="Online Shop" />
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  const [bool, setBool] = useState(true); // function
  const [personas, setPersonas] = useState([]); // function

  // const getFetch = async () =>{
  //     try {
  //         const peticion = await fetch('/assets/DataPersonas.json')
  //         const peticionParse = JSON.parse(peticion)
  //         setPersonas(peticionParse)
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }

  console.table(personas);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo={"Online Shop"} />}
          />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer saludo={"Online Shop"} />}
          />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
          {/* <Contador initial={1} stock={5} onAdd /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
