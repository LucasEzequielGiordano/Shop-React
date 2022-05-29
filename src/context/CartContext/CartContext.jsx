import { useState, useContext, createContext } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => cartList.some((el) => el.id === id);

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      alert("Ya agregaste este producto");
      let index = cartList.findIndex((el) => el.id === item.id);
      const newCartList = cartList;
      newCartList[index].quantity += item.quantity;
      setCartList(newCartList);
    } else {
      alert(`Agregaste ${item.quantity} ${item.name} al carrito`);

      setCartList([...cartList, item]);
    }
  };

  const quantityTotal = () =>
    cartList.reduce((acc, prod) => (acc += prod.quantity), 0);

  const priceTotal = () =>
    cartList.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  const emptyCart = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    const newCart = [...cartList];
    let index = newCart.findIndex((product) => product.id === id);
    newCart.splice(index, 1);

    setCartList([...newCart]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteItem,
        quantityTotal,
        priceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
