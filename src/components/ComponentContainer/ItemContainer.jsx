import "./ItemContainer.css";
import React, { useState } from "react";

const ItemListContainer = ({ greetings = "Hola soy un list container" }) => {
  const [counter, setCounter] = useState(0);

  const resta = () => {
    setCounter(counter - 1);
  };

  const suma = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>{greetings}</h1>
      <div className="formContainer">
        <button onClick={resta}> - </button>
        <span>{counter}</span>
        <button onClick={suma}> + </button>
      </div>
    </>
  );
};

export default ItemListContainer;
