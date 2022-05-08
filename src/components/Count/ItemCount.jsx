import "./ItemCount.css";
import { useState } from "react";

const ItemCount = () => {
  const stock = Math.floor(Math.random() * 11);
  const [count, setCount] = useState(0);

  const suma = () => {
    count < stock ? setCount(count + 1) : null;
  };
  const resta = () => {
    count == 0 ? null : setCount(count - 1);
  };

  return (
    <div className="formContainer">
      <button onClick={resta}> - </button>
      <span>{count}</span>
      <button onClick={suma}> + </button>
    </div>
  );
};

export default ItemCount;
