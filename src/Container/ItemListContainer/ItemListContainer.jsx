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
  const [listProducts, setListProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  // itemListContainer
  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryCollection = collection(db, 'productos')
  //   getDocs(queryCollection).then(resp => setProducts(resp.docs.map(doc => ({ id: doc.id, ...doc.data() }))) )

  // }, [])

  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryCollection = collection(db, "productos");
  //   const queryCollectionFilter = query(
  //     queryCollection,
  //     where("price", "==", 250)
  //   );
  //   getDocs(queryCollectionFilter)
  //     .then((resp) =>
  //       setListProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  //     )
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // console.log("productos");

  // itemDetailContainer
  // useEffect(() => {
  //   const db = getFirestore()
  //   const dbQuery = doc(db, 'productos', '2ieYtIvj4PMOySycZUvJ')
  //   getdoc(dbQuery).then(resp => setProducts( { id: resp.id, ...resp.data() } ))
  // }, [])

  // console.log(products)

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
