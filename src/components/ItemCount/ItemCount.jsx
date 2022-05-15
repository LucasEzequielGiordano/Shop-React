import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcount] = useState(initial);

  const sumar = () => setcount(count + 1);
  const restar = () => setcount(count - 1);

  return (
    <div>
      {count}
      <br />
      <button
        onClick={restar}
        className="btn btn-dark"
        disabled={count === initial ? true : null}
      >
        -
      </button>
      <button
        onClick={sumar}
        className="btn btn-dark"
        disabled={count === stock ? true : null}
      >
        +
      </button>
      <br />
      <button onClick={() => onAdd(count)} className="btn btn-dark">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
