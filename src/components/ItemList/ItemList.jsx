// import React, { useEffect, useState } from "react";
// import Item from "../Item/Item";
// import { productos } from "../../helpers/getFetch";

// import "./ItemList.css";

// const ItemList = () => {
//   const [products, setProducts] = useState([]);
//   const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   });
//   const getProductsFromDB = async () => {
//     try {
//       const result = await getProducts;
//       setProducts(result);
//     } catch (error) {
//       console.log(error);
//       alert("No podemos mostrar los productos en este momento");
//     }
//   };
//   useEffect(() => {
//     getProductsFromDB();
//   }, []);

//   return (
//     <div className="productListContainer">
//       {products.length ? (
//         <>
//           {products.map((product) => {
//             return (
//               <div key={product.id}>
//                 <Item
//                   name={product.name}
//                   img={product.img}
//                   price={product.price}
//                 />
//               </div>
//             );
//           })}
//         </>
//       ) : (
//         <p>Cargando productos...</p>
//       )}
//     </div>
//   );
// };

// export default ItemList;

import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return productos.map((product) => (
    <Item key={product.id} product={product} />
  ));
};

export default ItemList;
