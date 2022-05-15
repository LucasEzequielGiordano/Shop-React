// import "./ItemListContainer.css";
// import ItemList from "../../components/ItemList/ItemList";

// const ItemListContainer = ({ greetings = "Hola soy un list container" }) => {
//   return (
//     <>
//       <h1>{greetings}</h1>
//       <ItemList />
//     </>
//   );
// };

// export default ItemListContainer;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../../components/ItemCount/ItemCount";

import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";

const ItemListContainer = ({ saludo = "saludo" }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch() // fetch llamada a una api
        .then((respuesta) =>
          setProductos(respuesta.filter((prods) => prods.categoria === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch() // fetch llamada a una api
        .then((respuesta) => setProductos(respuesta))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  function onAdd(cant) {
    console.log(cant);
  }

  console.log(id);

  //onAdd(counter)
  // if (true) else (false) => condition ? tue : false
  return (
    <div>
      {saludo}
      {/* <ItemCount onAdd={ onAdd  } /> */}
      {/* // [<li key=0>1</li>, <li>2</li>, <li>3</li>, <li>4</li>] */}
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemList productos={productos} />
        </div>
      )}

      {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
      {/* <button onClick={()=> setBool(!bool)}>click</button>            */}
    </div>
  );
};

export default ItemListContainer;
