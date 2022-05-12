import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const countProducto = (num) => {
    setCount(count + num);
  };

  return (
    <div className="countContainer">
      <div className="countContainerContador">
        <button
          className="countContainerBtn"
          onClick={() => countProducto(-1)}
          disabled={count === initial ? true : null}
        >
          -
        </button>
        <span className="countContainerCount">{count}</span>
        <button
          className="countContainerBtn"
          onClick={() => countProducto(+1)}
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="btnPrimary"
        onClick={() => onAdd(count)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
