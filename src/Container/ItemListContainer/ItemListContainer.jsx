import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings = "Online Shop" }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    if (category === "aros" || category === "pulseras") {
      getFetch()
        .then((res) => {
          setListProducts(res.filter((item) => item.category === category));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else if (category === undefined) {
      getFetch()
        .then((res) => {
          setListProducts(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

  function onAdd(qty) {
    console.log(qty);
  }
  return (
    <div>
      <h1>{greetings}</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="itemChildListClass">
          <ItemList products={listProducts} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
