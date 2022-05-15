import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    getFetch(detalleId) // fetch llamada a una api
      .then((respuesta) => setProducto(respuesta))
      .catch((err) => console.log(err));
    // .finally(()=>setLoading(false))
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};
// FechOne
//         .then(resp => setProducto(resp))
//         .catch(err => console.error(err))
export default ItemDetailContainer;
