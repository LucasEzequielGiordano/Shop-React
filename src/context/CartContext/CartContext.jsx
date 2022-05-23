import { useState, useContext, createContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => {
  return useContext(cartContext);
};
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (items) => {
    const index = cartList.findIndex((i) => i.id === items.id);

    if (index > -1) {
      const qtyOld = cartList[index].quantity;

      let qtyNew = qtyOld + items.quantity;

      cartList[index].quantity = qtyNew;

      let arrAux = [...cartList];

      setCartList(arrAux);
    } else {
      setCartList([...cartList, items]);
    }
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
