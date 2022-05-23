import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/cart">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir a cart")}
        >
          Ir al Cart
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir a home")}
        >
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button className="btn btn-outline-success" onClick={handleInter}>
      Agregar Al carrito
    </button>
  );
};

const Intercambiabilidad = () => {
  const [input, setInput] = useState("button");
  const handleInter = () => {
    setInput("input");
  };

  return (
    <div>
      <h2>Item Description</h2>

      {input === "button" ? (
        <ButtonCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiabilidad;
