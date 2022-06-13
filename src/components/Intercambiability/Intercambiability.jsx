import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

// It's a function that returns a div that contains either a component called ItemCount or a component called InputCount.
const Intercambiability = () => {
  const [input, setInput] = useState("button");

  const handleInter = () => {
    setInput("input");
  };

  const InputCount = () => {
    return (
      <>
        <Link to="/">
          <button className="btn btn-outline-primary">Seguir comprando</button>
        </Link>
        <Link to="/cart">
          <button className="btn btn-outline-primary">Ir al carrito</button>
        </Link>
      </>
    );
  };

  return (
    <div>
      {input === "ItemCount" ? (
        <ItemCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiability;
