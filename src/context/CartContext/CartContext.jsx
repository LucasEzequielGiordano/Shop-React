import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useState, useContext, createContext } from "react";

/* The above code is creating a context for the cart. */
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const buyOrder = (e) => {
    const nameInput = document.getElementById("name").value;
    const lastNameInput = document.getElementById("lastName").value;
    const emailInput = document.getElementById("email").value;
    const repeatEmailInput = document.getElementById("repeatEmail").value;

    if (emailInput === repeatEmailInput) {
      if (
        nameInput != "" &&
        lastNameInput != "" &&
        emailInput != "" &&
        repeatEmailInput != ""
      ) {
        e.preventDefault();
        let order = {};
        order.date = new Date();
        order.buyer = {
          name: nameInput,
          lastName: lastNameInput,
          email: emailInput,
          repeatEmail: repeatEmailInput,
        };

        order.products = cartList.map((cartProduct) => {
          const id = cartProduct.id;
          const name = cartProduct.name;
          const quantity = cartProduct.quantity;
          const price = cartProduct.price * cartProduct.quantity;

          return { id, name, quantity, price };
        });
        order.total = priceTotal();

        const updateStock = async () => {
          const db = getFirestore();
          const queryCollectionStocks = collection(db, "products");
          const queryUpdateStocks = await query(
            queryCollectionStocks,
            where(
              documentId(),
              "in",
              cartList.map((product) => product.id)
            )
          );
          const batch = writeBatch(db);

          await getDocs(queryUpdateStocks)
            .then((res) =>
              res.docs.forEach((res) =>
                batch.update(res.ref, {
                  stock:
                    res.data().stock -
                    cartList.find((product) => product.id === res.id).quantity,
                })
              )
            )
            .catch((err) => console.log(err));

          batch.commit();
        };

        const db = getFirestore();
        const queryCollection = collection(db, "orders");
        addDoc(queryCollection, order)
          .then((resp) => alert("Su codigo de orden es: " + resp.id))
          .then(() => updateStock())
          .catch((err) => console.log(err))
          .finally(() => emptyCart());
      }
    } else {
      console.log("ingrese otro campo");
    }
  };

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
        buyOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
