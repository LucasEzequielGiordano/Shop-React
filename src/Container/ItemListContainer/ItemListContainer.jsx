import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";

const ItemListContainer = ({ greetings = "Online Shop" }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    if (category === "aros" || category === "pulseras") {
      getFetch()
        .then((respuesta) => {
          setListaProductos(
            respuesta.filter((item) => item.category === category)
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else if (category === "all") {
      getFetch()
        .then((respuesta) => {
          setListaProductos(respuesta);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

  function onAdd(cant) {
    console.log(cant);
  }
  return (
    <div>
      <h1>{greetings}</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemList productos={listaProductos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
