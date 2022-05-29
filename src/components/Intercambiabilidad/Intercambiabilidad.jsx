import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir a home")}
        >
          Seguir comprando
        </button>
      </Link>
      <Link to="/cart">
        <button
          className="btn btn-outline-primary"
          onClick={() => console.log("ir a cart")}
        >
          Ir al Cart
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

const Intercambiability = () => {
  const [input, setInput] = useState("button");
  const handleInter = () => {
    setInput("input");
  };

  return (
    <div>
      {input === "button" ? (
        <ButtonCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiability;
