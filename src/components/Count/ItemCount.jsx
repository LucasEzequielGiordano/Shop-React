import "./ItemCount.css";
// import { useState } from "react";

// const ItemCount = () => {
//   const stock = Math.floor(Math.random() * 11);
//   const [count, setCount] = useState(0);

//   const suma = () => {
//     count < stock ? setCount(count + 1) : null;
//   };
//   const resta = () => {
//     count == 0 ? null : setCount(count - 1);
//   };

//   return (
//     <div className="formContainer">
//       <button onClick={resta}> - </button>
//       <span>{count}</span>
//       <button onClick={suma}> + </button>
//     </div>
//   );
// };

// export default ItemCount;
import React, { useState } from "react";
import "./itemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const onClick = () => {
    onAdd = console.log(count);
  };

  return (
    <section className="count">
      <ul className="count__list">
        <li>
          <button type="button" onClick={resta}>
            -
          </button>
        </li>
        <li>{count}</li>
        <li>
          <button type="button" onClick={suma}>
            +
          </button>
        </li>
      </ul>
      <button
        type="submit"
        className="count__button"
        value={count}
        onClick={onClick}
      >
        AGREGAR AL CARRITO
      </button>
    </section>
  );
};

export default ItemCount;
