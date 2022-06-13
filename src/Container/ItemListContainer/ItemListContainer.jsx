import "./ItemListContainer.css";
import Loading from "../../components/Loader/Loader";
import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

// A React component that is using the useEffect hook to fetch data from a Firestore database.
const ItemListContainer = ({ greetings = "Bella Vita" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    const queryCollectionorder = query(queryCollection, orderBy("category"));

    queryCollectionorder == category
      ? query(queryCollectionorder, where("category", "==", category))
      : queryCollection;
    getDocs(queryCollectionorder)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => error)
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div>
      <h1>{greetings}</h1>
      {loading ? (
        <Loading greeting={"Cargando..."} />
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
