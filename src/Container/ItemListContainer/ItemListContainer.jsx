import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFetch } from "../../helpers/getFetch";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings = "Online Shop" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    if (!category) {
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          )
        )
        .catch((error) => error)
        .finally(() => setLoading(false));
    } else {
      const queryCollectionFilter = query(
        queryCollection,
        where("category", "==", category)
      );
      getDocs(queryCollectionFilter)
        .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        )
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

  return (
    <div>
      <h1>{greetings}</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="itemChildListClass">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
