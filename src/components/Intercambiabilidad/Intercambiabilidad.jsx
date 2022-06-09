import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

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

// const ButtonCount = ({ handleInter }) => {
//   return (
//     <button className="btn btn-outline-success" onClick={handleInter}>
//       Agregar Al carrito
//     </button>
//   );
// };

const Intercambiability = () => {
  const [input, setInput] = useState("button");
  const handleInter = () => {
    setInput("input");
  };

  return (
    <div>
      {input === "ItemCount" ? (
        // <ButtonCount handleInter={handleInter} />
        <ItemCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
    </div>
  );
};

export default Intercambiability;
